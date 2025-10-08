import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // max 5 requests per minute
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  const userLimit = rateLimitMap.get(ip);
  
  if (now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  if (userLimit.count >= maxRequests) {
    return true;
  }
  
  userLimit.count++;
  return false;
}

export async function POST(req) {
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(/, /)[0] : req.headers.get("x-real-ip") || 'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return Response.json({ 
        status: 'error', 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }

    const body = await req.json();
    const { email, subject, message } = body;

    // Input validation
    if (!email || !subject || !message) {
      return Response.json({ 
        status: 'error', 
        error: 'Missing required fields: email, subject, and message are required' 
      }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ 
        status: 'error', 
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Content length validation
    if (subject.length > 100) {
      return Response.json({ 
        status: 'error', 
        error: 'Subject must be less than 100 characters' 
      }, { status: 400 });
    }

    if (message.length > 1000) {
      return Response.json({ 
        status: 'error', 
        error: 'Message must be less than 1000 characters' 
      }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: ['hafizhtr24@gmail.com', email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for reaching out!</p>
        <p>I'll get back to you ASAP.</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ 
        status: 'error', 
        error: 'Failed to send email. Please try again later.' 
      }, { status: 500 });
    }

    return Response.json({ 
      status: 'success', 
      message: 'Email sent successfully!',
      data 
    });
  } catch (error) {
    console.error("Send email error:", error);
    
    // Handle different types of errors
    if (error instanceof SyntaxError) {
      return Response.json({ 
        status: 'error', 
        error: 'Invalid request format' 
      }, { status: 400 });
    }
    
    return Response.json({ 
      status: 'error', 
      error: 'Internal server error. Please try again later.' 
    }, { status: 500 });
  }
}
