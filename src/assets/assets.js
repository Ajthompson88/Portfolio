// src/assets/assets.js
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGit,
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
  authorDescription: "Hello! I’m Andrew Thompson…",
  getInTouchUrl: "#Contact",
  authorName: "Andrew Thompson",
  profileImgTagLine: "Aspiring Software Developer",
  authorContactMail: "aj.thompson8888@gmail.com",
  authorContactNumber: "000-000-0000",
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
    graduationYear: 2015,
    degreeType: "B.S. Mechanical Engineering",
    institution: "UNC Charlotte",
    institutionUrl: "https://charlotte.edu",
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
  FaGit,
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
    projectDescription: "Search for books…",
    projectURL: "https://booksearch-…",
    githubRepositoryURL: "https://github.com/Ajthompson88/M18",
    tags: ["MongoDB", "Express", "React", "Node"],
    date: "Nov 2024 – May 2025",
  },
  // …other projects…
];
const textLogo = "";
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
