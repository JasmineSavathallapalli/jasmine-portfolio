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
      title:    
        "Mental Health Detection from Multimodal Data using Deep Learning",
      blurb:
"Research-oriented project that uses audio, video and text (DAIC-WOZ) with a multimodal deep learning pipeline to detect depression levels more reliably than unimodal methods. A fusion layer combines the representations while handling noisy or missing data, resulting in more stable and accurate depression predictions.",
      github:
        "https://github.com/JasmineSavathallapalli/Mental-Health-Detection-from-Multimodal-Data-using-Deep-Learning",
      tags: ["#python", "#pytorch", "#deep-learning", "#multimodal-ai"],
      image: mentalImg,
    },
    {
      id: 2,
      title:  "Fake Currency Detection using Ensemble Approach",
      blurb:
"Built an ensemble of classical ML models to classify genuine vs counterfeit currency using image-based features. The approach improves prediction stability by combining multiple algorithms and reducing model-specific errors.",
      github:
        "https://github.com/JasmineSavathallapalli/Fake-Currency-Detection-using-Ensemble-Approach",
      tags: ["#python", "#machine-learning", "#ensemble-models"],
      image: fakeImg,
    },
    {
      id: 3,
      title:  "Slow Learners Classroom Booking",
      blurb:
"Web platform where faculty can schedule remedial sessions and students can book slots, with authentication, dashboards and a clean UI. Designed to streamline academic support by making session booking seamless and improving communication between students and faculty.",
      github:
        "https://github.com/JasmineSavathallapalli/Classroom-Booking-Web-App-for-Slow-Learners",
      tags: ["#react", "#nodejs", "#mongodb", "#mern", "#tailwindcss"],
      image: classroomImg,
    },
    {
      id: 4,
      title:  "Online Job Fair Application",
      blurb:
"Full-stack application to manage virtual job fairs company registrations, job postings, student profiles and application tracking. Built to simplify campus recruitment workflows with structured dashboards and smooth interaction between companies and students.",
      github:
        "https://github.com/JasmineSavathallapalli/Online-Job-Fair-Application",
      tags: ["#fullstack", "#java", "#rest-api", "#apache-maven", "#jsp"],
      image: jobfairImg,
    },
    {
      id: 5,
      title: "Student Study Portal",
      blurb:
"Portal for hosting notes, resources and announcements. Focused on navigation, responsive design and clean UI. Built to help students access academic content quickly with organized sections and efficient content management.",
      github:
        "https://github.com/JasmineSavathallapalli/Student-Study-Portal",
      tags: ["#html-css-js", "#django", "#education-tech"],
      image: studyImg,
    },
    {
      id: 6,
      title:  "Wallet Risk Scoring Blockchain Analytics",
      blurb:
"Scores crypto wallets based on transaction behaviour to detect risky on-chain activity using ML models. Designed to identify abnormal patterns and highlight wallets with potential fraud or high-risk interactions.",
      github:
        "https://github.com/JasmineSavathallapalli/Wallet-Risk-Scoring-From-Scratch",
      tags: ["#blockchain", "#ml", "#data-analysis"],
      image: walletImg,
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 text-white scroll-mt-24"
    >
      <p className="text-purple-400 uppercase tracking-widest text-sm mb-2">
        My Work
      </p>

      <h2 className="text-5xl sm:text-6xl font-bold mb-6">
        Projects<span className="text-purple-400">.</span>
      </h2>

      <p className="text-slate-300 max-w-3xl mb-14 leading-relaxed">
        These projects represent a mix of deep learning, machine learning, full-stack web applications and blockchain analytics. Each one is backed by real code and experiments on GitHub, reflecting how I think about problems, design systems and ship things end-to-end.
      </p>

      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="
              bg-[#0B0E1A] border border-purple-500/20 rounded-3xl overflow-hidden
              shadow-xl hover:shadow-purple-500/40
              transform-gpu perspective-[1500px]
              -rotate-x-6 rotate-y-6
              hover:rotate-x-0 hover:rotate-y-0 hover:scale-[1.03]
              transition-all duration-700
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
              <p className="text-sm text-purple-300 font-medium mb-1">
                {project.subtitle}
              </p>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.blurb}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10
                               text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-sm font-medium text-purple-300 hover:text-purple-100 underline underline-offset-4 mt-auto"
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
