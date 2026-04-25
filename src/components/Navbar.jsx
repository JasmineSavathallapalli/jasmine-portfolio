import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md 
      bg-white/80 dark:bg-[#060B18]/80 
      border-b border-gray-300 dark:border-gray-800"
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-mono font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-1">
          <span className="text-gray-500">&lt;</span>
          <span className="text-blue-500 dark:text-blue-400">Jasmine</span>
          <span className="text-green-500 dark:text-green-400">/</span>
          <span className="text-gray-500">&gt;</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-base md:text-lg text-gray-600 dark:text-gray-400">
          {["about", "experience", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-3 py-1.5 rounded-md transition
              hover:text-black dark:hover:text-white
              hover:bg-gray-200 dark:hover:bg-[#101A2C]"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 text-base sm:text-lg rounded-lg 
              bg-gray-200 dark:bg-[#101A2C] 
              border border-gray-300 dark:border-gray-700 
              hover:border-blue-500 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-5 sm:w-6 h-[2px] bg-black dark:bg-white"></span>
            <span className="w-5 sm:w-6 h-[2px] bg-black dark:bg-white"></span>
            <span className="w-5 sm:w-6 h-[2px] bg-black dark:bg-white"></span>
          </button>

        </div>
      </nav>

      {open && (
        <div
          className="md:hidden 
          bg-white dark:bg-[#060B18] 
          border-t border-gray-300 dark:border-gray-800 
          px-6 py-5 flex flex-col gap-5 
          text-sm sm:text-base text-gray-700 dark:text-gray-300"
        >
          {["about", "experience", "skills", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}