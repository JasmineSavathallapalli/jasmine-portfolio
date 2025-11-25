export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - LOGO + NAME */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
            J
          </div>
          <h1 className="text-lg font-semibold tracking-wider text-white">
            Jasmine <span className="text-purple-400">| Go Beyond</span>
          </h1>
        </div>

        {/* CENTER NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-medium text-white/90">
          <a href="#about" className="hover:text-purple-300 transition">About</a>
          <a href="#experience" className="hover:text-purple-300 transition">Work</a>
          <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
