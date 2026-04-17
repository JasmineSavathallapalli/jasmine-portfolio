import mentalImg from "../assets/projects/mentalImg.png";
import fakeImg from "../assets/projects/fakeImg.png";
import classroomImg from "../assets/projects/classroomImg.png";
import jobfairImg from "../assets/projects/jobfairImg.png";
import studyImg from "../assets/projects/studyImg.png";
import walletImg from "../assets/projects/walletImg.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mental Health Detection from Multimodal Data using Deep Learning",
      blurb:
        "Research-oriented project that uses audio, video and text (DAIC-WOZ) with a multimodal deep learning pipeline to detect depression levels more reliably than unimodal methods. A fusion layer combines the representations while handling noisy or missing data, resulting in more stable and accurate depression predictions.",
      github:
        "https://github.com/JasmineSavathallapalli/Mental-Health-Detection-from-Multimodal-Data-using-Deep-Learning",
      tags: ["#python", "#pytorch", "#deep-learning", "#multimodal-ai"],
      image: mentalImg,
    },
    {
      id: 2,
      title: "Fake Currency Detection using Ensemble Approach",
      blurb:
        "Built an ensemble of classical ML models to classify genuine vs counterfeit currency using image-based features. The approach improves prediction stability by combining multiple algorithms and reducing model-specific errors.",
      github:
        "https://github.com/JasmineSavathallapalli/Fake-Currency-Detection-using-Ensemble-Approach",
      tags: ["#python", "#machine-learning", "#ensemble-models"],
      image: fakeImg,
    },
    {
      id: 3,
      title: "Slow Learners Classroom Booking",
      blurb:
        "Web platform where faculty can schedule remedial sessions and students can book slots, with authentication, dashboards and a clean UI.",
      github:
        "https://github.com/JasmineSavathallapalli/Classroom-Booking-Web-App-for-Slow-Learners",
      tags: ["#react", "#nodejs", "#mongodb", "#mern", "#tailwindcss"],
      image: classroomImg,
    },
    {
      id: 4,
      title: "Online Job Fair Application",
      blurb:
        "Full-stack application to manage virtual job fairs company registrations, job postings, student profiles and application tracking.",
      github:
        "https://github.com/JasmineSavathallapalli/Online-Job-Fair-Application",
      tags: ["#fullstack", "#java", "#rest-api", "#apache-maven", "#jsp"],
      image: jobfairImg,
    },
    {
      id: 5,
      title: "Student Study Portal",
      blurb:
        "Portal for hosting notes, resources and announcements.",
      github:
        "https://github.com/JasmineSavathallapalli/Student-Study-Portal",
      tags: ["#html-css-js", "#django", "#education-tech"],
      image: studyImg,
    },
    {
      id: 6,
      title: "Wallet Risk Scoring Blockchain Analytics",
      blurb:
        "Scores crypto wallets based on transaction behaviour to detect risky on-chain activity.",
      github:
        "https://github.com/JasmineSavathallapalli/Wallet-Risk-Scoring-From-Scratch",
      tags: ["#blockchain", "#ml", "#data-analysis"],
      image: walletImg,
    },
  ];

  return (
    <section
      id="projects"
      className="
        max-w-6xl mx-auto px-6 py-24 scroll-mt-24
        text-gray-900 dark:text-white
      "
    >
      {/* HEADER */}
      <p className="text-purple-500 dark:text-green-400 uppercase tracking-widest text-base md:text-lg mb-3">
        // My Work
      </p>

      <h2 className="text-6xl md:text-7xl font-bold mb-8">
        Projects<span className="text-purple-500 dark:text-purple-400">.</span>
      </h2>

      <p className="text-gray-600 dark:text-slate-300 text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
        These projects represent a mix of deep learning, machine learning, full-stack web applications and blockchain analytics. Each one is backed by real code and experiments on GitHub, reflecting how I think about problems, design systems and ship things end-to-end.
      </p>

      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
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
            {/* IMAGE */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col">
              <p className="text-base text-purple-500 dark:text-purple-300 font-medium mb-2">
                {project.subtitle}
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-5">
                {project.blurb}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-sm px-3 py-1.5 rounded-full
                      bg-purple-100 dark:bg-purple-500/10
                      text-purple-600 dark:text-purple-300
                      border border-purple-300 dark:border-purple-500/20
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="
                  text-base md:text-lg font-medium
                  text-purple-600 dark:text-purple-300
                  hover:text-purple-800 dark:hover:text-purple-100
                  underline underline-offset-4 mt-auto
                "
              >
                GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}