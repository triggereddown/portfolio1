// import React from "react";
// import Image from "next/image";
// import work_1 from "../assets/work-1.png";
// import work_2 from "../assets/work-2.png";
// import work_3 from "../assets/work-3.png";
// import work_4 from "../assets/work-4.png";
// import work_5 from "../assets/work-5.png";
// import work_6 from "../assets/work-6.png";

// const Work = () => {
//   return (
//     <div id="work" className="w-full px-[12%] py-10">
//       <h4 className="text-center mb-2 text-lg font-ovo">My Arsenal</h4>
//       <h2 className="text-center text-5xl font-ovo">Projects</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
//         Here are some of my best works. Click the links to explore!
//       </p>

//       {/* Responsive Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Project 1 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_1} alt="Project 1" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 1</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 1.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Project 2 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_2} alt="Project 2" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 2</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 2.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Project 3 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_3} alt="Project 3" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 3</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 3.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Project 4 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_4} alt="Project 4" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 4</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 4.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Project 5 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_5} alt="Project 5" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 5</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 5.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         {/* Project 6 */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
//           <Image src={work_6} alt="Project 6" className="rounded-lg" />
//           <h2 className="text-xl font-semibold mt-4">Project 6</h2>
//           <p className="text-gray-600 mt-2">
//             A brief description of Project 6.
//           </p>
//           <div className="flex justify-between mt-4">
//             <a
//               href="https://example.com"
//               target="_blank"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               Live Demo
//             </a>
//             <a
//               href="https://github.com/example"
//               target="_blank"
//               className="px-4 py-2 bg-gray-800 text-white rounded-lg"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

// images
import work_1 from "../assets/work-1.png";
import work_2 from "../assets/work-2.png";
import work_3 from "../assets/work-3.png";
import work_4 from "../assets/work-4.png";
import work_5 from "../assets/work-5.png";
import work_6 from "../assets/work-6.png";
import work_7 from "../assets/work-7.png";
import work_8 from "../assets/work-8.png";
import work_9 from "../assets/work-9.png";
import work_11 from "../assets/work-11.png";
import work_12 from "../assets/work-12.png";

import githubIcon from "../assets/githubIcon.png";
import githubIconDark from "../assets/githubIconDark.png";
import figmaIcon from "../assets/figma.png";

// 🔥 ICON CONFIG (dynamic)
const ICONS = {
  github: {
    light: githubIcon,
    dark: githubIconDark,
    alt: "GitHub",
  },
  figma: {
    light: figmaIcon,
    dark: figmaIcon,
    alt: "Figma",
  },
};

// 🔥 PROJECTS DATA (new ones at top)
const projects = [
  {
    id: 1,
    image: work_11,
    title: "Productivity Dashboard",
    desc: "Neo Brutalist styled productivity dashboard",
    demo: "https://triggereddown.github.io/BatBoard/",
    repo: "https://github.com/triggereddown/BatBoard",
    type: "github",
  },
  {
    id: 2,
    image: work_12,
    title: "BatMove",
    desc: "Isometric styled Movie Platform",
    demo: "https://bat-move.vercel.app/",
    repo: "https://github.com/triggereddown/BatMove",
    type: "github",
  },

  {
    id: 3,
    image: work_8,
    title: "GamerThred - Full-Stack game quest completion platform",
    desc: "Gamified quest platform with rewards and scalable backend workflows.",
    demo: "https://projectgamerthred.vercel.app/",
    repo: "--",
    type: "github",
  },
  {
    id: 4,
    image: work_9,
    title: "HealthHive",
    desc: "Health + ML app with FastAPI backend and NLP chatbot.",
    demo: "https://health-hive-nine.vercel.app/",
    repo: "https://github.com/triggereddown/HealthHive",
    type: "github",
  },
  {
    id: 5,
    image: work_7,
    title: "AlfredAIChat",
    desc: "AI-powered code reviewer + real-time chat (MERN stack).",
    demo: "https://aichattrigger.onrender.com/",
    repo: "https://github.com/triggereddown/AlfredCodeV2",
    type: "github",
  },
  {
    id: 6,
    image: work_1,
    title: "Forge UI Store",
    desc: "Full-stack UI component store with admin panel.",
    demo: "https://forge-ui-seven.vercel.app/",
    repo: "https://github.com/triggereddown/UIStore",
    type: "github",
  },
  {
    id: 7,
    image: work_2,
    title: "Online Delivery System (UI/UX)",
    desc: "Complete UI/UX billing system design.",
    demo: "https://www.figma.com/design/st2BAHFlWqK8sFVmsPjqsw/ORDER-PANEL-DESIGN",
    repo: "https://www.figma.com/design/st2BAHFlWqK8sFVmsPjqsw/ORDER-PANEL-DESIGN",
    type: "figma",
  },
  {
    id: 8,
    image: work_3,
    title: "Eat Curious Clone",
    desc: "Pixel-perfect UI clone.",
    demo: "https://ui-web-clone-eatcurious-xll2.onrender.com/",
    repo: "https://github.com/triggereddown/UI_web_clone_EatCurious",
    type: "github",
  },
  {
    id: 9,
    image: work_4,
    title: "Pokédex Generator",
    desc: "JS project using Pokémon API.",
    demo: "https://triggereddown.github.io/Pokemon_card_API_project/",
    repo: "https://github.com/triggereddown/Pokemon_card_API_project",
    type: "github",
  },
  {
    id: 10,
    image: work_5,
    title: "Tab Manager Extension",
    desc: "Chrome extension for saving tabs.",
    demo: "https://github.com/triggereddown/Productive_tab_manager",
    repo: "https://github.com/triggereddown/Productive_tab_manager",
    type: "github",
  },
  {
    id: 11,
    image: work_6,
    title: "Transport Hackathon App (UI/UX)",
    desc: "Inventory management mobile UI design.",
    demo: "https://www.figma.com/design/DkmQpeMsihGSNqVFAz8puz/Eka-care-working",
    repo: "https://www.figma.com/design/DkmQpeMsihGSNqVFAz8puz/Eka-care-working",
    type: "figma",
  },
];

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10"
    >
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Arsenal
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Here are some of my best works. Click to explore!
      </motion.p>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => {
          const icon = ICONS[project.type];

          return (
            <div
              key={project.id}
              className="card p-6 border border-darkHover rounded-md hover:shadow-black cursor-pointer hover:bg-darkHoverLightNew hover:-translate-y-1 duration-300 dark:border dark:border-darkThemeButton hover:dark:bg-darkThemeButton"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={200}
                className="rounded-md"
              />

              <h3 className="text-2xl font-ovo pt-6">{project.title}</h3>
              <p className="font-ovo pt-4 text-sm">{project.desc}</p>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-darkHover text-white rounded-lg dark:bg-darkThemeButton hover:dark:bg-black"
                >
                  Live Demo
                </a>

                {project.repo !== "--" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2"
                  >
                    <Image
                      src={isDarkMode ? icon.dark : icon.light}
                      alt={icon.alt}
                      width={28}
                      height={28}
                    />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Work;
