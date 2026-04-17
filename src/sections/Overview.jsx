export default function Overview() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24 
      text-gray-900 dark:text-white"
    >

      {/* HEADER */}
      <p className="text-green-500 dark:text-green-400 tracking-[4px] text-[10px] mb-2">
        // INTRODUCTION
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        Overview<span className="text-blue-500 dark:text-blue-400">.</span>
      </h2>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[14px] mb-6">
            I'm a Full-Stack Builder who enjoys working at the intersection of AI, 
            machine learning, and real-world systems. I like building applications that
            don't just work, but actually solve meaningful problems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[14px] mb-6">
            From designing backend APIs and handling databases to experimenting with AI models and evaluation pipelines,
            I focus on creating systems that are reliable, scalable, and practical. 
            Some of the things I work with:
          </p>

          {/* SKILLS LIST */}
          <ul className="text-gray-700 dark:text-gray-300 text-[14px] space-y-2 mb-6">
            <li>• Full-stack development (React, Node.js, Flask)</li>
            <li>• Backend systems and REST APIs</li>
            <li>• Databases (PostgreSQL, MongoDB)</li>
            <li>• AI/ML models and data pipelines</li>
            <li>• Deployment with Docker & cloud platforms</li>
          </ul>

          <p className="text-gray-500 dark:text-gray-400 text-[14px] mb-8">
            I enjoy learning by building, experimenting, and improving with every project. 
            Always open to opportunities, collaborations, and conversations around building impactful tech.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jasminesavathallapalli"
              target="_blank"
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-sm font-medium text-white"
            >
              Connect on LinkedIn
            </a>

            <a
              href="https://github.com/JasmineSavathallapalli"
              target="_blank"
              className="
                px-5 py-2.5 rounded-lg text-sm
                border border-gray-400 dark:border-gray-600
                text-gray-700 dark:text-gray-300
                hover:border-blue-400 transition
              "
            >
              Visit GitHub
            </a>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-5">

          {/* CARD STYLE (reused) */}
          {[
            { value: "1K+", label: "LinkedIn Followers", color: "text-blue-500 dark:text-blue-400" },
            { value: "1+", label: "Years of Experience" },
            { value: "5+", label: "Tech Stack Mastered" },
            { value: "10+", label: "Completed Projects" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-gray-100 dark:bg-[#101A2C]
                border border-gray-300 dark:border-[#1f2a44]
                p-5 rounded-xl
                hover:border-blue-400
                hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                transition-all duration-300
              "
            >
              <p className={`text-3xl font-bold ${item.color || "text-gray-900 dark:text-white"}`}>
                {item.value}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}