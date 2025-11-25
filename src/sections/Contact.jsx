import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  // ✅ Email Validation Function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const email = form.email.value.trim();

    // ❗ Validate Email Before Sending
    if (!validateEmail(email)) {
      alert("Please enter a valid email address (example: yourname@gmail.com)");
      return;
    }

    emailjs
      .sendForm(
        "service_qryzowx",       // Service ID
        "template_22m0qvl",      // Template ID
        formRef.current,
        "cn4DwOcBHJvXKr4OV"      // Public key
      )
      .then(() => {
        alert("Message Sent Successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* ⭐ MOBILE MOON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex md:hidden justify-center items-center mb-10"
        >
          <div className="relative w-64 h-64">

            <div className="absolute inset-0 rounded-full 
              bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 
              blur-3xl opacity-70 animate-pulse"></div>

            <div className="absolute inset-4 rounded-full 
              bg-gradient-to-br from-[#1a1438] via-[#3b1d66] to-[#0a0f29]
              shadow-[0_0_40px_rgba(107,33,168,0.6)]"></div>

            {[...Array(18)].map((_, i) => {
              const radius = 110 + Math.random() * 25;
              const angle = Math.random() * Math.PI * 2;
              const x = 128 + radius * Math.cos(angle);
              const y = 128 + radius * Math.sin(angle);

              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-star"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* ⭐ LEFT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#120f2b] p-10 rounded-2xl shadow-xl border border-white/10"
        >
          <p className="text-sm text-gray-400 tracking-wider mb-2">GET IN TOUCH</p>

          <h2 className="text-4xl font-extrabold mb-10 text-white">
            Contact<span className="text-purple-400">.</span>
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm">Your Name</label>
              <input
                name="name"
                type="text"
                placeholder="What's your good name?"
                className="w-full bg-[#1a1538] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none border border-white/5 focus:border-purple-500 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm">Your email</label>
              <input
                name="email"
                type="email"
                placeholder="What's your web address?"
                className="w-full bg-[#1a1538] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none border border-white/5 focus:border-purple-500 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/90 text-sm">Your Message</label>
              <textarea
                name="message"
                placeholder="What you want to say?"
                rows="6"
                className="w-full bg-[#1a1538] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none border border-white/5 focus:border-purple-500 transition resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#1d193c] hover:bg-[#2a2457] text-white font-medium py-3 rounded-xl transition shadow-md"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* ⭐ DESKTOP MOON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center items-center relative -top-10"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 blur-3xl opacity-70 animate-pulse"></div>

            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1438] via-[#3b1d66] to-[#0a0f29] shadow-[0_0_40px_rgba(107,33,168,0.6)]"></div>

            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
