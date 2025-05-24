// src/pages/About.jsx
import { AboutPage } from "../assets/assets.js";
import { useState } from "react";

const { authorProfile, authorDescription, getInTouchUrl, authorName, profileImgTagLine } = AboutPage;

const About = () => {
const [loading, setLoading] = useState(true);

return (
  <section id="About" className="bg-mainColor text-white p-8 rounded-lg flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2">
      <h1 className="text-3xl mb-4">Hello! I’m <span className="text-[#fedf89]">{authorName}</span>, a Full-Stack Developer and recent graduate of the University of North Carolina at Charlotte – Software Engineering Bootcamp (May 2025). 
      After 17 years in the automotive parts business, I’ve honed the ability to think quickly on my feet and deliver under pressure—skills I now bring to building elegant, reliable software. I fell in love with coding as a new challenge, combining my lifelong passion for computers and hands-on building with professional software engineering. I’m proficient in HTML, CSS, JavaScript (React & Node.js), Python, and modern backend systems. My goal is always the same: deliver polished, high-performance applications that “just work,” delight users, and stand up to real-world demands.
      When I’m not writing code, you’ll likely find me assembling custom PCs or diving into the latest automotive tech. Ready to build something great together?</h1>
      <p className="mb-4 leading-relaxed">{authorDescription}</p>
      <a
        href={getInTouchUrl}
        className="inline-block bg-white text-textColor px-4 py-2 rounded-full font-semibold"
      >
        Get In Touch
      </a>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={authorProfile}
          alt={authorName}
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover ${loading ? "skeleton" : ""}`}
        />
        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          {profileImgTagLine}
        </div>
      </div>
    </div>
  </section>
);
};

export default About;
