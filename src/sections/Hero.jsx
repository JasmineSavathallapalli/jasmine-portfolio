


export default function Hero({ setResumeOpen }) {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-4 pt-24">

      

      {/* TEXT CONTENT */}
      <p className="text-purple-400 tracking-[6px] text-sm mb-6 uppercase">
        Introducing
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          Jasmine Savathallapalli.
        </span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Tech Explorer · Full-Stack Web Developer · AI/ML Enthusiast
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={() => setResumeOpen(true)}
          className="px-7 py-3 rounded-lg text-white font-medium 
            bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
        >
          View Resume
        </button>

        <a
          href="https://www.linkedin.com/in/jasminesavathallapalli"
          target="_blank"
          className="flex items-center px-7 py-3 rounded-lg border border-purple-500 
            hover:bg-purple-600/20 transition"
        >
          <i className="devicon-linkedin-plain text-white text-xl mr-2"></i>
          500+ Connections
        </a>

        <a
          href="https://github.com/JasmineSavathallapalli"
          target="_blank"
          className="flex items-center px-7 py-3 rounded-lg border border-blue-500 
            hover:bg-blue-600/20 transition"
        >
          <i className="devicon-github-original text-white text-xl mr-2"></i>
          GitHub
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-28 flex justify-center">
        <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-3 h-3 bg-white/70 rounded-full mt-2 animate-[scroll_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
