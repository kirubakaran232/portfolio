const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-5 py-5 text-gray-900 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl border-t border-gray-200 py-6 text-center">
        <h2 className="text-xl font-bold text-[#dc2626]">Kirubakaran S</h2>

        <nav className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm font-medium text-gray-500 hover:text-[#dc2626] sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <p className="mt-4 font-mono-ui text-xs text-gray-400">
          (c) 2026 Kirubakaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
