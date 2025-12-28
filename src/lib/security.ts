import dns from "dns";
import { promisify } from "util";

// Promisify the DNS resolve method for easier async/await usage
const resolveMx = promisify(dns.resolveMx);

interface VerificationResult {
    success: boolean;
    message?: string;
}

/**
 * Verifies the Cloudflare Turnstile token with the Cloudflare API.
 */
export async function verifyTurnstile(token: string): Promise<VerificationResult> {
    // Bypass verification in development
    if (process.env.NODE_ENV === "development") {
        console.log("[DEV] Bypassing Turnstile verification");
        return { success: true };
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    // Fail checking if key is missing (dev safety), but in prod this should be fatal or logged
    if (!secretKey) {
        console.error("TURNSTILE_SECRET_KEY is not defined in environment variables.");
        return { success: false, message: "Server configuration error." };
    }

    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();

        if (!data.success) {
            console.warn("Turnstile validation failed:", data["error-codes"]);
            return {
                success: false,
                message: "Security check failed. Please refresh the page and try again."
            };
        }

        return { success: true };
    } catch (error) {
        console.error("Turnstile verification error:", error);
        return {
            success: false,
            message: "Unable to verify security token. Please try again."
        };
    }
}

/**
 * Verifies that the email domain has valid MX records (can receive email).
 */
export async function verifyEmailDeliverability(email: string): Promise<VerificationResult> {
    if (!email || !email.includes("@")) {
        return { success: false, message: "Invalid email format." };
    }

    const domain = email.split("@")[1];

    try {
        const records = await resolveMx(domain);

        if (!records || records.length === 0) {
            return {
                success: false,
                message: "This email domain doesn't appear to be active or able to receive emails."
            };
        }

        return { success: true };
    } catch (error) {
        // Determine if it's a DNS error or other system error
        const err = error as NodeJS.ErrnoException;

        // ENOTFOUND/ENODATA means the domain definitely doesn't exist or has no records
        if (err.code === 'ENOTFOUND' || err.code === 'ENODATA') {
            return {
                success: false,
                message: "Could not find a valid mail server for this domain."
            };
        }

        // If DNS check fails due to network/timeout or other reasons, we shouldn't block the user.
        // We log the warning but return success to avoid false positives blocking legitimate users during outages.
        console.warn(`MX Lookup warning for ${domain}:`, error);
        return { success: true };
    }
}
