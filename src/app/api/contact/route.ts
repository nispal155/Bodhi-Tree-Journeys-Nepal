import { NextResponse } from "next/server";
import { z } from "zod";

// Define the expected schema for the contact form
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  interest: z.string().min(1),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
  message: z.string().min(1, "Message is required").max(5000),
  botcheck: z.string().optional(), // honeypot field
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input with zod
    const parsedData = contactSchema.safeParse(body);
    
    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Invalid input data", errors: parsedData.error.flatten() },
        { status: 400 }
      );
    }
    
    // Honeypot check: If botcheck is filled, silently drop the request and return success
    if (parsedData.data.botcheck && parsedData.data.botcheck !== "") {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    // Prepare payload for Web3Forms
    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      ...parsedData.data,
      subject: "New Inquiry from Bodhi Tree Journeys Nepal",
    };

    // Forward the request to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.status === 200) {
      return NextResponse.json({ message: "Success", data: result }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed to submit form", data: result }, { status: 500 });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
