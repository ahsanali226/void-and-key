import {
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiVuedotjs,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  {
    name: "Docker",
    icon: <FaDocker className="text-[#2496ED] text-3xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#3C873A] text-3xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#3776AB] text-3xl" />,
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="text-[#42B883] text-3xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB] text-3xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] text-3xl" />,
  },
];

export default function TechStack() {
  return (
    <section className="bg-black py-14 lg:py-16">
      <div className="w-full px-0">
        <h2 className="text-center text-5xl font-bold text-orange-400 mb-8">
          Our Tech Stack
        </h2>

        <div className="bg-[#242424] py-5 px-10 lg:px-16 flex flex-wrap items-center justify-between gap-4 w-full">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-full px-8 py-3 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {tech.icon}
              <span className="font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}