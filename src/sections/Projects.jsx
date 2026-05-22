import mentalImg from "../assets/projects/mentalImg.png";
import fakeImg from "../assets/projects/fakeImg.png";
import classroomImg from "../assets/projects/classroomImg.png";
import jobfairImg from "../assets/projects/jobfairImg.png";
import walletImg from "../assets/projects/walletImg.png";
import AiImg from "../assets/projects/AiImg.png";

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: "AI Reliability Evaluation Platform",
    blurb:
      "Built a production-style AI reliability platform to evaluate LLM outputs using automated scoring pipelines, observability, prompt evaluation and response analysis. Designed for scalable AI testing workflows with modern full-stack architecture.",
    github:
      "https://github.com/JasmineSavathallapalli",
    tags: [
      "#ai-engineering",
      "#llm",
      "#langchain",
      "#fastapi",
      "#react",
      "#mongodb",
    ],
    image: AiImg, 
  },

  {
    id: 2,
    title: "Mental Health Detection using Multimodal Deep Learning",
    blurb:
      "Research-focused multimodal AI system using audio, video and text features from DAIC-WOZ dataset for depression prediction. Combined deep learning representations through fusion pipelines for improved robustness and prediction accuracy.",
    github:
      "https://github.com/JasmineSavathallapalli/Mental-Health-Detection-from-Multimodal-Data-using-Deep-Learning",
    tags: [
      "#deep-learning",
      "#multimodal-ai",
      "#pytorch",
      "#research",
    ],
    image: mentalImg,
  },

  {
    id: 3,
    title: "Wallet Risk Scoring Blockchain Analytics",
    blurb:
      "Developed a blockchain analytics engine that evaluates wallet transaction behaviour and assigns dynamic risk scores to identify suspicious on-chain activity using machine learning and behavioral analysis.",
    github:
      "https://github.com/JasmineSavathallapalli/Wallet-Risk-Scoring-From-Scratch",
    tags: [
      "#blockchain",
      "#machine-learning",
      "#data-analysis",
      "#python",
    ],
    image: walletImg,
  },

  {
    id: 4,
    title: "Fake Currency Detection using Ensemble Learning",
    blurb:
      "Implemented an ensemble machine learning system combining multiple classification algorithms to identify counterfeit currency using image-derived features and prediction aggregation techniques.",
    github:
      "https://github.com/JasmineSavathallapalli/Fake-Currency-Detection-using-Ensemble-Approach",
    tags: [
      "#machine-learning",
      "#ensemble-models",
      "#computer-vision",
      "#python",
    ],
    image: fakeImg,
  },

  {
    id: 5,
    title: "Slow Learners Classroom Booking Platform",
    blurb:
      "Full-stack MERN platform for scheduling remedial sessions, managing classroom bookings and improving faculty-student coordination with authentication, dashboards and responsive UI workflows.",
    github:
      "https://github.com/JasmineSavathallapalli/Classroom-Booking-Web-App-for-Slow-Learners",
    tags: [
      "#mern",
      "#react",
      "#nodejs",
      "#mongodb",
      "#tailwindcss",
    ],
    image: classroomImg,
  },

  {
    id: 6,
    title: "Online Job Fair Management System",
    blurb:
      "Built a scalable full-stack recruitment platform supporting company registrations, student applications, job postings and application tracking workflows for virtual job fairs.",
    github:
      "https://github.com/JasmineSavathallapalli/Online-Job-Fair-Application",
    tags: [
      "#java",
      "#fullstack",
      "#rest-api",
      "#jsp",
      "#mysql",
    ],
    image: jobfairImg,
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