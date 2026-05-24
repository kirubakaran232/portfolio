const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-5 py-5 text-white md:px-8">
      <div className="mx-auto max-w-7xl border-t border-[#8245ec]/20 py-6 text-center">
        <h2 className="text-xl font-bold text-[#a855f7]">Kirubakaran S</h2>

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
              className="my-1 text-sm text-gray-400 hover:text-[#a855f7] sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <p className="mt-4 font-mono-ui text-xs text-gray-500">
          (c) 2026 Kirubakaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
