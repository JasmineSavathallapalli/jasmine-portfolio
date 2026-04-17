import "devicon/devicon.min.css";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24 
      text-gray-900 dark:text-gray-300"
    >

      {/* HEADER */}
      <p className="text-green-500 dark:text-green-400 uppercase tracking-[4px] text-[11px] mb-2">
        // TECHNOLOGIES
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        Tech Stack<span className="text-green-500 dark:text-green-400">.</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CARD COMPONENT */}
        {[
          {
            title: "💬 Languages",
            color: "text-orange-500 dark:text-orange-400",
            items: [
              { name: "Python", icon: "devicon-python-plain colored" },
              { name: "Java", icon: "devicon-java-plain colored" },
              { name: "JavaScript", icon: "devicon-javascript-plain colored" },
              { name: "C", icon: "devicon-c-plain colored" },
              { name: "C++", icon: "devicon-cplusplus-plain colored" },
            ],
          },
          {
            title: "🌐 Frameworks, Libraries & Web",
            color: "text-blue-500 dark:text-blue-400",
            items: [
              { name: "Node.js", icon: "devicon-nodejs-plain colored" },
              { name: "Django", icon: "devicon-django-plain text-green-400" },
              { name: "Flask", icon: "devicon-flask-original text-black dark:text-white" },
              { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
              { name: "React.js", icon: "devicon-react-original colored" },
              { name: "Express.js", icon: "devicon-express-original text-black dark:text-white" },
              { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
              { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
              { name: "Figma", icon: "devicon-figma-plain colored" },
            ],
          },
          {
            title: "🗄 Databases",
            color: "text-green-500 dark:text-green-400",
            items: [
              { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
              { name: "MySQL", icon: "devicon-mysql-plain colored" },
              { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
            ],
          },
          {
            title: "☁ Cloud & DevOps",
            color: "text-purple-500 dark:text-purple-400",
            items: [
              { name: "Docker", icon: "devicon-docker-plain colored" },
              { name: "AWS (EC2, S3)", icon: "devicon-amazonwebservices-plain colored" },
              { name: "Git", icon: "devicon-git-plain colored" },
              { name: "GitHub", icon: "devicon-github-original text-black dark:text-white" },
              { name: "Linux", icon: "devicon-linux-plain colored" },
              { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
            ],
          },
        ].map((section, i) => (
          <div
            key={i}
            className="
              bg-gray-100 dark:bg-[#101A2C]
              border border-gray-300 dark:border-[#1f2a44]
              p-5 rounded-xl
              hover:border-blue-400
              transition
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
            "
          >

            <h3 className={`mb-4 text-[13px] font-semibold flex items-center gap-2 ${section.color}`}>
              {section.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {section.items.map((t, idx) => (
                <div
                  key={idx}
                  className="
                    flex items-center gap-2 px-3 py-1.5
                    border border-gray-300 dark:border-[#1f2a44]
                    rounded-md text-[12px]
                    bg-white dark:bg-[#060B18]
                    text-gray-700 dark:text-gray-300
                    hover:border-blue-400 transition
                  "
                >
                  <i className={`${t.icon} text-base`} />
                  {t.name}
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}