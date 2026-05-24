import ReactTypingEffect from 'react-typing-effect';
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section
      id="about"
      className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,430px)] xl:gap-16">
        <div className="order-2 mx-auto max-w-3xl text-center lg:order-1 lg:mx-0 lg:text-left">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#8245ec]/25 bg-[#8245ec]/10 px-4 py-2 shadow-[0_0_28px_rgba(130,69,236,0.18)]">
            <span className="h-2 w-2 rounded-full bg-[#a855f7]"></span>
            <span className="font-mono-ui text-xs uppercase tracking-[0.24em] text-gray-300">
              Building useful web systems
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[0.98] text-white sm:text-6xl xl:text-7xl">
            Kirubakaran S
          </h1>

          <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[#a855f7] sm:text-3xl lg:mx-0 xl:text-4xl">
            <span className="text-white">I design and ship as a </span>
            <ReactTypingEffect
              text={["Fullstack Developer", "Problem Solver", "MERN Builder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 lg:mx-0">
            I am a full-stack developer, building scalable web applications.
            Skilled in both front-end and back-end development, I specialize in
            the MERN stack and other modern technologies to create seamless user
            experiences and efficient solutions.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1Bazyjpww7Omh9OxF8-wfkxSwkSSQuH-V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-7 py-4 font-bold text-white shadow-[0_0_34px_rgba(130,69,236,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(130,69,236,0.65)]"
            >
              <FiDownload />
              Resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8245ec]/35 bg-[#120d24]/70 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-[#a855f7] hover:bg-[#8245ec]/15"
            >
              View Projects
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="order-1 relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:order-2 lg:max-w-none">
          <div className="absolute -left-4 top-8 hidden h-[calc(100%-1rem)] w-full rounded-[2rem] border border-[#8245ec]/40 md:block"></div>
          <div className="relative rounded-[2rem] border border-[#8245ec]/25 bg-[#120d24]/80 p-4 shadow-[0_0_60px_rgba(130,69,236,0.25)] backdrop-blur">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[#8245ec]/20 pb-4">
              <span className="font-mono-ui text-xs text-[#a855f7]">PROFILE</span>
              <span className="h-px bg-[#8245ec]/20"></span>
              <span className="font-mono-ui text-xs text-emerald-300">ONLINE</span>
            </div>
            <img
              src={profileImage}
              alt="Kirubakaran S"
              className="mt-4 aspect-[4/5] w-full rounded-[1.5rem] object-cover drop-shadow-[0_15px_35px_rgba(130,69,236,0.35)]"
            />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {["React", "Node", "MongoDB"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#8245ec]/20 bg-[#8245ec]/10 px-2 py-3 font-mono-ui text-[11px] uppercase text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
