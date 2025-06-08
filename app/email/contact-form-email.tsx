import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  senderEmail: string;
  message: string;
}

export default function ContactFormEmail({
  senderEmail,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            maxWidth: "600px",
          }}
        >
          <Section
            style={{
              borderBottom: "1px solid #eaeaea",
              paddingBottom: "12px",
              marginBottom: "20px",
            }}
          >
            <Text style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
              📩 New Contact Form Submission
            </Text>
          </Section>

          <Text style={{ fontSize: "16px", marginBottom: "6px" }}>
            <strong>From:</strong> {senderEmail}
          </Text>

          <Text
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </Text>

          <Section
            style={{
              borderTop: "1px solid #eaeaea",
              paddingTop: "20px",
              marginTop: "20px",
            }}
          >
            <Text style={{ fontSize: "14px", color: "#888" }}>
              This message was sent from your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
