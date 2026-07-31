import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { SiReact, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import profileImage from '../assets/me.png';

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden pt-24 pb-8 lg:pt-10 lg:pb-0 xl:pt-16 xl:pb-2 flex flex-col items-center justify-center min-h-screen bg-white text-black z-0">
      
      {/* Decorative Red Dotted Grid (Bottom Left) */}
      <div 
        className="absolute bottom-4 left-4 lg:bottom-4 lg:left-4 xl:bottom-6 xl:left-6 w-40 h-40 lg:w-20 lg:h-20 xl:w-28 xl:h-28 opacity-50 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(#dc2626 2.5px, transparent 2.5px)',
          backgroundSize: '20px 20px'
        }}
      ></div>



      {/* Massive Typography Container (STRICTLY BEHIND IMAGE) */}
      <div className="relative flex flex-col items-center w-full max-w-[1500px] mx-auto z-10 pointer-events-none translate-y-8 lg:translate-y-10 xl:translate-y-12">
        
        {/* Solid Text */}
        <h1 
          className="text-[16vw] sm:text-[14vw] md:text-[13vw] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-black leading-[0.8] tracking-tighter text-[#111111] text-center uppercase relative z-10 select-none"
          style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', transform: 'scaleY(1.05)' }}
        >
          Fullstack
        </h1>
        
        {/* Outline Text */}
        <h1 
          className="text-[16vw] sm:text-[14vw] md:text-[13vw] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-black leading-[0.8] tracking-tighter text-transparent text-center uppercase relative z-10 select-none mt-6 sm:mt-8 md:mt-10 lg:mt-6 xl:mt-8 2xl:mt-12"
          style={{ 
            fontFamily: '"Helvetica Neue", Arial, sans-serif', 
            WebkitTextStroke: '2px #dc2626',
            transform: 'scaleY(1.05)'
          }}
        >
        Developer
        </h1>

      </div>

      {/* Profile Image & Background Circle (STRICTLY IN FRONT OF TEXT) */}
      <div 
        className="relative w-[340px] sm:w-[450px] md:w-[500px] lg:w-[280px] xl:w-[320px] 2xl:w-[420px] -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-16 xl:-mt-20 2xl:-mt-28 z-30 flex items-center justify-center pointer-events-none mx-auto"
        style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 95%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 95%)' }}
      >
          
          {/* Big Solid Red Circle */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5%] w-[95%] aspect-square bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-full -z-10 shadow-[0_20px_50px_rgba(220,38,38,0.2)]"></div>
          
          {/* Profile Picture */}
          <img 
            src={profileImage} 
            alt="Kirubakaran S" 
            className="w-full h-auto object-contain drop-shadow-2xl z-20 pointer-events-auto"
          />
      </div>

      {/* Floating Side Elements (Desktop) */}
      
      {/* Left: Based in India */}
      <div className="hidden lg:block absolute left-[2%] xl:left-[3%] bottom-[2%] lg:bottom-[3%] xl:bottom-[5%] z-40">
        <div className="flex flex-col gap-6 lg:gap-5 xl:gap-8">
          <div className="border-l-[3px] border-[#dc2626] pl-4 lg:pl-3 xl:pl-5">
            <p className="text-gray-800 text-[16px] lg:text-[14px] xl:text-[16px] font-medium tracking-tight leading-snug">
              building modern web <br /> experiences.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right: Technologies */}
      <div className="hidden lg:block absolute right-[2%] xl:right-[3%] bottom-[2%] lg:bottom-[3%] xl:bottom-[5%] z-40">
        <p className="text-gray-700 text-[13px] lg:text-[12px] xl:text-[13px] font-bold mb-3 text-center tracking-tight">Technologies I work with</p>
        <div className="flex items-center gap-4 lg:gap-3 xl:gap-4 justify-center">
            <SiReact className="text-[#dc2626] hover:scale-110 transition-transform cursor-pointer drop-shadow-sm w-8 h-8 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            <SiJavascript className="text-[#dc2626] hover:scale-110 transition-transform cursor-pointer drop-shadow-sm w-8 h-8 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            <SiMongodb className="text-[#dc2626] hover:scale-110 transition-transform cursor-pointer drop-shadow-sm w-8 h-8 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            <SiTailwindcss className="text-[#dc2626] hover:scale-110 transition-transform cursor-pointer drop-shadow-sm w-8 h-8 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
        </div>
      </div>



      {/* Mobile Side Elements */}
      <div className="flex flex-col w-full max-w-sm gap-6 items-center mt-6 lg:hidden z-40 px-4 pb-4">
          <div className="border-l-[4px] border-[#dc2626] pl-4 self-start">
            <p className="text-gray-800 text-[17px] font-medium leading-snug tracking-tight">
              building modern web <br /> experiences.
            </p>
          </div>
          <div className="flex w-full justify-end items-center">
            <div className="flex items-center gap-4 text-[#dc2626]">
              <SiReact size={22} />
              <SiJavascript size={22} />
              <SiMongodb size={22} />
            </div>
          </div>
      </div>
      
    </section>
  );
};

export default About;
