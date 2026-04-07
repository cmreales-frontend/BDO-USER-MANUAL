import React from "react";
import generateSettlementPage from "../assets/generate_settlement_page.png";

const GenerateSettlementPage = () => {
 
  return (
    <section className="content-section">
      <div className="subsection-title">Generate Settlement</div>

      <p className="content-text" style={{ marginTop: "5px" }}>
        <i>Generate Settlement</i> manages all generate settlement files uploaded per merchant.
      </p>


        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={generateSettlementPage} alt="Generate Settlement Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Generate Settlement Page</div>  
          </div>
    </section>
  );
};

export default GenerateSettlementPage;