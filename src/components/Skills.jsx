import { SkillsInfo } from "../constants";

const Skills = () => (
  <section
    id="skills"
    className="px-5 py-20 md:px-8 md:py-28"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 grid gap-6 border-y border-[#8245ec]/20 py-8 md:grid-cols-[0.6fr_1fr] md:items-end">
        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#a855f7]">
            Capability map
          </p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
            Skills
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-400 md:justify-self-end">
          A practical stack shaped by project work: interfaces, APIs, databases,
          tooling, and the languages needed to connect them cleanly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SkillsInfo.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="rounded-3xl border border-[#8245ec]/25 bg-[#120d24]/80 p-5 shadow-[0_0_32px_rgba(130,69,236,0.16)] backdrop-blur sm:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono-ui text-xs text-[#a855f7]">
                  0{categoryIndex + 1}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <span className="mt-1 rounded-full border border-[#8245ec]/25 bg-[#8245ec]/10 px-3 py-1 font-mono-ui text-xs text-purple-300">
                {category.skills.length} tools
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex min-h-16 items-center gap-3 rounded-2xl border border-[#8245ec]/20 bg-[#050414]/70 px-3 py-3 transition hover:-translate-y-1 hover:border-[#a855f7] hover:bg-[#8245ec]/15"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-sm font-semibold text-gray-300">
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
