import React from "react";
import { useState } from "react";
import billingFileReportPage from "../assets/billing_file_report_page.png";

const popupOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  cursor: 'pointer'
};

const popupBoxStyle = {
  position: 'fixed',
  top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  zIndex: 1000,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxHeight: '80vh',
  overflowY: 'auto',
  width: 'fit-content',
  minWidth: '300px',
  maxWidth: '500px',
};

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

const BillingFileReports = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection">
        <div className="subsection-title">Billing File Reports</div>

        <p className="content-text" style={{ marginTop: "5px" }}>
          <i>Billing File Reports</i> manages the summary of all billing files uploaded per merchant. The selected billing file reports can be downloaded to excel. The reports shows status, the total of the approved and declined transaction, the processor and the approver of each of the billing file.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={billingFileReportPage} alt="Billing File Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>Billing File Report Page</div>
        </div>

        <p>
          For more information, click on{' '}
          <button type="button" onClick={() => setIsManagePopupVisible(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'blue', textDecoration: 'underline', font: 'inherit' }}> Field Details
          </button>.
        </p>

        {isManagePopupVisible && (
          <>
            <div style={popupOverlayStyle} onClick={() => setIsManagePopupVisible(false)} />
            <div style={popupBoxStyle}>
              <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                <thead>
                  <tr><th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>Start Date</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Refers to the start date of billing files to retrieve based on specified merchant.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Date</td>
                  </tr>
                  <tr>
                    <td>Dependency:</td>
                    <td>Required field</td>
                  </tr>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>Start Time</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Refers to the start time of billing files to retrieve based on specified merchant.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Time</td>
                  </tr>
                  <tr>
                    <td>Dependency:</td>
                    <td>Required field</td>
                  </tr>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>End Date</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Refers to the end date of billing files to retrieve based on specified merchant.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Date</td>
                  </tr>
                  <tr>
                    <td>Dependency:</td>
                    <td>Required field</td>
                  </tr>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>End Time</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Refers to the end time of billing files to retrieve based on specified merchant.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Time</td>
                  </tr>
                  <tr>
                    <td>Dependency:</td>
                    <td>Required field</td>
                  </tr>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>Filename</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Refers to the filename of billing file.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Alphanumeric</td>
                  </tr>
                  <tr>
                    <td>Maximum Length:</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        <div style={accordionContainerStyle}>

          <div>
            <div style={{ ...accordionHeaderStyle(isDownloadOpen), borderBottom: isDownloadOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDownloadOpen(!isDownloadOpen)}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Download Billing File Report:</span>
              <span style={chevronStyle(isDownloadOpen)}>&#8964;</span>
            </div>
            {isDownloadOpen && (
              <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                <ol style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '1px' }}>
                    In <u><strong>Billing File Reports</strong></u> page, click the{' '}
                    <button style={{ backgroundColor: "#ffc107", color: "#000", border: "1px solid #ccc", padding: "2px 6px", borderRadius: "4px", cursor: "pointer" }}>Export to Excel</button>{' '}
                    button.
                  </li>
                  <li style={{ marginBottom: '1px' }}>
                    Then, a download dialog box is displayed. Click{' '}
                    <button style={{ backgroundColor: "#ccc", color: "#000", border: "1px solid #999", padding: "2px 6px", borderRadius: "4px", cursor: "pointer" }}>OK</button>{' '}
                    to open/save or{' '}
                    <button style={{ backgroundColor: "#ccc", color: "#000", border: "1px solid #999", padding: "2px 6px", borderRadius: "4px", cursor: "pointer" }}>Cancel</button>{' '}
                    if otherwise. See <i>Appendix D</i> for a generated Billing File Report sample.
                  </li>
                </ol>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BillingFileReports;