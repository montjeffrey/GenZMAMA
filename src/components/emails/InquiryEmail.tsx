import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Font,
} from "@react-email/components";
import * as React from "react";

interface InquiryEmailProps {
    parentName: string;
    email: string;
    phone: string;
    childCount: string;
    childAges: string;
    startDate: string;
    message?: string;
}

export const InquiryEmail = ({
    parentName,
    email,
    phone,
    childCount,
    childAges,
    startDate,
    message = "",
}: InquiryEmailProps) => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>New Childcare Inquiry from {parentName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Inquiry Received! 💌</Heading>
                    <Text style={text}>
                        You have a new message from the contact form.
                    </Text>

                    <Section style={section}>
                        <Heading as="h2" style={h2}>Parent Details</Heading>
                        <Text style={detailRow}><strong>Name:</strong> {parentName}</Text>
                        <Text style={detailRow}><strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a></Text>
                        <Text style={detailRow}><strong>Phone:</strong> <a href={`tel:${phone}`} style={link}>{phone}</a></Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading as="h2" style={h2}>Child & Care Details</Heading>
                        <Text style={detailRow}><strong>Children:</strong> {childCount}</Text>
                        <Text style={detailRow}><strong>Ages:</strong> {childAges}</Text>
                        <Text style={detailRow}><strong>Desired Start:</strong> {startDate}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading as="h2" style={h2}>Message</Heading>
                        <Text style={messageText}>"{message}"</Text>
                    </Section>

                    <Text style={footer}>
                        Sent from TheGenZMAMA Contact Form
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    borderRadius: "5px",
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Roboto', 'Helvetica', sans-serif",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    marginBottom: "30px",
};

const h2 = {
    color: "#444",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "0",
    marginBottom: "10px",
};

const text = {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
};

const section = {
    marginBottom: "20px",
};

const detailRow = {
    color: "#555",
    fontSize: "15px",
    margin: "5px 0",
};

const link = {
    color: "#2754C5",
    textDecoration: "none",
};

const messageText = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "5px",
    fontStyle: "italic",
    color: "#333",
    fontSize: "15px",
    lineHeight: "1.6",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    marginTop: "30px",
    textAlign: "center" as const,
};

export default InquiryEmail;
