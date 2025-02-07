import { useState } from "react";
import "./Info.scss"

const TELEGRAM_BOT_TOKEN = "7640890674:AAE0mxdRfHJCXrZXFMnOnig53RxshoE2xTA";
const TELEGRAM_CHAT_ID = "1058132486";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="info">
      <h2 className="text-lg font-bold mb-2">Contact Form</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">Send</button>
    </form>
  );
}

