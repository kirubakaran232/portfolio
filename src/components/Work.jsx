import { useState } from "react";
import { projects } from "../constants";
import { FiExternalLink, FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#a855f7]">
              Selected builds
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">
              Projects
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gray-400">
            Work focused on practical public systems, safer roads, agriculture,
            ordering flows, and portfolio discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.id ?? project.title}
              onClick={() => handleOpenModal(project)}
              className="group flex h-full min-h-[430px] flex-col rounded-3xl border border-[#8245ec]/25 bg-[#120d24]/80 p-4 text-left shadow-[0_0_32px_rgba(130,69,236,0.14)] backdrop-blur transition hover:-translate-y-2 hover:border-[#a855f7] hover:shadow-[0_0_45px_rgba(130,69,236,0.28)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono-ui text-xs text-[#a855f7]">
                  CASE {String(index + 1).padStart(2, "0")}
                </span>
                <FiExternalLink className="text-purple-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#8245ec]/20 bg-[#050414]/70">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 min-h-[64px] text-2xl font-bold leading-tight text-white">
                {project.title}
              </h3>
              <p className="mt-4 line-clamp-4 flex-1 leading-7 text-gray-400">
                {project.description}
              </p>
              <div className="mt-6 flex min-h-[64px] flex-wrap content-start gap-2">
                {(project.tags ?? []).slice(0, 6).map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#8245ec]/15 px-2.5 py-1 font-mono-ui text-[11px] text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
                {(project.tags?.length ?? 0) > 6 && (
                  <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono-ui text-[11px] text-gray-300">
                    +{project.tags.length - 6}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050414]/90 p-4 backdrop-blur-xl">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#8245ec]/25 bg-[#120d24] shadow-2xl shadow-[#8245ec]/25">
            <div className="sticky top-0 z-10 flex justify-between border-b border-[#8245ec]/20 bg-[#120d24]/95 p-4 backdrop-blur">
              <span className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[#a855f7]">
                Project detail
              </span>
              <button
                onClick={handleCloseModal}
                className="grid h-9 w-9 place-items-center rounded-full bg-[#8245ec] text-white transition hover:bg-[#a855f7]"
                aria-label="Close project details"
              >
                <FiX />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[1fr_0.9fr] lg:p-8">
              <div>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-2xl border border-[#8245ec]/20 object-contain"
                  />
                )}
              </div>
              <div>
                <h3 className="text-3xl font-bold leading-tight text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-5 leading-8 text-gray-400">
                  {selectedProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(selectedProject.tags ?? []).map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#8245ec]/15 px-3 py-1.5 font-mono-ui text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-5 py-3 font-bold text-white transition hover:-translate-y-1"
                  >
                    View Code
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
