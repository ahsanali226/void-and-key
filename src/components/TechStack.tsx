import type { ReactNode } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";
import {
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
  FaAws,
  FaSlack,
  FaLinkedin,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiVuedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiStripe,
  SiFigma,
  SiNotion,
  SiZendesk,
  SiZoho,
  SiHubspot,
  SiTensorflow,
  SiMeta,
  SiBuffer,
  SiQuickbooks,
  SiXero,
  SiZapier,
  SiAirtable,
} from "react-icons/si";

import { TbBrandTwilio } from "react-icons/tb";

const defaultTechStack = [
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

function CanvaIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Canva</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" />
    </svg>
  );
}

/** Lookup so optional custom names resolve to a real icon where known. */
const techIconMap: Record<string, ReactNode> = {
  ...defaultTechStack.reduce(
    (map, tech) => {
      map[tech.name] = tech.icon;
      return map;
    },
    {} as Record<string, ReactNode>
  ),
  // Customer Support
  Zendesk: <SiZendesk className="text-[#03363D] text-3xl" />,
  Zoho: <SiZoho className="text-[#E42527] text-3xl" />,
  HubSpot: <SiHubspot className="text-[#FF7A59] text-3xl" />,
  Twilio: <TbBrandTwilio className="text-[#F22F46] text-3xl" />,
  Slack: <FaSlack className="text-[#4A154B] text-3xl" />,
  // Web & Cloud & Design
  "Next.js": <SiNextdotjs className="text-black text-3xl" />,
  TypeScript: <SiTypescript className="text-[#3178C6] text-3xl" />,
  AWS: <FaAws className="text-[#FF9900] text-3xl" />,
  Stripe: <SiStripe className="text-[#635BFF] text-3xl" />,
  Figma: <SiFigma className="text-[#F24E1E] text-3xl" />,
  Canva: <CanvaIcon className="text-[#00C4CC] w-8 h-8" />,
  Notion: <SiNotion className="text-black text-3xl" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00] text-3xl" />,
  Meta: <SiMeta className="text-[#0081FB] text-3xl" />,
  LinkedIn: <FaLinkedin className="text-[#0A66C2] text-3xl" />,
  Buffer: <SiBuffer className="text-[#231F20] text-3xl" />,
  QuickBooks: <SiQuickbooks className="text-[#2CA01C] text-3xl" />,
  Xero: <SiXero className="text-[#13B5EA] text-3xl" />,
  Zapier: <SiZapier className="text-[#FF4A00] text-3xl" />,
  Airtable: <SiAirtable className="text-[#18BFFF] text-3xl" />,
  Excel: <FaFileExcel className="text-[#217346] text-3xl" />,
  "Power BI": (
    <Image
      src="/images/power-bi.svg"
      alt="Power BI"
      width={28}
      height={28}
      className="w-7 h-7 object-contain"
    />
  ),
  PowerBI: (
    <Image
      src="/images/power-bi.svg"
      alt="Power BI"
      width={28}
      height={28}
      className="w-7 h-7 object-contain"
    />
  ),
};

interface TechStackProps {
  /** Optional list of technology names; falls back to the homepage defaults. */
  techStack?: string[];
}

export default function TechStack({ techStack }: TechStackProps) {
  const items =
    techStack && techStack.length > 0
      ? techStack.map((name) => ({
        name,
        icon: techIconMap[name] ?? <Code2 className="text-[#F4A024] text-3xl" />,
      }))
      : defaultTechStack;

  return (
    <section className="bg-black py-14 lg:py-16">
      <div className="w-full px-0">
        <h2 className="text-center text-5xl font-bold text-orange-400 mb-8">
          Our Tech Stack
        </h2>

        <div className="bg-[#242424] py-5 px-10 lg:px-16 flex flex-wrap items-center justify-between gap-4 w-full">
          {items.map((tech) => (
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
