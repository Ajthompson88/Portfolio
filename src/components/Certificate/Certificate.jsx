// src/components/Certificate.jsx
import { IoEyeSharp } from "react-icons/io5";

const Certificate = ({ img, title, description, issuedBy, credentialURL }) => (
  <div className="flex-shrink-0 w-64 bg-mainColor text-white p-4 rounded shadow">
    <img src={img} alt={title} className="w-full rounded mb-2" />
    <strong className="text-lg text-[#fedf89]">{title}</strong>
    <p className="text-sm line-clamp-4 my-2">{description}</p>
    <div className="flex justify-between items-center">
      <span title={`Issued by ${issuedBy}`} className="font-medium">
        {issuedBy}
      </span>
      <a
        href={credentialURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-gray-300"
      >
        <IoEyeSharp className="w-5 h-5" /> View
      </a>
    </div>
  </div>
);

export default Certificate;
