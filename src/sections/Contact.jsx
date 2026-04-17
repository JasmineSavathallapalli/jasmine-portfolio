import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.email.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(
        "service_qryzowx",
        "template_22m0qvl",
        formRef.current,
        "cn4DwOcBHJvXKr4OV"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 
      text-gray-900 dark:text-white"
    >

      {/* HEADER */}
      <p className="text-green-500 dark:text-green-400 tracking-[4px] text-sm md:text-base mb-3">
        // GET IN TOUCH
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-16">
        Contact<span className="text-blue-500 dark:text-blue-400">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-5">
            Let's build something together.
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            Open to roles, collaborations and conversations. Whether you have a
            project or just want to talk tech — my inbox is always open.
          </p>

          <p className="text-green-500 dark:text-green-400 text-sm md:text-base tracking-[3px] mb-5">
            // CONNECT
          </p>

          <div className="grid grid-cols-2 gap-4">

            {[ 
              {
                icon: <FaEnvelope />,
                text: "savathallapallijasmine",
                label: "EMAIL",
                link: "mailto:savathallapallijasmine@gmail.com",
                color: "hover:border-blue-400",
              },
              {
                icon: <FaLinkedin className="text-blue-500 dark:text-blue-400" />,
                text: "jasminesavathallapalli",
                label: "LINKEDIN",
                link: "https://www.linkedin.com/in/jasminesavathallapalli",
                color: "hover:border-blue-400",
              },
              {
                icon: <FaGithub className="text-black dark:text-white" />,
                text: "JasmineSavathallapalli",
                label: "GITHUB",
                link: "https://github.com/JasmineSavathallapalli",
                color: "hover:border-purple-400",
              },
              {
                icon: "📝",
                text: "lilminecore",
                label: "SUBSTACK",
                link: "https://substack.com/@lilminecore",
                color: "hover:border-orange-400",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className={`
                  flex items-center gap-3 p-5 rounded-xl
                  bg-gray-100 dark:bg-[#101A2C]
                  border border-gray-300 dark:border-[#1f2a44]
                  ${item.color}
                  transition
                `}
              >
                <div className="text-lg md:text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-base md:text-lg font-semibold">{item.text}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                </div>
              </a>
            ))}

          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-green-500 dark:text-green-400 text-sm tracking-[2px]">
                  NAME
                </label>
                <input
                  name="name"
                  placeholder="Your full name"
                  className="
                    w-full mt-1 px-4 py-3 rounded-lg text-base
                    bg-white dark:bg-[#101A2C]
                    border border-gray-300 dark:border-[#1f2a44]
                    text-gray-900 dark:text-white
                    focus:border-blue-400 outline-none
                  "
                  required
                />
              </div>

              <div>
                <label className="text-green-500 dark:text-green-400 text-sm tracking-[2px]">
                  EMAIL
                </label>
                <input
                  name="email"
                  placeholder="your@email.com"
                  className="
                    w-full mt-1 px-4 py-3 rounded-lg text-base
                    bg-white dark:bg-[#101A2C]
                    border border-gray-300 dark:border-[#1f2a44]
                    text-gray-900 dark:text-white
                    focus:border-blue-400 outline-none
                  "
                  required
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-green-500 dark:text-green-400 text-sm tracking-[2px]">
                MESSAGE
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="What do you want to say?"
                className="
                  w-full mt-1 px-4 py-3 rounded-lg text-base
                  bg-white dark:bg-[#101A2C]
                  border border-gray-300 dark:border-[#1f2a44]
                  text-gray-900 dark:text-white
                  focus:border-blue-400 outline-none
                "
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 w-fit px-7 py-3 text-base bg-blue-500
              hover:bg-blue-600 transition rounded-lg font-medium text-white"
            >
              ✈ Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}