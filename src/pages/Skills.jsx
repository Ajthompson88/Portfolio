// src/components/Skills.jsx
import { skillsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";

const Skills = () => (
  <section id="Skills" className={containerStyle}>
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skillsPage.map((Skill, idx) => (
        <Skill key={Skill.name || idx} className="w-8 h-8" />
      ))}
    </div>
  </section>
);

export default Skills;
