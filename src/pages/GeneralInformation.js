import React from 'react';

const GeneralInformation = () => {
  return (
    <div className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>1. INTRODUCTION</div>

      <div className="subsection">
        <div className="subsection-title">1.1 GENERAL INFORMATION</div>
        <p className="content-text">
          BRPS is a web-based system that processes batch BRPS billing files, scheduled billing files,
          single transactions, and scheduled single transactions coming from BRPS merchants to obtain
          approval codes from the issuers (whether the issuer is on-us or off-us issuers).
        </p>
      </div>

    </div>
  );
};

export default GeneralInformation;