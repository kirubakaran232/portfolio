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
    <section id="contact" className="px-5 py-12 md:px-8 md:py-16 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-gradient-to-br from-[#dc2626] to-[#ef4444] p-7 text-white shadow-xl shadow-red-500/20 md:p-10">
          <p className="font-mono-ui text-xs uppercase tracking-[0.28em] text-red-100">
            Next move
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Have a problem worth building?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 font-medium">
            I am open to internships, freelance work, and collaborative product
            ideas where clean interfaces meet practical backend logic.
          </p>
          <div className="mt-6 flex items-center gap-3 font-bold">
            <FiMapPin />
            <span>India, available remotely</span>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm md:p-8">
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group grid gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-1 hover:border-[#dc2626] hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dc2626] text-xl text-white shadow-md shadow-red-500/20">
                  {link.icon}
                </span>
                <span>
                  <span className="font-mono-ui text-xs uppercase tracking-[0.22em] text-[#dc2626]">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all text-lg font-semibold text-gray-900">
                    {link.value}
                  </span>
                </span>
                <FiSend className="text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#dc2626]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
