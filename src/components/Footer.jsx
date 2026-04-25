import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] border-t border-gray-800 py-8 px-6 mt-20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">

        {/* LEFT */}
        <p className="text-xs sm:text-sm md:text-lg text-gray-400 font-mono text-center md:text-left whitespace-nowrap">
          ©2026 <span className="text-blue-400">Jasmine Savathallapalli</span>. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-lg text-gray-400">

          <a
            href="https://github.com/JasmineSavathallapalli"
            target="_blank"
            className="flex items-center gap-2 hover:text-white transition whitespace-nowrap"
          >
            <FaGithub className="text-sm sm:text-base md:text-xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jasminesavathallapalli"
            target="_blank"
            className="flex items-center gap-2 hover:text-white transition whitespace-nowrap"
          >
            <FaLinkedin className="text-sm sm:text-base md:text-xl" />
            LinkedIn
          </a>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs md:text-base font-mono whitespace-nowrap">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            All systems go
          </div>

        </div>
      </div>
    </footer>
  );
}