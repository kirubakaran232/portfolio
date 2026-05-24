const htmlLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const cssLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const javascriptLogo = "https://img.icons8.com/color/48/javascript--v1.png";
const reactjsLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const tailwindcssLogo = "https://img.icons8.com/fluency/48/tailwind_css.png";
const bootstrapLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
const nodejsLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const expressjsLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
const mysqlLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
const mongodbLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
const firebaseLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";
const cLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg";
const javaLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
const pythonLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const gitLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
const githubLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const vscodeLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";
const postmanLogo =
  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg";
const figmaLogo =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
const vercelLogo = "https://www.svgrepo.com/show/327408/logo-vercel.svg";

// Project Section Logo's
import farm from "./assets/work_logo/farm.png";
import road from "./assets/work_logo/road.png";
import food from "./assets/work_logo/food.png";
import car from "./assets/work_logo/car.png";
import portfolio from "./assets/work_logo/portfolio.png";
import interview from "./assets/work_logo/interview.png"
import chat from "./assets/work_logo/chat.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Interview Evaluator",
    description:
      "Reducing bias and improving candidate evaluation accuracy through an AI-powered interview assessment and skill analysis platform.",
    image: interview,
    tags: ["React JS", "Tailwindcss", "Node.js", "Firebase", "MongoDB"],
    github: "https://github.com/kirubakaran232/Interview_Analyzer",
  },
  {
    id: 1,
    title: "Smart Farming Solution",
    description:
      "A smart, multilingual agri-advisory solution that provides personalized crop, soil, and weather insights to small farmers. It leverages AI for real-time guidance, pest detection, and market updates. The platform reduces costs, improves yields, and promotes sustainable farming. With voice and local language support, it empowers low-literate farmers and enhances livelihoods.",
    image: farm,
    tags: ["React JS", "CSS", "Node JS", "Express JS", "Python", "API"],
    github: "https://github.com/kirubakaran232/Farming_advisory",
  },
  {
    id: 2,
    title: "Chatting Application",
    description:
      "GhostTalk is a modern AI-powered real-time chatting platform that enables secure username-based communication with features like locked chats, voice/video calls, media sharing, and smart AI assistance. The platform focuses on privacy, seamless connectivity, and an advanced user experience beyond traditional messaging applications.",
    image: chat,
    tags: ["React JS", "Tailwindcss", "Node.js", "Firebase", "MongoDB"],
    github: "https://github.com/kirubakaran232/Chatting_Application",
  },
  {
    id: 3,
    title: "Road Hazard Reporting System",
    description:
      "A web-based platform for citizens to report road hazards and track their resolution in real time. Includes an admin panel for verifying reports, updating statuses, and managing feedback. Users can view completed reports with ratings and progress updates. Enhances road safety, transparency, and community participation.",
    image: road,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/kirubakaran232/Road-hazard-reporting-system",
  },
  {
    id: 4,
    title: "Food Ordering System",
    description:
      "A dynamic food ordering system with an interactive menu for users to browse and place orders. Includes an admin page to add new food items, update prices, and manage availability. Integrated with secure payment options for seamless transactions. Provides a smooth experience for both customers and administrators.",
    image: food,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/kirubakaran232/food-ordering-system",
  },

  {
    id: 5,
    title: "Car Crash Detector and Alert System",
    description:
      "A real-time vehicle crash detection system using MEMS and speed sensors for accident identification. Integrated with GPS for live location tracking and GSM for instant emergency alerts. A connected website allows admins to verify and correct false alerts. Enhances road safety by enabling faster response and reducing misinformation.",
    image: car,
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/kirubakaran232/car-crash-alert-system",
  },
];
