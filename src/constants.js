// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Project Section Logo's
import farm from "./assets/work_logo/farm.png";
import road from "./assets/work_logo/road.png";
import food from "./assets/work_logo/food.png";
import car from "./assets/work_logo/car.png";
import portfolio from "./assets/work_logo/portfolio.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const projects = [
    {
      id: 0,
      title: "Smart Farming Solution",
      description:
        "A smart, multilingual agri-advisory solution that provides personalized crop, soil, and weather insights to small farmers. It leverages AI for real-time guidance, pest detection, and market updates. The platform reduces costs, improves yields, and promotes sustainable farming. With voice and local language support, it empowers low-literate farmers and enhances livelihoods.",
      image: farm,
      tags: ["React JS", "CSS", "Node JS", "Express JS", "Python", "API"],
      github: "https://github.com/kirubakaran232/Farming_advisory",
    },
    {
      id: 1,
      title: "Road Hazard Reporting System",
      description:
        "A web-based platform for citizens to report road hazards and track their resolution in real time. Includes an admin panel for verifying reports, updating statuses, and managing feedback. Users can view completed reports with ratings and progress updates. Enhances road safety, transparency, and community participation.",
      image: road,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/kirubakaran232/Road-hazard-reporting-system",
    },
    {
      id: 2,
      title: "Food Ordering System",
      description:
        "A dynamic food ordering system with an interactive menu for users to browse and place orders. Includes an admin page to add new food items, update prices, and manage availability. Integrated with secure payment options for seamless transactions. Provides a smooth experience for both customers and administrators.",
      image: food,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/kirubakaran232/food-ordering-system",
    },
    {
      id: 3,
      title: "Car Crash Detector and Alert System",
      description:
        "A real-time vehicle crash detection system using MEMS and speed sensors for accident identification. Integrated with GPS for live location tracking and GSM for instant emergency alerts. A connected website allows admins to verify and correct false alerts. Enhances road safety by enabling faster response and reducing misinformation.",
      image: car,
      tags: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com/kirubakaran232/car-crash-alert-system",
    },
    {
      id: 4,
      title: "Portfolio Showcase Website",
      description:
        "A portfolio showcase website where users can post and share their portfolio URLs. Provides sections to display skills, projects, about, and contact details. Enables networking by allowing others to explore portfolios directly. Helps professionals highlight their expertise and reach wider audiences.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/kirubakaran232/job-portfolio",
    },
  ];  