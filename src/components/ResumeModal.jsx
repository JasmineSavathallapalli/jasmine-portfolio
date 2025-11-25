import { useState } from "react";

export default function ResumeModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  // ⭐ Strong email validator
  const isValidEmail = (email) => {
    const pattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter both name and email.");
      return;
    }

    // ⭐ Strong validation check
    if (!isValidEmail(email)) {
      alert("Please enter a valid email (example@gmail.com)");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwct3hzAFlbj91Z4y3kbT9hvNYRZHQ0RZZsWSEIIV75JcChgvoPJN7zPzl7z0UcNumq/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      alert("Verified! Opening resume...");

      // ⭐ Open resume stored in /public/private/
window.open("/private/JasmineSavathallapalli.pdf", "_blank");
      setName("");
      setEmail("");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-6">

        <h2 className="text-lg font-semibold mb-4 text-center">
          View Resume
        </h2>

        <p className="text-xs text-slate-600 dark:text-slate-400 text-center mb-4">
          Please share your name and email to access my resume.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">

          {/* Name */}
          <div>
            <label className="block mb-1 text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm font-medium"
          >
            View Resume
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 w-full text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
