import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100).regex(/^[a-zA-Z\s\.\-']{2,}$/, "Name must contain only letters and be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Area of interest is required"),
  additionalService: z.string().optional(),
  fromDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "From date cannot be in the past" }),
  toDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "To date cannot be in the past" }),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  botcheck: z.string().optional(), // honeypot field
}).refine((data) => {
  if (data.fromDate && data.toDate) {
    return new Date(data.toDate) >= new Date(data.fromDate);
  }
  return true;
}, { message: "To date must be after From date", path: ["toDate"] });

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

    const responseText = await response.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      result = { errorText: responseText };
    }

    if (response.ok) {
      return NextResponse.json({ message: "Success", data: result }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed to submit form", data: result, status: response.status }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Form submission error:", error);
    return NextResponse.json({ message: "Internal server error", error: error?.message || String(error) }, { status: 500 });
  }
}
