// src/components/Project.jsx
import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub, IoEyeSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepositoryURL,
  tags,
  date,
}) => (
  <div className="flex flex-col bg-mainColor text-white p-5 md:p-8 rounded-md border shadow">
    <FaFolderOpen className="w-6 h-6" />
    <strong className="mt-5 mb-2 text-2xl text-[#fedf89]">
      {projectName}
    </strong>
    <p className="mb-2">{projectDescription}</p>
    <div className="flex gap-2 my-4">
      {projectURL && (
        <a
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Demo"
          className="flex items-center gap-1"
        >
          <IoEyeSharp className="w-6 h-6" />
        </a>
      )}
      {githubRepositoryURL && (
        <a
          href={githubRepositoryURL}
          target="_blank"
          rel="noopener noreferrer"
          title="Source Code"
          className="flex items-center gap-1"
        >
          <IoLogoGithub className="w-6 h-6" />
        </a>
      )}
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {Array.isArray(tags)
        ? tags.map((t) => <span key={t}>{t}</span>)
        : <span>{tags}</span>}
    </div>
    <div className="text-sm text-gray-300">{date}</div>
  </div>
);

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string,
  projectURL: PropTypes.string,
  githubRepositoryURL: PropTypes.string,
  tags: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  date: PropTypes.string,
};

export default Project;
