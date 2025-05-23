// src/components/Footer.jsx
import {textLogo, footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ setActiveElem }) => (
  <footer className="bg-mainColor text-white flex flex-col md:flex-row justify-between items-center p-5 gap-4">
    <div>
      {(
        <a
          href={`#${navElements[0]}`}
          onClick={() => setActiveElem(navElements[0])}
          className="text-2xl font-semibold"
        >
          {textLogo}
        </a>
      )}
    </div>
    <div className="flex gap-4">
      {footerIcons.map(({ name, component: Icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          className="hover:text-gray-300"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
