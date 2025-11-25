import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Overview from "./sections/Overview";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Always Dark Mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // ⭐ This function sends data to Google Sheets + opens resume
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
        // ⭐ Open your resume file from public/private folder
        window.location.href = "/private/JasmineSavathallapalli.pdf";
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("Failed to send. Check your internet or try again.");
    }
  };

  return (
    <div className="bg-[#090b1a] text-white min-h-screen">
      <Navbar />

      {/* Pass setResumeOpen here */}
      <Hero setResumeOpen={setResumeOpen} />

      <Overview />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Resume Popup */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onSubmit={handleResumeSubmit}  
      />
    </div>
  );
}
