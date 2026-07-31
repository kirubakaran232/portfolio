import { SkillsInfo } from "../constants";

const Skills = () => (
  <section
    id="skills"
    className="relative px-5 py-24 md:px-12 lg:px-20 bg-white overflow-hidden"
  >
    {/* Decorative Top Right Dotted Grid */}
    <div 
      className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-40 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(#dc2626 2px, transparent 2px)',
        backgroundSize: '24px 24px',
        maskImage: 'linear-gradient(to bottom left, black, transparent)'
      }}
    ></div>

    {/* Decorative Bottom Left Waves (Simulated with curved borders) */}
    <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none opacity-20 overflow-hidden -z-10">
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[300px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
      <div className="absolute -bottom-16 -left-16 w-[600px] h-[300px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
      <div className="absolute -bottom-12 -left-12 w-[600px] h-[300px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
      <div className="absolute -bottom-8 -left-8 w-[600px] h-[300px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
      <div className="absolute -bottom-4 -left-4 w-[600px] h-[300px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
    </div>

    <div className="relative mx-auto max-w-7xl z-10">
      
      {/* Header Section */}
      <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#dc2626]">
              My Skills
            </p>
          </div>
          <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter text-[#111111]">
            Skills & <br />
            <span className="text-[#dc2626]">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mt-6"></div>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-gray-600 md:justify-self-end font-medium">
          A practical stack shaped by project work: interfaces, APIs, databases,
          tooling, and the languages needed to connect them cleanly.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {SkillsInfo.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(220,38,38,0.06)]"
          >
            {/* Red Left Border Accent */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

            {/* Card Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dc2626] text-sm font-bold text-white">
                  0{categoryIndex + 1}
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  {category.title}
                </h3>
              </div>
              <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold text-[#dc2626] uppercase tracking-wide">
                {category.skills.length} tools
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex min-h-[50px] items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.015)] transition-all hover:-translate-y-1 hover:border-[#dc2626] hover:shadow-md cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-[13px] font-bold text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
