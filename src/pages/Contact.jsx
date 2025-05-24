// src/pages/Contact.jsx
import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import contactLogo from "../assets/contact_image.webp";
const Contact = () => {
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <section id="Contact" className={containerStyle}>
      <PageTitle>Contact</PageTitle>
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="flex flex-col md:flex-row bg-mainColor rounded overflow-hidden">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img
            src= { contactLogo }
            alt="Contact illustration"
            onLoad={() => setImgLoading(false)}
            onError={() => setImgLoading(false)} // Fallback for failed image loading
            className={`${imgLoading ? "skeleton w-96 h-80" : ""}`}
          />
        </div>
        <div className="p-8 flex flex-col items-start gap-4 text-white">
          <img
            src={AboutPage.authorProfile}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-white"
          />
          <h1 className="text-3xl font-bold text-[#fedf89]">Contact Me</h1>
          <a
            href={`mailto:${AboutPage.authorContactMail}`}
            className="flex items-center gap-2 hover:underline"
          >
            <MdEmail /> {AboutPage.authorContactMail}
          </a>
          <a
            href={`tel:${AboutPage.authorContactNumber}`}
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt /> {AboutPage.authorContactNumber}
          </a>
          <div className="flex gap-3 mt-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
