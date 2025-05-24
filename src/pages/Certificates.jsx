// src/pages/Certificates.jsx
import { Certificate, PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { CertificatesPage } from "../assets/assets.js";

const Certificates = () => (
  <section id="Certificates" className={containerStyle}>
    <PageTitle>Certificates</PageTitle>
    <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
    <div className="flex gap-4 overflow-x-auto py-4">
      {CertificatesPage.map(({ img, title, description, issuedBy, credentialURL }) => (
        <Certificate
          key={credentialURL}
          img={img}
          title={title}
          description={description}
          issuedBy={issuedBy}
          credentialURL={credentialURL}
        />
      ))}
    </div>
  </section>
);

export default Certificates;
