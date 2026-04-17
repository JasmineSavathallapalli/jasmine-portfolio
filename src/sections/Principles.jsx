import { useState } from "react";

export default function Principles() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
        max-w-6xl mx-auto px-6 py-16
        bg-white dark:bg-[#020617]
        text-gray-900 dark:text-white
      "
    >

      {/* HEADER */}
      <p className="text-green-500 dark:text-green-400 uppercase tracking-[3px] text-sm md:text-base mb-3">
        // MORE ABOUT ME
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tight">
        Professional Highlights
        <span className="text-purple-500 dark:text-purple-400">.</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div
          className="
relative
bg-gray-100 dark:bg-[#101A2C]
border border-gray-300 dark:border-[#1e293b]
rounded-2xl p-6 overflow-hidden

transition-all duration-300 ease-out

hover:-translate-y-1
hover:border-purple-400

hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
"
        >

          {/* TOP GRADIENT LINE */}
          <div className="absolute top-0 left-0 w-full h-[2px]
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

          <div className="flex items-center gap-2 mb-4 
            text-gray-700 dark:text-gray-300 text-base md:text-lg font-semibold">
            🔗 Professional Highlights
          </div>

          <div className="border-t border-gray-300 dark:border-[#1e293b] mb-5"></div>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">

            <li>• <span className="text-gray-900 dark:text-white font-medium">Tech explorer</span> : continuously learning</li>

            <li>• <span className="text-gray-900 dark:text-white font-medium">Open-source</span> : contributor</li>

            <li>• <span className="text-gray-900 dark:text-white font-medium">AI-focused</span> : actively building</li>

            <li>• <span className="text-gray-900 dark:text-white font-medium">Full-stack developer</span> : building solutions</li>

            <li>• <span className="text-gray-900 dark:text-white font-medium">GitHub profile</span> : consistently growing</li>

          </ul>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
relative
bg-gray-100 dark:bg-[#101A2C]
border border-gray-300 dark:border-[#1e293b]
rounded-2xl p-6 overflow-hidden

transition-all duration-300 ease-out

hover:-translate-y-1
hover:border-purple-400

hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
"
        >

          {/* TOP GRADIENT LINE */}
          <div className="absolute top-0 left-0 w-full h-[2px]
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

          <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4 text-base md:text-lg">
            Principles
          </h3>

          {/* QUOTE */}
          <div
            className="
              bg-gray-200 dark:bg-[#1A2338]
              border-l-2 border-blue-500
              p-4 rounded-md
              text-gray-700 dark:text-gray-300
              text-base md:text-lg leading-relaxed
            "
          >
            Build, adapt, and improve — because systems should evolve with real-world needs.
          </div>

          {/* TOGGLE */}
          <div
            onClick={() => setOpen(!open)}
            className="mt-5 flex items-center gap-2 text-base md:text-lg text-blue-500 dark:text-blue-400 cursor-pointer"
          >
            <span>{open ? "▼" : "▶"}</span>
            More About Me
          </div>

          {/* EXPAND */}
          {open && (
            <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              <li>• Like turning ideas into working systems</li>
              <li>• Constantly learning and exploring new technologies</li>
              <li>• Interested in creative arts and music (when not coding)</li>
              <li>• Volunteered at Prerana Helping Society (PHS)</li>
            </ul>
          )}

        </div>

      </div>
    </section>
  );
}