import "devicon/devicon.min.css";

export default function TechStack() {
  const tech = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" }, // custom color needed
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Django", icon: "devicon-django-plain" }, // custom color needed
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 place-items-center">
        
        {tech.map((t, i) => (
          <div
            key={i}
            className="bg-[#0d0f1e] p-4 rounded-2xl border border-purple-500/10 
                       shadow-lg hover:shadow-purple-500/30 transition 
                       hover:-translate-y-2"
          >
            <i
              className={`${t.icon} text-5xl ${
                t.name === "Express" ? "text-white" : ""
              } ${
                t.name === "Django" ? "text-green-400" : ""
              }`}
            ></i>
          </div>
        ))}

      </div>
    </section>
  );
}
