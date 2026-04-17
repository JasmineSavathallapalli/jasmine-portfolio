import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Subject Matter Expert – AI/ML",
      company: "House of Couton Private Limited",
      duration: "Sep 2025 – Mar 2026",
      tags: ["Remote", "7 months", "Internship"],
      points: [
        "Served as AI/ML subject matter expert — guided product research and validated intelligent feature decisions.",
        "Applied ML evaluation techniques to improve and validate AI-driven product features.",
        "Owned technical documentation on ML methodologies and system behavior.",
        "Leveraged NLP and data analysis to extract actionable insights from unstructured datasets.",
      ],
    },
    {
      role: "Online Marketing Intern",
      company: "Pawzz Foundation",
      duration: "May 2025 – Jun 2025",
      tags: ["Remote", "Internship"],
      points: [
        "Worked on online marketing and digital strategy tasks.",
        "Assisted with campaign execution and awareness activities.",
        "Supported organisational marketing initiatives remotely.",
      ],
    },
    {
      role: "Python Full Stack Developer Intern",
      company: "M/S Sattva Infotech",
      duration: "Jan 2024 – May 2024",
      tags: ["Remote", "4 months", "Internship"],
      points: [
        "Built end-to-end web app using Python, Django, HTML5, CSS3, Bootstrap.",
        "Implemented RESTful APIs and managed CRUD operations with MySQL.",
        "Applied Agile practices — code reviews and unit testing.",
        "Supported CI/CD pipelines via Git-based workflows.",
      ],
    },
    {
      role: "Python Developer Intern",
      company: "Young Minds Technology Solutions Pvt Ltd",
      duration: "Aug 2023 – Sep 2023",
      tags: ["Remote", "Internship"],
      points: [
        "Developed Python modules for internal tools.",
        "Contributed to feature development.",
        "Debugged and optimised existing codebases.",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-24 relative
      text-gray-900 dark:text-white"
    >
      {/* TITLE */}
      <p className="text-green-500 dark:text-green-400 text-[9px] tracking-[3px] mb-2">
        // WHAT I HAVE DONE SO FAR
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        Work Experience<span className="text-blue-500 dark:text-blue-400">.</span>
      </h2>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="absolute left-2.5 top-0 w-[2px] h-full 
          bg-gray-300 dark:bg-[#1f2a44]"></div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative pl-10"
            >

              {/* DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="
                  absolute left-0 top-3.5 w-5 h-5 rounded-full border-2 border-blue-500 
                  bg-white dark:bg-[#060B18]
                  flex items-center justify-center
                "
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              </motion.div>

              {/* CARD */}
              <div
                className="
                  bg-gray-100 dark:bg-[#101A2C]
                  border border-gray-300 dark:border-blue-500/40
                  rounded-xl p-5
                  transition duration-300
                  hover:border-blue-400
                  hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
                  hover:scale-[1.01]
                "
              >

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-base font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-blue-500 dark:text-blue-400 text-xs mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="
                    mt-2 md:mt-0 text-[11px] px-3 py-1 rounded-md border
                    border-green-400 dark:border-green-500
                    text-green-600 dark:text-green-400
                    bg-green-100 dark:bg-green-900/20
                  ">
                    {exp.duration}
                  </span>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-3 text-[11px]">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`
                        px-2.5 py-1 rounded-md border
                        ${
                          tag === "Remote"
                            ? "border-blue-400 text-blue-600 bg-blue-100 dark:border-blue-500 dark:text-blue-400 dark:bg-blue-900/20"
                            : tag.includes("month")
                            ? "border-green-400 text-green-600 bg-green-100 dark:border-green-500 dark:text-green-400 dark:bg-green-900/20"
                            : "border-purple-400 text-purple-600 bg-purple-100 dark:border-purple-500 dark:text-purple-300 dark:bg-purple-900/20"
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* POINTS */}
                <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-[2px] text-[10px]">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}