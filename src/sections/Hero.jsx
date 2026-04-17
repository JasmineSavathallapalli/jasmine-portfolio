import Robot from "../components/Robot";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero({ setResumeOpen }) {
  return (
    <section
      className="
      relative min-h-screen flex items-start pt-32 
      max-w-6xl mx-auto px-6
      text-gray-900 dark:text-white
      "
    >
      

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="
            mb-4 text-sm 
            text-gray-500 dark:text-gray-400
            border border-gray-300 dark:border-gray-700 
            inline-block px-3 py-1 rounded-full
          ">
            ● jasmine.dev — ready to build
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi, I'm Jasmine <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Savathallapalli.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            MCA'26 @ VIT Vellore · Full Stack Builder · AI/ML Explorer
          </p>

          {/* TYPEWRITER */}
          <p className="text-blue-500 dark:text-blue-400 mt-6 text-lg font-medium h-[28px]">
            <Typewriter
              words={[
                "Building full-stack web apps.",
                "Building AI/ML systems.",
                "Creating experiences users love."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-8 flex-wrap">

            <button
              onClick={() => setResumeOpen(true)}
              className="
                bg-blue-500 text-white px-6 py-3 rounded-lg 
                hover:bg-blue-600 transition
              "
            >
              View Resume ↗
            </button>

            <a
              href="https://www.linkedin.com/in/jasminesavathallapalli"
              target="_blank"
              className="
                flex items-center gap-2
                border border-gray-400 dark:border-gray-600 
                text-gray-700 dark:text-gray-300
                px-6 py-3 rounded-lg 
                hover:border-blue-400 transition
              "
            >
              <FaLinkedin className="text-blue-500 dark:text-blue-400 text-lg" />
              500+ Connections
            </a>

            <a
              href="https://github.com/JasmineSavathallapalli"
              target="_blank"
              className="
                flex items-center gap-2
                border border-gray-400 dark:border-gray-600 
                text-gray-700 dark:text-gray-300
                px-6 py-3 rounded-lg 
                hover:border-blue-400 transition
              "
            >
              <FaGithub className="text-black dark:text-white text-lg" />
              GitHub ↗
            </a>

          </div>

          {/* SCROLL TEXT */}
          <div className="mt-16 text-gray-500 dark:text-gray-500 text-sm tracking-widest">
            SCROLL
          </div>

        </div>

        {/* RIGHT SIDE 3D */}
        <div className="hidden md:block">
          <Robot />
        </div>

      </div>
    </section>
  );
}