// src/pages/Education.jsx
import { EducationPage } from "../assets/assets.js";
import { LuGraduationCap } from "react-icons/lu";
import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";

const Education = () => (
  <section id="Education" className={containerStyle}>
    <PageTitle>Education</PageTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {EducationPage.map(({ degreeType, graduationYear, institution, institutionUrl }) => (
        <div
          key={institution}
          className="bg-mainColor text-white p-5 rounded shadow"
        >
          <div className="text-sm">{graduationYear}</div>
          <div className="font-semibold">{degreeType}</div>
          <div className="flex items-center gap-2 mt-2">
            <LuGraduationCap className="w-6 h-6" />
            <a
              href={institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {institution}
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
