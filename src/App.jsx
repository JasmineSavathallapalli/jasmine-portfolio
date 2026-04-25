import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Overview from "./sections/Overview";
import StarsBackground from "./components/StarsBackground";
import Principles from "./sections/Principles";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleResumeSubmit = async ({ name, email }) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwct3hzAFlbj91Z4y3kbT9hvNYRZHQ0RZZsWSEIIV75JcChgvoPJN7zPzl7z0UcNumq/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        window.location.href = "/private/JasmineSavathallapalli.pdf";
      } else {
        alert("Something went wrong!");
      }
    } catch {
      alert("Failed to send.");
    }
  };

  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        bg-white text-gray-900
        dark:bg-[#060B18] dark:text-white
        transition-colors duration-300
        text-base md:text-lg   /* 🔥 ONLY CHANGE */
      "
    >
      {/* 🌟 Cursor Glow */}
        <div className="hidden md:block">
          <CursorGlow />
        </div>  

      {/* 🌌 Stars (ONLY in dark mode) */}
      <div className="hidden dark:block">
        <StarsBackground />
      </div>

      {/* 🌫️ Gradient overlay (dark only) */}
      <div className="hidden dark:block fixed inset-0 -z-10 bg-gradient-to-r from-[#060B18] via-transparent to-[#060B18]" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Hero setResumeOpen={setResumeOpen} />

        <Overview />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Principles />
        <Contact />

        <Footer />
      </div>

      {/* RESUME MODAL */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onSubmit={handleResumeSubmit}
      />
    </div>
  );
}