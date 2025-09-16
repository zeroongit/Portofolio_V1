import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipf9ajo",   
        "template_x9cegek",  
        form.current,
        "DBvrEo400U7c9Ruwq"    
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6282125866547" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition mb-8"
        >
          Chat via WhatsApp
        </a>

        {/* Email Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-8">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-cyan-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
