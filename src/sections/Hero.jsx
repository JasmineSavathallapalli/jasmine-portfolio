import Robot from "../components/Robot";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero({ setResumeOpen }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center max-w-6xl mx-auto px-6 text-gray-900 dark:text-white">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="
            mb-5 text-base md:text-lg
            text-gray-500 dark:text-gray-400
            border border-gray-300 dark:border-gray-700 
            inline-block px-4 py-1.5 rounded-full
          ">
            ● jasmine.dev — ready to build
          </div>

          {/* TITLE */}
          <h1 className="text-7xl md:text-8xl lg:text-[90px] font-bold leading-tight tracking-tight">
            Hi, I'm Jasmine <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Savathallapalli.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-500 dark:text-gray-400 mt-5 text-lg md:text-xl">
            MCA'26 @ VIT Vellore · Full Stack Builder · AI/ML Explorer
          </p>

          {/* TYPEWRITER */}
          <p className="text-blue-500 dark:text-blue-400 mt-6 text-xl md:text-2xl font-medium h-[32px]">
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
          <div className="flex gap-4 mt-10 flex-wrap">

            <button
              onClick={() => setResumeOpen(true)}
              className="
                bg-blue-500 text-white px-7 py-3.5 text-lg rounded-lg 
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
                text-gray-700 dark:text-gray-300 text-lg
                px-7 py-3.5 rounded-lg 
                hover:border-blue-400 transition
              "
            >
              <FaLinkedin className="text-blue-500 dark:text-blue-400 text-xl" />
              500+ Connections
            </a>

            <a
              href="https://github.com/JasmineSavathallapalli"
              target="_blank"
              className="
                flex items-center gap-2
                border border-gray-400 dark:border-gray-600 
                text-gray-700 dark:text-gray-300 text-lg
                px-7 py-3.5 rounded-lg 
                hover:border-blue-400 transition
              "
            >
              <FaGithub className="text-black dark:text-white text-xl" />
              GitHub ↗
            </a>

          </div>

          {/* SCROLL TEXT */}
          <div className="mt-20 text-gray-500 dark:text-gray-500 text-base tracking-widest">
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