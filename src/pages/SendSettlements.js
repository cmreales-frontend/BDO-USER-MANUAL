import React from "react";
import { useState } from "react";
import sendSettlementPage from "../assets/send_settlement_page.png";
import sendSettlementPage1 from "../assets/send_settlement_page1.png";

const accordionContainerStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  marginTop: '16px',
};

const accordionHeaderStyle = (isOpen) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 18px',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: isOpen ? '#f5f5f5' : '#ffffff',
  borderBottom: '1px solid #ddd',
});

const accordionBodyStyle = {
  backgroundColor: '#f9f9f9',
  padding: '14px 18px 18px 18px',
  borderBottom: '1px solid #ddd',
};

const chevronStyle = (isOpen) => ({
  fontSize: '13px',
  color: '#888',
  display: 'inline-block',
  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.2s',
});

const SendSettlementsPage = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

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
          <img src={sendSettlementPage} alt="Send Settlement Page" style={{ width: "100%", height: "auto", display: "block" }} />
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
          <img src={sendSettlementPage1} alt="Send Settlement Page 2" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Send Settlement Page</div>
      </div>

      <div style={accordionContainerStyle}>

       
        <div>
          <div style={{ ...accordionHeaderStyle(isUploadOpen), borderBottom: isUploadOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsUploadOpen(!isUploadOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Upload File for Manual Settlement:</span>
            <span style={chevronStyle(isUploadOpen)}>&#8964;</span>
          </div>
          {isUploadOpen && (
            <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
              <ol style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '1px' }}>
                  In the <strong>Send Settlement</strong> page, click the{' '}
                  <button style={{
                    backgroundColor: "#ffc107",
                    color: "#000",
                    border: "1px solid #ccc",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}>Select file</button>{' '}
                  button to select the extracted unsettled file for manual resettlement.
                </li>
                <li style={{ marginBottom: '1px' }}>
                  A transaction receipt is displayed signifying that the transaction is already posted.
                </li>
              </ol>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SendSettlementsPage;