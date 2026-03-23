import React from "react";
import generateSettlementPage from "../assets/generate_settlement_page.png";

const GenerateSettlementPage = () => {
  const imgWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.10.5 GENERATE SETTLEMENT
      </div>

      <p className="content-text" style={{ marginTop: "5px" }}>
        <i>Generate Settlement</i> manages all generate settlement files uploaded per merchant.
      </p>

     
       <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '5px', textAlign: 'center' }}>Figure 4.73: Generate Settlement Page</div>
          <div style={imgWrapper}>
            <img src={generateSettlementPage} alt="Generate Settlement Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>
    </section>
  );
};

export default GenerateSettlementPage;