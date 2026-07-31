import { useState } from "react";
import { projects } from "../constants";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiFirebase, 
  SiExpress, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPython 
} from "react-icons/si";

// Helper function to map tag strings to icons
const getTagIcon = (tag) => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes("react")) return <SiReact className="text-[#61DAFB]" size={16} />;
  if (lowerTag.includes("node")) return <SiNodedotjs className="text-[#339933]" size={16} />;
  if (lowerTag.includes("mongo")) return <SiMongodb className="text-[#47A248]" size={16} />;
  if (lowerTag.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4]" size={16} />;
  if (lowerTag.includes("firebase")) return <SiFirebase className="text-[#FFCA28]" size={16} />;
  if (lowerTag.includes("express")) return <SiExpress className="text-gray-800" size={16} />;
  if (lowerTag.includes("javascript")) return <SiJavascript className="text-[#F7DF1E]" size={16} />;
  if (lowerTag.includes("html")) return <SiHtml5 className="text-[#E34F26]" size={16} />;
  if (lowerTag.includes("css")) return <SiCss3 className="text-[#1572B6]" size={16} />;
  if (lowerTag.includes("python")) return <SiPython className="text-[#3776AB]" size={16} />;
  
  // Default fallback dot if no icon matches
  return <div className="w-2 h-2 rounded-full bg-gray-400"></div>;
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="relative px-5 py-24 md:px-12 lg:px-20 bg-white overflow-hidden">
      
      {/* Decorative Top Right Dotted Grid */}
      <div 
        className="absolute top-10 right-10 w-64 h-64 lg:w-96 lg:h-96 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#dc2626 2.5px, transparent 2.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom left, black, transparent)'
        }}
      ></div>

      {/* Decorative Bottom Left Waves */}
      <div className="absolute bottom-0 left-0 w-full h-96 pointer-events-none opacity-20 overflow-hidden -z-10">
        <div className="absolute -bottom-24 -left-24 w-[700px] h-[400px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
        <div className="absolute -bottom-20 -left-20 w-[700px] h-[400px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
        <div className="absolute -bottom-16 -left-16 w-[700px] h-[400px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
        <div className="absolute -bottom-12 -left-12 w-[700px] h-[400px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
        <div className="absolute -bottom-8 -left-8 w-[700px] h-[400px] border-[1px] border-[#dc2626] rounded-[50%]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header Section */}
        <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#dc2626]">
                My Work
              </p>
            </div>
            <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter text-[#111111]">
              Projects <span className="text-[#dc2626]">I've Built</span>
            </h2>
            <div className="w-16 h-1 bg-[#dc2626] mt-6"></div>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-gray-600 md:justify-self-end font-medium">
            A selection of projects that reflect my passion for building efficient, 
            scalable and user-friendly web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id ?? project.title}
              className="group relative flex flex-col rounded-2xl bg-white p-5 shadow-[0_5px_30px_rgba(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_15px_40px_rgba(220,38,38,0.08)] hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => handleOpenModal(project)}
            >
              {/* Red Left Border Accent */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-gray-50 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                
                {/* Floating Arrow Button */}
                <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#dc2626] shadow-lg transition-transform duration-300 group-hover:bg-red-50 group-hover:scale-110">
                  <FiArrowUpRight size={20} strokeWidth={3} />
                </div>
              </div>
              
              {/* Content Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {project.title}
                </h3>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#dc2626] uppercase tracking-wide">
                  Project <div className="h-1.5 w-1.5 rounded-full bg-[#dc2626]"></div>
                </span>
              </div>
              
              {/* Description */}
              <p className="line-clamp-3 text-[14px] leading-relaxed text-gray-600 min-h-[63px]">
                {project.description}
              </p>
              
              {/* Tech Stack Icons */}
              <div className="mt-5 flex flex-wrap gap-2.5 items-center flex-1 content-start">
                {(project.tags ?? []).slice(0, 4).map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.015)] transition-all hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-white cursor-default">
                    {getTagIcon(tag)}
                    <span className="text-[11px] font-bold text-gray-700">{tag.replace(" JS", "")}</span>
                  </div>
                ))}
              </div>
              
              {/* Divider & Links */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[13px] font-bold text-[#dc2626] transition-colors group-hover:text-red-700">
                  View Project <FiArrowUpRight size={16} strokeWidth={3} />
                </span>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[13px] font-bold text-gray-900 transition-colors hover:text-[#dc2626]"
                  >
                    GitHub <FiGithub size={16} strokeWidth={2.5} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4 backdrop-blur-sm transition-opacity">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex justify-between border-b border-gray-100 bg-white/90 p-5 backdrop-blur">
              <span className="font-bold text-[13px] uppercase tracking-widest text-[#dc2626]">
                Project detail
              </span>
              <button
                onClick={handleCloseModal}
                className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="grid gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
              <div>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-2xl border border-gray-100 object-cover shadow-sm"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-black leading-tight text-gray-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                  {selectedProject.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {(selectedProject.tags ?? []).map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-[12px] font-bold text-[#dc2626] border border-red-100"
                    >
                      {getTagIcon(tag)} {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] px-8 py-4 font-bold text-white transition-all shadow-[0_10px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1"
                  >
                    View Source Code
                    <FiGithub size={18} />
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
