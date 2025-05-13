import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
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
      return Response.json({ status: 'error', error: error.message }, { status: 500 });
    }

    return Response.json({ status: 'success', data });
  } catch (error) {
    console.error("Send email error:", error);
    return Response.json({ status: 'error', error: error.message }, { status: 500 });
  }
}
