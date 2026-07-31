import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Logic for active section could be added here based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-5 transition-all duration-300 md:px-12 ${
        isScrolled
          ? "border-b border-gray-100 bg-white/90 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between text-black">
        
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleMenuItemClick("about")}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dc2626] text-xl font-bold text-white shadow-lg shadow-red-500/30 transition hover:scale-105"
            aria-label="Go to intro"
          >
            KS
          </button>
          <div className="hidden leading-tight sm:block tracking-wide">
            <p className="text-[15px] font-bold text-gray-900 uppercase">Kirubakaran S</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] mt-0.5">
              Fullstack Developer
            </p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {menuItems.map((item) => (
            <li key={item.id} className="cursor-pointer relative group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-[15px] font-semibold transition-colors ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
              {/* Active Underline indicator */}
              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-1/2 w-6 -translate-x-1/2 h-[2px] bg-[#dc2626] rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side: Socials & Resume Button */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4 border-r border-gray-200 pr-6">
            <a
              href="https://github.com/kirubakaran232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 transition hover:text-black hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kirubakaran1406/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 transition hover:text-[#0077b5] hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://leetcode.com/u/kiruba1406/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-gray-700 transition hover:text-[#FFA116] hover:scale-110"
            >
              <SiLeetcode size={22} />
            </a>
          </div>
          
          <a
            href="https://drive.google.com/file/d/1LADR30mm496WNC6RJ2zui83oEz4HwCks/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#dc2626] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91c1c] shadow-lg shadow-red-500/20"
          >
            Resume <FiArrowUpRight strokeWidth={3} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <FiX
              className="cursor-pointer text-3xl text-gray-900"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="cursor-pointer text-3xl text-gray-900"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-5 right-5 top-20 z-50 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl md:hidden">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left font-bold ${
                    activeSection === item.id
                      ? "bg-red-50 text-[#dc2626]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex gap-5 px-4 pt-4 pb-2 border-t border-gray-100 mt-2">
              <a
                href="https://github.com/kirubakaran232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kirubakaran1406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-[#0077b5]"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/kiruba1406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-gray-700 hover:text-[#FFA116]"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
            <a
               href="https://drive.google.com/file/d/1LADR30mm496WNC6RJ2zui83oEz4HwCks/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-2 w-full text-center rounded-xl bg-[#dc2626] px-4 py-3 font-bold text-white"
            >
               View Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
