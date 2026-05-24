import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "skirubakaran2005@gmail.com",
      href: "mailto:skirubakaran2005@gmail.com",
      icon: <FiMail />,
    },
    {
      label: "GitHub",
      value: "kirubakaran232",
      href: "https://github.com/kirubakaran232",
      icon: <FiGithub />,
    },
    {
      label: "LinkedIn",
      value: "kirubakaran1406",
      href: "https://www.linkedin.com/in/kirubakaran1406/",
      icon: <FiLinkedin />,
    },
  ];

  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-gradient-to-br from-[#8245ec] to-[#a855f7] p-8 text-white shadow-[0_0_55px_rgba(130,69,236,0.35)] md:p-12">
          <p className="font-mono-ui text-xs uppercase tracking-[0.28em] text-purple-100">
            Next move
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Have a problem worth building?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 font-medium">
            I am open to internships, freelance work, and collaborative product
            ideas where clean interfaces meet practical backend logic.
          </p>
          <div className="mt-10 flex items-center gap-3 font-bold">
            <FiMapPin />
            <span>India, available remotely</span>
          </div>
        </div>

        <div className="rounded-3xl border border-[#8245ec]/25 bg-[#120d24]/80 p-6 shadow-[0_0_32px_rgba(130,69,236,0.14)] backdrop-blur md:p-10">
          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group grid gap-4 rounded-2xl border border-[#8245ec]/20 bg-[#050414]/70 p-5 transition hover:-translate-y-1 hover:border-[#a855f7] hover:bg-[#8245ec]/15 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#8245ec] text-xl text-white">
                  {link.icon}
                </span>
                <span>
                  <span className="font-mono-ui text-xs uppercase tracking-[0.22em] text-[#a855f7]">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all text-lg font-semibold text-white">
                    {link.value}
                  </span>
                </span>
                <FiSend className="text-purple-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
