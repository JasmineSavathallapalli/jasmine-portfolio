import Robot from "../components/Robot";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero({ setResumeOpen }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center max-w-6xl mx-auto px-6 pt-24 pb-10 text-gray-900 dark:text-white">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="
            mb-5 text-xs sm:text-sm md:text-lg
            text-gray-500 dark:text-gray-400
            border border-gray-300 dark:border-gray-700 
            inline-block px-3 sm:px-4 py-1.5 rounded-full
          ">
            ● jasmine.dev — ready to build
          </div>

          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-tight tracking-tight">
            Hi, I'm Jasmine <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent break-words">
              Savathallapalli.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-500 dark:text-gray-400 mt-5 text-sm sm:text-base md:text-xl leading-relaxed">
            MCA'26 @ VIT Vellore · Full Stack Builder · AI/ML Explorer
          </p>

          {/* TYPEWRITER */}
          <p className="text-blue-500 dark:text-blue-400 mt-6 text-base sm:text-lg md:text-2xl font-medium h-[32px]">
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
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">

            <button
              onClick={() => setResumeOpen(true)}
              className="
                bg-blue-500 text-white px-6 py-3 text-base sm:text-lg rounded-lg 
                hover:bg-blue-600 transition w-full sm:w-auto
              "
            >
              View Resume ↗
            </button>

            <a
              href="https://www.linkedin.com/in/jasminesavathallapalli"
              target="_blank"
              className="
                flex items-center justify-center gap-2
                border border-gray-400 dark:border-gray-600 
                text-gray-700 dark:text-gray-300 text-base sm:text-lg
                px-6 py-3 rounded-lg 
                hover:border-blue-400 transition w-full sm:w-auto
              "
            >
              <FaLinkedin className="text-blue-500 dark:text-blue-400 text-lg sm:text-xl" />
              500+ Connections
            </a>

            <a
              href="https://github.com/JasmineSavathallapalli"
              target="_blank"
              className="
                flex items-center justify-center gap-2
                border border-gray-400 dark:border-gray-600 
                text-gray-700 dark:text-gray-300 text-base sm:text-lg
                px-6 py-3 rounded-lg 
                hover:border-blue-400 transition w-full sm:w-auto
              "
            >
              <FaGithub className="text-black dark:text-white text-lg sm:text-xl" />
              GitHub ↗
            </a>

          </div>

          {/* SCROLL TEXT */}
          <div className="mt-14 md:mt-20 text-gray-500 dark:text-gray-500 text-xs sm:text-sm md:text-base tracking-widest">
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