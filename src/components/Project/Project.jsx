import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepositoryURL,
  tags,
  date,
}) => {
    return (
      <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow">
        <FaFolderOpen className="w-6 h-6" />
        <strong className="mt-5 mb-2 text-2xl text-[#fedf89]">
          {projectName}
        </strong>
        <div className="mb-2">{projectDescription}</div>
        <div>{tags}</div>
        <div className="flex items-center justify-between mt-10">
          <div>{date}</div>
          <div className="flex gap-2">
            {projectURL && (
              <a to={projectURL}>
                {<IoEyeSharp title="Live demo" className="w-6 h-6" />}
              </a>
            )}

            {
              <a to={githubRepositoryURL}>
                {<IoLogoGithub title="Source Code" className="w-6 h-6" />}
              </a>
            }
          </div>
        </div>
      </div>
    );
};
Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectURL: PropTypes.string,
  githubRepository: PropTypes.string,
  tags: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  date: PropTypes.string,
};

export default Project;

