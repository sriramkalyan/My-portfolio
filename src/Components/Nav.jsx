import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      {/* Left Side: Name */}
      <div className="p-2 text-lg font-bold rounded-lg">
        <div>MyFolio</div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden">
        <button
          className="text-white"
          aria-label="Toggle Menu"
          onClick={toggleMenu} // Toggle menu on click
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-[#292929] bg-opacity-90 z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col items-center mt-16">
          <Link
            to="/"
            className="py-2 text-2xl text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="py-2 text-2xl text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/experiences"
            className="py-2 text-2xl text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Experiences
          </Link>
          <Link
            to="/projects"
            className="py-2 text-2xl text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/cv"
            className="py-2 text-2xl text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            CV
          </Link>

          {/* Icons below menu items */}
          <div className="flex gap-6 mt-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sriram-k-6bb2b1222/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/sriramkalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            {/* Mail */}
            <a
              href="mailto:sriramkalyan710@gmail.com"
              className="hover:text-gray-400"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <Menu />

      {/* Right Side: Icons */}
      <div className="hidden space-x-6 lg:flex">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        {/* Mail */}
        <a
          href="mailto:your-email@example.com"
          className="hover:text-gray-400"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

function Menu() {
  return (
    <div className="z-30 flex gap-8 p-4 font-mono text-[#898989] text-lg lg:flex hidden">
      <Link
        to="/"
        className="transition-opacity transition-transform duration-300 ease-out hover:scale-125 hover:opacity-80 hover:text-white will-change-transform"
      >
        About
      </Link>
      <Link
        to="/skills"
        className="transition-opacity transition-transform duration-300 ease-out hover:scale-125 hover:opacity-80 hover:text-white will-change-transform"
      >
        Skills
      </Link>
      <Link
        to="/experiences"
        className="transition-opacity transition-transform duration-300 ease-out hover:scale-125 hover:opacity-80 hover:text-white will-change-transform"
      >
        Experiences
      </Link>
      <Link
        to="/projects"
        className="transition-opacity transition-transform duration-300 ease-out hover:scale-125 hover:opacity-80 hover:text-white will-change-transform"
      >
        Projects
      </Link>
      <Link
        to="/cv"
        className="transition-opacity transition-transform duration-300 ease-out hover:scale-125 hover:opacity-80 hover:text-white will-change-transform"
      >
        CV
      </Link>
    </div>
  );
}
