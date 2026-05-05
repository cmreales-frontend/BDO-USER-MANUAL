import React from "react";
import { useState } from "react";
import downloadDialogBox from "../assets/download_dialog_box1.png";
import settlementReportPage from "../assets/settlement_report_page.png";

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

const SettlementsPage = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection-title">Settlements</div>

      <p className="content-text" style={{ marginTop: '5px' }}>
        <i>Settlements</i> manage the merchant's unsettled billing file zip reports download. All role types can have the privilege in accessing this module.
      </p>
      <p className="content-text" style={{ marginTop: '5px' }}>
        The Unsettled Transaction tables show the unsettled transaction report of each billing file that is ready for download. This is use for manual resettlement. Includes the extracted unsettled transaction file and the unsettled transaction summary.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={settlementReportPage} alt="Settlement Report Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Settlement Report Page</div>
      </div>

      <div style={accordionContainerStyle}>

        
        <div>
          <div style={{ ...accordionHeaderStyle(isDownloadOpen), borderBottom: isDownloadOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDownloadOpen(!isDownloadOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Download Unsettled Reports:</span>
            <span style={chevronStyle(isDownloadOpen)}>&#8964;</span>
          </div>
          {isDownloadOpen && (
            <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
              <ol style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '1px' }}>
                  In <strong>Reports &gt;&gt; Settlement Report</strong> page, click{' '}
                  <i className="fas fa-download"></i>{' '}
                  button on the lower part of the form (see <strong>Figure 4.70</strong>).
                </li>
                <li style={{ marginBottom: '1px' }}>
                  After clicking the button, a download dialog box is displayed. Click{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>OK</button>{' '}
                  to open/save or{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Cancel</button>{' '}
                  if otherwise. See Appendix D for generated Extracted Unsettled Report sample.
                </li>
              </ol>

              <br/>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={downloadDialogBox} alt="Download Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Download Dialog Box</div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SettlementsPage;