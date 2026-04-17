import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] border-t border-gray-800 py-6 px-6 mt-20">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <p className="text-sm text-gray-400 font-mono">
          © 2026{" "}
          <span className="text-blue-400">Jasmine Savathallapalli</span>. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm text-gray-400">

          <a
            href="https://github.com/JasmineSavathallapalli"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jasminesavathallapalli"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* STATUS */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            All systems go
          </div>

        </div>
      </div>
    </footer>
  );
}