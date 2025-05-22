import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CertificatesPage } from "../../assets/assets.js";

const Certificate = ({ isFlexShrink }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {CertificatesPage.map((certificate, index) => (
        <div
          key={index}
          className={`${
            isFlexShrink && "w-[300px] flex-shrink-0"
          } h-full bg-mainColor text-white flex flex-col gap-4 rounded-lg p-3 mb-4 border border-zinc-200 shadow overflow-hidden`}
        >
          <img
            className={`aspect-video rounded-lg select-none ${
              certificate.img ? "skeleton" : ""
            }`}
            src={certificate.img}
            alt="Credential-img"
          />
          <strong className="text-xl text-[#fedf89]">{certificate.title}</strong>
          <div className="line-clamp-6">{certificate.description}</div>
          <div className="flex justify-between">
            <div
              className="font-bold cursor-pointer"
              title={`issued by ${certificate.issuedBy}`}
            >
              {certificate.issuedBy}
            </div>
            <Link
              to={certificate.credentialURL}
              className="flex items-center gap-1 hover:text-white/65 transition-colors ease-linear font-semibold"
              title="View Credential"
            >
              <IoEyeSharp className="w-6 h-6" />
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
