export default function Education() {
  return (
    <section
      id="education"
      className="
        py-20
        bg-white dark:bg-[#020617]
        text-gray-900 dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <p className="text-green-500 dark:text-green-400 uppercase tracking-[3px] text-[10px] sm:text-xs md:text-base mb-3">
          // ACADEMICS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-14 tracking-tight">
          Education<span className="text-purple-500 dark:text-purple-400">.</span>
        </h2>

        {/* TOP CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* MCA */}
          <div className="
            relative
            bg-gray-100 dark:bg-[#101A2C]
            border border-gray-300 dark:border-[#1e293b]
            rounded-2xl p-5 md:p-6 overflow-hidden
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-purple-400
            hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
            dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
          ">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Master of Computer Applications
            </h3>

            <p className="text-blue-500 dark:text-blue-400 text-sm sm:text-base md:text-lg mb-5">
              Vellore Institute of Technology, Vellore
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm md:text-base">
              <span className="px-3 py-1 bg-gray-200 dark:bg-[#1A2338] rounded-md border border-gray-300 dark:border-[#22304a]">
                2024 – 2026
              </span>

              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-md border border-green-300 dark:border-green-700">
                CGPA: 8.28
              </span>

              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 rounded-md border border-purple-300 dark:border-purple-700">
                MCA
              </span>
            </div>
          </div>

          {/* BCA */}
          <div className="
            relative
            bg-gray-100 dark:bg-[#101A2C]
            border border-gray-300 dark:border-[#1e293b]
            rounded-2xl p-5 md:p-6 overflow-hidden
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-purple-400
            hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
            dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
          ">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Bachelor of Computer Applications
            </h3>

            <p className="text-blue-500 dark:text-blue-400 text-sm sm:text-base md:text-lg mb-5">
              Sri Venkateswara University, Tirupati
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm md:text-base">
              <span className="px-3 py-1 bg-gray-200 dark:bg-[#1A2338] rounded-md border border-gray-300 dark:border-[#22304a]">
                2021 – 2024
              </span>

              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-md border border-green-300 dark:border-green-700">
                CGPA: 8.9
              </span>

              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 rounded-md border border-purple-300 dark:border-purple-700">
                BCA
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="
            flex justify-between items-center
            bg-gray-100 dark:bg-[#101A2C]
            border border-gray-300 dark:border-[#1e293b]
            rounded-xl px-5 md:px-6 py-5
          ">
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold">
                Intermediate (PCB)
              </h4>

              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base">
                Sri Chaitanya Junior College
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs sm:text-sm text-gray-500">2020</p>
              <p className="text-green-600 dark:text-green-400 text-sm sm:text-base md:text-lg font-semibold">9.37</p>
            </div>
          </div>

          <div className="
            flex justify-between items-center
            bg-gray-100 dark:bg-[#101A2C]
            border border-gray-300 dark:border-[#1e293b]
            rounded-xl px-5 md:px-6 py-5
          ">
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold">
                Secondary School (SSC)
              </h4>

              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base">
                Sri Chaitanya School
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs sm:text-sm text-gray-500">2018</p>
              <p className="text-green-600 dark:text-green-400 text-sm sm:text-base md:text-lg font-semibold">10.0</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}