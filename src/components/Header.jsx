function Header() {
  return (
    <div
      className="relative h-218 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay dengan opacity */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten */}
      <div className="relative pl-40 pt-40 max-w-3xl">
        <h1 className="text-white font-bold text-5xl mb-6">
          I'm Ferdiansyah Saputra
        </h1>
        <p className="text-white text-xl leading-relaxed mb-8">
          A Software Engineer who focuses on web development, data analysis,
          and modern technology-based solutions.
        </p>

        {/* Tombol */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-black hover:scale-105 transition duration-300"
          >
            🚀 View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-black hover:scale-105 transition duration-300"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
