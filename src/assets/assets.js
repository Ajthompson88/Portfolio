// src/assets/assets.js
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGithub,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Badge from "./coding-full-stack-web-development-certificate.png";
import Portrait from "./portrait.jpeg";

const footerIcons = [
  { name: "x", component: FaSquareXTwitter, link: "https://x.com/ajthompson8888" },
  { name: "linkedIn", component: FaLinkedin, link: "https://www.linkedin.com/in/andrew-thompson-442477aa/" },
  { name: "facebook", component: FaFacebookSquare, link: "https://www.facebook.com/share/1FHphmYFTj/?mibextid=wwXIfr" },
  { name: "instagram", component: FaInstagramSquare, link: "https://www.instagram.com/aj.thompson8888?igsh=MWY4c3g4MXJ1Mzdmaw%3D%3D&utm_source=qr" },
  { name: "github", component: IoLogoGithub, link: "https://github.com/ajthompson88" },
];

const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

const AboutPage = {
  authorProfile: Portrait,
  authorDescription: "Hello! I’m , a Full-Stack Developer and recent graduate of the University of North Carolina at Charlotte – Software Devlopment Bootcamp (May 2025). After 17 years in the automotive parts business, I’ve honed the ability to think quickly on my feet and deliver under pressure—skills, and I now bring those skills to building elegant, reliable software. I fell in love with coding as a new challenge, combining my lifelong passion for computers and hands-on building with professional software development. I’m proficient in HTML, CSS, JavaScript (React & Node.js), Python, and modern backend systems. My goal is always the same: deliver polished, high-performance applications that “just work,” delight users, and stand up to real-world demands. When I’m not writing code, you’ll likely find me assembling custom PCs or diving into the latest automotive tech. Ready to build something great together?",
  getInTouchUrl: "#Contact",
  authorName: "Andrew Thompson",
  profileImgTagLine: "Aspiring Software Developer",
  authorContactMail: "aj.thompson8888@gmail.com",
  authorContactNumber: "704-351-4995",
};

const EducationPage = [
  {
    graduationYear: 2007,
    degreeType: "High School",
    institution: "Eau Gallie High School",
    institutionUrl: "https://brevardschools.org/o/eghs",
  },
  {
    graduationYear: 2012,
    degreeType: "Associates in Arts",
    institution: "Eastern Florida State College",
    institutionUrl: "https://easternflorida.edu",
  },
  {
    graduationYear: 2025,
    degreeType: "Full Stack Developer Certificate",
    institution: "UNC Charlotte Bootcamp",
    institutionUrl: "https://bootcamp.uncc.edu",
  },
];

const CertificatesPage = [
  {
    img: Badge,
    title: "Full Stack Web Development Certificate",
    description: "Completed UNC Charlotte Coding Bootcamp…",
    issuedBy: "UNC Charlotte",
    credentialURL: "https://www.credly.com/badges/3d764556-e5f4-49b1-b94e-8875edb19b03",
  },
];

const skillsPage = [
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
];

const projectsPage = [
  {
    projectName: "Book Search",
    projectDescription: "Search for books and save them for reference later as an unread book or one that you have alreay read",
    projectURL: "https://booksearch-56mo.onrender.com",
    githubRepositoryURL: "https://github.com/Ajthompson88/M18",
    tags: ["MongoDB", "Express", "React", "Node"],
    date: "Nov 2024 – May 2025",
  },
  {
    projectName: "Look Me Up",
    projectDescription: "Find candidates for by using this useful candidate search tool",
    projectURL: "https://lookmeup.onrender.com",
    githubRepositoryURL: "https://github.com/Ajthompson88/LookMeUp",
    tags: ["TypeScript", "JavaScript", "CSS", "HTML"],
    date: "Nov 2024 – May 2025",
  },
  {
    projectName: "Traveller's Weather Dashboard",
    projectDescription: "Look up weather for any city you might be travelling to and see the forecast for the next 5 days",
    projectURL: "https://weatherapi-1-ia2e.onrender.com",
    githubRepositoryURL: "https://github.com/Ajthompson88/WeatherAPI",
    tags: ["Typescript", "Javascript", "CSS", "HTML"],
    date: "Nov 2024 – May 2025",
  },
  {
    projectName: "GridLock",
    projectDescription: "A fun new way to play tic-tac-toe against a computer player... for now",
    projectURL: "https://gridlock-75x0.onrender.com/",
    githubRepositoryURL: "https://github.com/Jimmykotter/gridlock",
    tags: ["React", "GraphQL", "Node.js", "Express", "MongoDB", "Apollo", "JWT", "bcrypt"],
    date: "Nov 2024 – May 2025",
  },
  {
    projectName: "My Krazy Kanban Board",
    projectDescription: "A Kanban board to help you keep track of your tasks and projects",
    projectURL: "https://kanban-board-t0wb.onrender.com",
    githubRepositoryURL: "https://github.com/Ajthompson88/M14KanbanBoardChallenge",
    tags: ["TypeScript", "JavaScript", "CSS", "HTML", "Node.js", "Express", "PostgreSQL"],
    date: "Nov 2024 – May 2025",
  },
  
];
const textLogo = "Jeremiah 29:11";
export {
  footerIcons,
  navElements,
  AboutPage,
  EducationPage,
  CertificatesPage,
  skillsPage,
  projectsPage,
  textLogo
};
