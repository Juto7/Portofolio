import { motion } from "framer-motion";

function Navbar() {
  const navItems = ["Skills", "Project", "My Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nama */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          My<span className="text-yellow-400">Portofolio</span>
        </h1>

        {/* Menu */}
        <ul className="flex space-x-10">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group cursor-pointer text-white text-lg font-medium"
            >
              {item}
              {/* Animasi underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
