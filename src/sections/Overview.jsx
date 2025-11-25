export default function Overview() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 text-white">
      
      {/* TOP HEADING */}
      <p className="text-purple-400 uppercase tracking-widest text-sm mb-2">
        Introduction
      </p>

      <h2 className="text-5xl font-bold mb-10">
        Overview<span className="text-purple-400">.</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-lg leading-relaxed text-slate-300 max-w-4xl">
        I'm Jasmine Savathallapalli, a passionate full-stack developer and AI/ML 
        enthusiast with experience in building modern, clean and scalable web 
        applications. My expertise lies in the MERN Stack, Python, and machine 
        learning systems. I enjoy creating smooth user experiences backed by 
        strong architecture. Let's connect and build something meaningful!
      </p>

      {/* LINKEDIN BOX */}
      <div className="mt-16 bg-[#0f1123] border border-purple-600/40 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">
            LinkedIn Professional Network
          </h3>

          <p className="text-slate-400 max-w-2xl">
            I actively network, share insights, and stay connected with the tech 
            community through LinkedIn. Join my professional circle to collaborate, 
            grow, and explore opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/savathallapalli-jasmine/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-sm font-medium shadow-md"
          >
            Connect on LinkedIn
          </a>

          <p className="text-purple-300 mt-2 text-lg font-semibold">
            500+ 
          </p>
          <p className="text-slate-500 text-sm -mt-1">Connections</p>
        </div>
      </div>

      {/* GITHUB BOX */}
      <div className="mt-8 bg-[#0f1123] border border-purple-600/40 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">
            GitHub Portfolio
          </h3>

          <p className="text-slate-400 max-w-2xl">
            Explore my coding journey, full-stack experiments, AI/ML models, and 
            open-source contributions. I frequently build, learn, and push new 
            projects on GitHub.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://github.com/JasmineSavathallapalli"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 transition px-6 py-3 rounded-xl text-sm font-medium shadow-md"
          >
            Visit GitHub
          </a>

          <p className="text-purple-300 mt-2 text-lg font-semibold">
            Public Repos
          </p>
          <p className="text-slate-500 text-sm -mt-1">Projects & Code</p>
        </div>
      </div>

      {/* WHAT I DO / FLIP CARDS */}
      <h3 className="text-3xl font-bold mt-20 mb-10 text-center">
        <span className="text-purple-400"></span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* FULL STACK DEVELOPER */}
        <div className="flip-card">
          <div className="flip-card-inner">
            
            <div className="flip-card-front">
              <span className="text-6xl mb-4"></span>
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            </div>

            <div className="flip-card-back">
              <h3 className="text-xl font-bold mb-3">Top Projects</h3>
              <ul className="text-sm text-gray-200 space-y-1 text-center">
                <li>• Classroom Booking Web App</li>
                <li>• Student Study Portal</li>
                <li>• Online Job Fair Application</li>
                <li>• Word Shutter Typing Game</li>
              </ul>
            </div>

          </div>
        </div>

        {/* AI / ML RESEARCHER */}
        <div className="flip-card">
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <span className="text-6xl mb-4"></span>
              <h3 className="text-xl font-semibold">AI/ML Researcher</h3>
            </div>

            <div className="flip-card-back">
              <h3 className="text-xl font-bold mb-3">Top Projects</h3>
              <ul className="text-sm text-gray-200 space-y-1 text-center">
                <li>• Mental Health Detection (Multimodal DL)</li>
                <li>• Fake Currency Detection (Ensemble ML)</li>
                <li>• Bioactivity Prediction (SMILES DL)</li>
                <li>• Early Diabetes Detection (ML)</li>
              </ul>
            </div>

          </div>
        </div>

        {/* MERN STACK */}
        <div className="flip-card">
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <span className="text-6xl mb-4"></span>
              <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
            </div>

            <div className="flip-card-back">
              <h3 className="text-xl font-bold mb-3">MERN Projects</h3>
              <ul className="text-sm text-gray-200 space-y-1 text-center">
                <li>• Slow Learners Classroom Booking Web App</li>
                <li>• Portfolio</li>
              </ul>
            </div>

          </div>
        </div>

        {/* UI / UX DESIGN */}
        <div className="flip-card">
          <div className="flip-card-inner">

            <div className="flip-card-front">
              <span className="text-6xl mb-4"></span>
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
            </div>

            <div className="flip-card-back">
              <h3 className="text-xl font-bold mb-3">UI/UX Work</h3>
              <ul className="text-sm text-gray-200 space-y-1 text-center">
                <li>• Online Review Classifier UI</li>
                <li>• Portfolio UI</li>
                <li>• App Concepts</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
