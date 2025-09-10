function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ferdiansyah Saputra</h2>
          <p className="text-gray-400">
            A Software Engineer passionate about building modern, scalable, and
            user-friendly digital solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <i className="fas fa-envelope" /> ferdiansyahsaptraa@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <i className="fas fa-phone" /> +62 821-8307-4992
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <i className="fas fa-map-marker-alt" /> Jakarta, Indonesia
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition transform hover:scale-110"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition transform hover:scale-110"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} Ferdiansyah Saputra. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
