import type { NextApiRequest, NextApiResponse } from "next";

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
    const { name, email, subject, message } = req.body;

    // Basic validation
    const errors: string[] = [];
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!subject) errors.push("Subject is required");
    if (!message) errors.push("Message is required");

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    // Formsfree API endpoint
    const formsfreeEndpoint = "https://formspree.io/f/xyzpkpvg"; // Replace with your Formsfree form ID

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
