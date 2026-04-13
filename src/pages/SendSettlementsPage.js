import React from "react";
import sendSettlementPage from "../assets/send_settlement_page.png";
import sendSettlementPage1 from "../assets/send_settlement_page1.png";

const SendSettlementsPage = () => {

  return (
    <section className="content-section">
      <div className="subsection-title">Send Settlements</div>

      <p className="content-text" style={{ marginTop: "10px" }}>
        This is where the Extracted Unsettled file is uploaded for manual settlement.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <div style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "10px",
          display: "inline-block",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#fff"
        }}>
          <img
            src={sendSettlementPage}
            alt="Send Settlement Page"
            style={{
              width: "125%",
              height: "auto",
              display: "block"
            }}
          />
        </div>

        <div style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "10px",
          display: "inline-block",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#fff"
        }}>
          <img
            src={sendSettlementPage1}
            alt="Send Settlement Page 2"
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>

        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Send Settlement Page</div>
      </div>

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