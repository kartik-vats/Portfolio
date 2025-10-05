import nodemailer from "nodemailer";

export async function POST(request: { json: () => PromiseLike<{ name: any; email: any; message: any; }> | { name: any; email: any; message: any; }; }) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill all fields" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"My Website" <${process.env.GMAIL_USER}>`, // your Gmail
      to: process.env.GMAIL_USER, // send to yourself
      replyTo: email, // so you can reply directly to visitor
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, message: "Your message has been sent, I will try to respond asap!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}
