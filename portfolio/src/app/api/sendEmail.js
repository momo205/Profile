import { Resend } from "resend";

const resend = new Resend("re_3Z4TU2XR_LNCJcJtVGoRsoGmxhDoyy2KF");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      await resend.emails.send({
        from: email,
        to: "muhammadb2345@gmail.com",
        subject: `New message from ${name}`,
        html: `<p>${message}<br/>Sender Email: ${email}</p>`,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
