import type { NextApiRequest, NextApiResponse } from "next";
import { isValidEmail, sanitizeString, checkRateLimit } from "@/lib/validation";

type FormsfreeResponse = {
  success: boolean;
  message: string;
  errors?: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormsfreeResponse>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    // Rate limiting - 5 requests per minute per IP
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const rateLimit = checkRateLimit(`contact:${clientIp}`, 5, 60000);

    if (!rateLimit.allowed) {
      return res.status(429).json({
        success: false,
        message: `Too many requests. Please try again in ${Math.ceil(
          rateLimit.resetIn / 1000
        )} seconds.`,
      });
    }

    // Sanitize and extract input
    const name = sanitizeString(req.body.name, 100);
    const email = sanitizeString(req.body.email, 254);
    const subject = sanitizeString(req.body.subject, 200);
    const message = sanitizeString(req.body.message, 5000);

    // Validation
    const errors: string[] = [];
    if (!name) errors.push("Name is required");
    if (!email) {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Please enter a valid email address");
    }
    if (!subject) errors.push("Subject is required");
    if (!message) errors.push("Message is required");
    if (message && message.length < 10) {
      errors.push("Message must be at least 10 characters");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    // Formsfree API endpoint
    const formsfreeEndpoint = `${process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}`; // Replace with your Formsfree form ID

    // Send data to Formsfree
    const formsfreeResponse = await fetch(formsfreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const formsfreeData = await formsfreeResponse.json();

    // Check if the submission was successful
    if (formsfreeResponse.ok) {
      return res.status(200).json({
        success: true,
        message: "Message sent successfully!",
      });
    } else {
      return res.status(formsfreeResponse.status).json({
        success: false,
        message: "Failed to send message",
        errors: [formsfreeData.message || "Unknown error"],
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
}
