// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Contact from "../pages/Contact";
import Loading from "../../Assets/loading.png"; // Loading image for the portfolio
import Portrait from "../../Assets/portrait.jpeg"; // Profile picture for the portfolio
// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "x", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: "https://x.com/bigblock557?s=21", // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "https://www.linkedin.com/in/andrew-thompson-442477aa/", // Replace with your actual LinkedIn URL
  },
  {
    name: "facebook",
    component: FaFacebookSquare, // Facebook icon
    link: "https://www.facebook.com/andrew.thompson.58726",
  },
  {
    name: "instagram",
    component: FaInstagramSquare, // Instagram icon
    link: "https://www.instagram.com/aj.thompson8888/",
  },
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "https://github.com/Ajthompson88",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Andrew Thompson"; // Replace with your name or brand name
const imgLogo= ""; // Use the imported image

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: Portrait, // Your profile image link
  authorDescription:
    "Hello! I’m Andrew Thompson, an Aspiring Full‑Stack Developer eager to craft intuitive, high‑performance web applications. With hands‑on training at the NASCAR Technical Institute and recent graduation from UNC Charlotte’s Software Development Bootcamp (May 2025), I’ve honed skills in HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, MongoDB, PostgreSQL, and CI/CD pipelines. Honored as NTI Student of the Course for Professional Service Writing and recipient of the NTI Crew Chief Award, I thrive under pressure and excel in collaborative teams. My portfolio features six single‑page applications—like GridLock (a React‑based tic‑tac‑toe game), a Kanban board, a book search app, a weather dashboard, and more—each live‑deployed for your review. These projects highlight my ability to architect scalable front‑end components, integrate robust back‑end services, and implement solid form validation for seamless user experiences. I’m passionate about writing clean, maintainable code and continuously refining my craft through collaboration and feedback. Explore my work samples, and let’s connect to discuss how I can bring value to your next project!", 
  getInTouchUrl: Contact , // URL for your contact or form page
  authorName: "Andrew Thompson", // Replace with your name
  profileImgTagLine: "Aspiring Software Developer", // Your tagline or job title
  authorContactMail: "aj.thompson8888@gmail.com", // Your email address
  authorContactNumber: "000-000-0000", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2007, // Year of graduation
    degreeType: "High School", // Type of degree
    institution: "Eau Gallie High School", // Institution name
    institutionUrl: "https://www.brevardschools.org/o/eghs", // Institution website link (optional)
  },
  {
    graduationYear: 2012, // Year of graduation
    degreeType: "Associates in Arts", // Degree type
    institution: "Brevard Community College (Now Eastern Florida State College)", // Institution name
    institutionUrl: "https://www.easternflorida.edu/", // Institution website link (optional)
  },
  {
    graduationYear: "Not Complete as of 2015", // Year of graduation
    degreeType: "Bachelor's of Science Mechanical Engineering", // Degree type
    institution: "University of North Carolina at Charlotte", // Institution name
    institutionUrl: "https://www.charlotte.edu/", // Institution website link (optional)
  },
  // Add more educational qualifications if needed
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: Loading, // Certificate image URL
    title: "", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  FaJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  RiTailwindCssFill,
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "Book Search", // Project name
    projectDescription: "Search for book and save them to a list if you want to read them or change that list to if you have read them", // Project description
    projectURL: "https://booksearch-56mo.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "November 2024 - May 2025", // Project duration
  },
  {
    projectName: "Gridlock", // Project name
    projectDescription: "Soon to come", // Project description
    projectURL: "https://gridlock-75x0.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/Jimmykotter/GridLock", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "April 2025 - May 2025", // Project duration
  },
  {
    projectName: "Book Search", // Project name
    projectDescription: "Search for book and save them to a list if you want to read them or change that list to if you have read them", // Project description
    projectURL: "https://booksearch-56mo.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "November 2024 - May 2025", // Project duration
  },
  {
    projectName: "Gridlock", // Project name
    projectDescription: "Soon to come", // Project description
    projectURL: "https://gridlock-75x0.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/Jimmykotter/GridLock", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "April 2025 - May 2025", // Project duration
  },
  {
    projectName: "Book Search", // Project name
    projectDescription: "Search for book and save them to a list if you want to read them or change that list to if you have read them", // Project description
    projectURL: "https://booksearch-56mo.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "November 2024 - May 2025", // Project duration
  },
  {
    projectName: "Gridlock", // Project name
    projectDescription: "Soon to come", // Project description
    projectURL: "https://gridlock-75x0.onrender.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/Jimmykotter/GridLock", // Optional: GitHub repository link
    tags: "MongoDB, Express.js, React.js, and Node.js", // Tech stack used in the project
    date: "April 2025 - May 2025", // Project duration
  },
  
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
  Loading,
  Portrait,
};