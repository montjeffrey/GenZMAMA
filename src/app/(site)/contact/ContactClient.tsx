"use client";

import { useState, useTransition, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WashiTape from "../../components/ui/WashiTape";
import PolaroidFrame from "../../components/ui/PolaroidFrame";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";
import { submitInquiry } from "../../actions";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactClient() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileRef = useRef<TurnstileInstance>(null);

    const { register, handleSubmit, formState: { errors }, setError } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        setStatusMessage(null);

        if (!turnstileToken) {
            // Allow bypass in development
            if (process.env.NODE_ENV === "development" || window.location.hostname === "localhost") {
                console.log("[DEV] Bypassing client-side Turnstile check");
                // We'll proceed with a dummy token. Backend security.ts handles this based solely on NODE_ENV check
                // but we need to pass *something* so the client code below runs.
                // We update state safely inside the transition/async flow below, or just pass a string directly to action.
            } else {
                turnstileRef.current?.reset();
                setStatusMessage("Please verify you are human.");
                return;
            }
        }

        const effectiveToken = turnstileToken || "DEV_BYPASS";

        startTransition(async () => {
            const response = await submitInquiry(data, effectiveToken);

            if (response.success) {
                setIsSubmitted(true);
                turnstileRef.current?.reset();
            } else {
                if (response.errors) {
                    Object.entries(response.errors).forEach(([key, messages]) => {
                        if (messages && messages.length > 0) {
                            setError(key as keyof ContactFormData, { message: messages[0] });
                        }
                    });
                } else if (response.message) {
                    setStatusMessage(response.message);
                } else {
                    setStatusMessage("Something went wrong. Please try again.");
                }
                turnstileRef.current?.reset();
                setTurnstileToken(null);
            }
        });
    };

    return (
        <div className="min-h-screen py-12 bg-white relative">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-hand text-warm-brown relative inline-block">
                        Start the Conversation
                        <WashiTape color="forest" className="w-full -top-4 left-0 rotate-1 opacity-40 -z-10" />
                    </h1>
                    <p className="mt-4 font-sans text-stone-600">
                        We prioritize safety and fit, so every enrollment starts with a chat.
                        <br /><strong>Vetting First:</strong> Submit this form &rarr; We Interview &rarr; Secure Booking.
                    </p>
                </div>

                <PolaroidFrame caption="Let's get to know each other!" rotation={1} className="bg-[#FAF9F6] p-4 md:p-8" fitContent={true}>
                    {isSubmitted ? (
                        <div className="text-center py-12 px-4 space-y-6">
                            <div className="text-6xl animate-bounce">💌</div>
                            <h2 className="text-3xl font-hand text-warm-brown text-center">Inquiry Sent!</h2>
                            <p className="font-sans text-stone-600 text-lg">
                                Thanks for reaching out! I've received your details and will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-forest-green underline font-hand text-xl hover:text-terracotta"
                            >
                                Send another?
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-sans text-left">
                            {/* Parent Details */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Parent Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-bold text-warm-brown mb-1">Name</label>
                                        <input {...register("parentName")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="Jane Doe" />
                                        {errors.parentName && <span className="text-red-500 text-xs font-hand">{(errors.parentName as any).message}</span>}
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-warm-brown mb-1">Phone</label>
                                        <input {...register("phone")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="(555) 123-4567" />
                                        {errors.phone && <span className="text-red-500 text-xs font-hand">{(errors.phone as any).message}</span>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm font-bold text-warm-brown mb-1">Email</label>
                                        <input {...register("email")} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="jane@example.com" />
                                        {errors.email && <span className="text-red-500 text-xs font-hand">{(errors.email as any).message}</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Child Logistics */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Child Logistics</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="text-sm font-bold text-warm-brown mb-1"># Children</label>
                                        <select {...register("childCount")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-warm-brown mb-1">Ages</label>
                                        <input {...register("childAges")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white" placeholder="e.g. 2 and 4" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-warm-brown mb-1">Start Date</label>
                                        <input type="date" {...register("startDate")} className="w-full border-2 border-stone-200 rounded-lg p-2 bg-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Free Text */}
                            <div className="space-y-4">
                                <h3 className="font-hand text-2xl text-terracotta border-b border-dashed border-terracotta/30 pb-2">Tell us about them</h3>
                                <div>
                                    <label className="text-sm font-bold text-warm-brown mb-1">Personality, Needs, Favorites?</label>
                                    <textarea {...register("message")} rows={4} className="w-full border-2 border-stone-200 rounded-lg p-2 focus:border-terracotta outline-none bg-white" placeholder="My child loves dinosaurs and nap time is tricky..." />
                                    {errors.message && <span className="text-red-500 text-xs font-hand">{(errors.message as any).message}</span>}
                                </div>
                            </div>

                            {/* Turnstile Widget */}
                            <div className="flex justify-center my-4 min-h-[65px]">
                                <Turnstile
                                    ref={turnstileRef}
                                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                                    onSuccess={setTurnstileToken}
                                    onExpire={() => setTurnstileToken(null)}
                                    onError={() => setStatusMessage("Security check encountered an error.")}
                                    options={{
                                        theme: 'light',
                                        size: 'flexible',
                                        appearance: 'interaction-only'
                                    }}
                                />
                            </div>

                            <div className="pt-4 text-center">
                                {statusMessage && (
                                    <p className="text-red-500 mb-4 font-hand">{statusMessage}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="bg-forest-green text-white font-hand text-2xl px-12 py-3 rounded-full hover:bg-forest-green/90 shadow-lg hover:-rotate-1 transition-transform w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "Sending..." : "Send Inquiry to Mrs. A"}
                                </button>
                            </div>

                        </form>
                    )}
                </PolaroidFrame>
            </div>
        </div>
    );
}
