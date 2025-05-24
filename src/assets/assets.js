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
  authorDescription: "Full-Stack Developer with a hands-on approach to problem-solving and a passion for creating efficient, user-friendly applications. I have just finished a Full Stack Web Development Certificate from UNC Charlotte Bootcamp, where I am honing my skills in JavaScript, React, Node.js, and more. My background in Automotive Technology has equipped me with a strong analytical mindset and the ability to tackle complex challenges. I am eager to leverage my technical expertise and creativity to contribute to innovative projects in the tech industry.",
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
