export default function Experience() {
  const experiences = [
    {
      badge: "OM",
      period: "May 2025 – Jun 2025",
      title: "Online Marketing Intern",
      company: "Pawzz Foundation",
      type: "Internship",
      location: "Remote",
      points: [
        "Worked on online marketing and digital strategy tasks.",
        "Assisted with campaign execution and awareness activities.",
        "Supported organizational marketing initiatives remotely.",
      ],
    },
    {
      badge: "FS",
      period: "Jan 2024 – May 2024",
      title: "Python Full Stack Developer Intern",
      company: "M/S Sattva Infotech",
      type: "Internship",
      location: "Remote",
      points: [
        "Full-stack Python development for web applications.",
        "Worked on backend APIs, frontend integration and bug fixes.",
        "Collaborated with the team on production-level tasks.",
      ],
    },
    {
      badge: "PY",
      period: "Aug 2023 – Sept 2023",
      title: "Python Developer Intern",
      company: "Young Minds Technology Solutions Pvt Ltd",
      type: "Internship",
      location: "Remote",
      points: [
        "Developed Python modules for internal tools and projects.",
        "Contributed to project development and feature enhancements.",
        "Debugged and optimized existing codebases.",
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 text-white">
      
      <p className="text-purple-400 uppercase tracking-widest text-sm mb-2 text-center">
        What I Have Done So Far
      </p>

      <h2 className="text-5xl font-bold text-center mb-20">
        Work Experience<span className="text-purple-400">.</span>
      </h2>

      <div className="relative py-10 md:py-20 min-h-[600px]">
        {/* Vertical line (desktop) */}
  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-purple-400/40" />

  {/* Vertical line (mobile) */}
  <div className="md:hidden absolute left-8 top-0 bottom-0 w-[3px] bg-purple-400/40" />

        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.title}
                className={`relative md:flex md:items-center`}
              >
                {/* Circle Badge (Desktop) */}
                <div className="
                  hidden md:flex
                  absolute left-1/2 -translate-x-1/2
                  w-20 h-20 rounded-full 
                  bg-[#090b1a] border-[5px] border-purple-400 
                  items-center justify-center 
                  text-2xl font-bold text-purple-300
                  shadow-[0_0_20px_rgba(168,85,247,0.6)]
                  z-20
                ">
                  {exp.badge}
                </div>

                {/* Date (Desktop) */}
                <p
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-slate-400 text-sm 
                  ${isLeft ? "left-[52%] pl-6" : "right-[52%] pr-6 text-right"}`}
                >
                  {exp.period}
                </p>

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft ? "md:pr-20 md:ml-0" : "md:pl-20 md:ml-auto"
                  }`}
                >
                  {/* Mobile Badge inside card */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 rounded-full bg-[#090b1a] border-4 border-purple-400 flex items-center justify-center text-lg font-bold text-purple-300">
                      {exp.badge}
                    </div>
                    <p className="text-sm text-slate-400">{exp.period}</p>
                  </div>

                  <div className="bg-[#0f1123] border border-purple-500/30 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-slate-400 mb-4">
                      {exp.company} · {exp.type} · {exp.location}
                    </p>

                    <ul className="space-y-2 text-slate-300 text-[15px]">
                      {exp.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
