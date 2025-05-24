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
import { RiNodejsFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Badge from "./coding-full-stack-web-development-certificate.png";
import Portrait from "./portrait.jpeg";

const footerIcons = [
  { name: "x", component: FaSquareXTwitter, link: "https://x.com/…" },
  { name: "linkedIn", component: FaLinkedin, link: "https://linkedin.com/…" },
  { name: "facebook", component: FaFacebookSquare, link: "https://facebook.com/…" },
  { name: "instagram", component: FaInstagramSquare, link: "https://instagram.com/…" },
  { name: "github", component: IoLogoGithub, link: "https://github.com/…" },
];

const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

const AboutPage = {
  authorProfile: Portrait,
  authorDescription: "Hello! I’m , a Full-Stack Developer and recent graduate of the University of North Carolina at Charlotte – Software Engineering Bootcamp (May 2025). After 17 years in the automotive parts business, I’ve honed the ability to think quickly on my feet and deliver under pressure—skills I now bring to building elegant, reliable software. I fell in love with coding as a new challenge, combining my lifelong passion for computers and hands-on building with professional software engineering. I’m proficient in HTML, CSS, JavaScript (React & Node.js), Python, and modern backend systems. My goal is always the same: deliver polished, high-performance applications that “just work,” delight users, and stand up to real-world demands. When I’m not writing code, you’ll likely find me assembling custom PCs or diving into the latest automotive tech. Ready to build something great together?",
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
    degreeType: "Full Stack Web Dev Certificate",
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
    credentialURL: "https://credly.com/…",
  },
];

const skillsPage = [
  RiNodejsFill,
  FaGithub,
  FaJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
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
    projectName: "Coming Soon",
    projectDescription: "",
    projectURL: "",
    githubRepositoryURL: "",
    tags: ["", "", "", ""],
    date: "Nov 2024 – May 2025",
  },
  {
    projectName: "",
    projectDescription: "",
    projectURL: "",
    githubRepositoryURL: "",
    tags: ["", "", "", ""],
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
