import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .min(2, "Your name should be at least 2 characters long.")
    .max(100, "Please use a shorter name (max 100 characters).")
    .regex(/^[a-zA-Z\s\.\-']{2,}$/, "Please use only letters, spaces, or hyphens in your name."),
  
  email: z.string()
    .min(1, "We need your email to reply to your inquiry.")
    .email("Please provide a valid email address (e.g., traveler@example.com)."),
    
  phone: z.string().optional(),
  
  interest: z.string()
    .min(1, "Please select what you're most interested in."),
    
  additionalService: z.string().optional(),
  
  fromDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "Oops! Your travel start date cannot be in the past." }),
  
  toDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "Oops! Your travel end date cannot be in the past." }),
  
  message: z.string()
    .min(10, "Please provide a bit more detail (at least 10 characters).")
    .max(5000, "Your message is a bit too long (maximum 5000 characters)."),
    
  botcheck: z.string().optional(), // honeypot field
}).refine((data) => {
  if (data.fromDate && data.toDate) {
    return new Date(data.toDate) >= new Date(data.fromDate);
  }
  return true;
}, { message: "Your return date cannot be earlier than your departure date.", path: ["toDate"] });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input with zod
    const parsedData = contactSchema.safeParse(body);
    
    if (!parsedData.success) {
      // Returning 200 instead of 400 to prevent browser console from logging scary red network errors for normal validation failures
      return NextResponse.json(
        { success: false, message: "Invalid input data", errors: parsedData.error.flatten() },
        { status: 200 }
      );
    }
    
    // Honeypot check: If botcheck is filled, silently drop the request and return success
    if (parsedData.data.botcheck && parsedData.data.botcheck !== "") {
      return NextResponse.json({ success: true, message: "Success" }, { status: 200 });
    }

    // Return the access key to the client so it can submit directly to Web3Forms
    // This bypasses Cloudflare's Bot Fight Mode which blocks Next.js servers on the free tier.
    return NextResponse.json({ 
      success: true,
      message: "Validation passed", 
      access_key: process.env.WEB3FORMS_ACCESS_KEY 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Validation error:", error);
    return NextResponse.json({ message: "Internal server error", error: error?.message || String(error) }, { status: 500 });
  }
}
