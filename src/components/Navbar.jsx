import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full z-50 px-5 transition duration-300 md:px-8 ${
        isScrolled
          ? "border-b border-[#8245ec]/20 bg-[#050414]/80 shadow-lg shadow-[#8245ec]/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 text-white">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleMenuItemClick("about")}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-[#8245ec]/40 bg-[#8245ec] text-lg font-black text-white shadow-[0_0_28px_rgba(130,69,236,0.45)] transition hover:-translate-y-0.5 hover:bg-[#a855f7]"
            aria-label="Go to intro"
          >
            KS
          </button>
          <div className="hidden leading-tight sm:block">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[#a855f7]">
              Fullstack
            </p>
            <p className="text-sm font-semibold">Kirubakaran S</p>
          </div>
        </div>

        <ul className="hidden items-center gap-2 rounded-full border border-[#8245ec]/25 bg-[#120d24]/70 p-1 shadow-lg shadow-black/20 backdrop-blur md:flex">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer"
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "rounded-full bg-[#8245ec] text-white shadow-[0_0_20px_rgba(130,69,236,0.45)]"
                    : "rounded-full text-gray-300 hover:bg-[#8245ec]/15 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/kirubakaran232"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition hover:text-[#a855f7]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kirubakaran1406/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition hover:text-[#a855f7]"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://leetcode.com/u/kiruba1406/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-gray-300 transition hover:text-[#a855f7]"
          >
            <SiLeetcode size={22} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="cursor-pointer text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="cursor-pointer text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-5 right-5 top-20 z-50 rounded-2xl border border-[#8245ec]/25 bg-[#120d24]/95 p-3 shadow-2xl shadow-[#8245ec]/20 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-2 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer"
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full px-4 py-3 text-left font-semibold ${
                    activeSection === item.id
                      ? "rounded-xl bg-[#8245ec] text-white"
                      : "rounded-xl hover:bg-[#8245ec]/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex gap-4 px-4 py-3">
              <a
                href="https://github.com/kirubakaran232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-[#a855f7]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kirubakaran1406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-[#a855f7]"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/kiruba1406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-gray-300 hover:text-[#a855f7]"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
