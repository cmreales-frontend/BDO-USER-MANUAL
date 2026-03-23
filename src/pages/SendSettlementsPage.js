import React from "react";
import sendSettlementPage from "../assets/send_settlement_page.png";
import sendSettlementPage1 from "../assets/send_settlement_page1.png";

const SendSettlementsPage = () => {
  const imgWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.10.4 SEND SETTLEMENTS
      </div>

      <p className="content-text" style={{ marginTop: "16px" }}>
        This is where the Extracted Unsettled file is uploaded for manual settlement.
      </p>

    
      <div className="section-title" style={{ fontSize: "16px", marginTop: "10px", marginBottom: "5px", textAlign: "center" }}>
        Figure 4.72: Send Settlement Page
      </div>
      <div style={imgWrapper}>
        <img src={sendSettlementPage} alt="Send Settlement Page" style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "100%" }}/>
      </div>

       <img
          src={sendSettlementPage1} alt="Send Settlement Page" style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "100%" }}/>
      
      <div style={{ marginTop: "20px" }}>
        <h4>How to Upload File for Manual Settlement:</h4>
        <ol style={{ paddingLeft: "40px" }}>
          <li style={{ marginBottom: "1px" }}>
            In the <strong>Send Settlement</strong> page, click the <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Select file</button> button to select the extracted unsettled file for manual resettlement.
          </li>
          <li style={{ marginBottom: "1px" }}>
            A transaction receipt is displayed signifying that the transaction is already posted <i>(see Figure 4.19).</i>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default SendSettlementsPage;