import React from "react";
import { useState } from "react";
import newUploadRawBillingFilePage from "../assets/new_upload_raw_billing_file_page.png";
import newUploadRawBillingFilePage1 from "../assets/new_upload_raw_billing_file_summary_pop_up.png";
import newUploadRawBillingFilePage2 from "../assets/new_upload_raw_billing_file_summary_pop_up1.png";

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

const NewUploadRawBillingFile = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isPartialOpen, setIsPartialOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection-title">New Upload - Raw Billing File</div>

      <p className="content-text" style={{ marginTop: "5px" }}>
        <i>New Upload - Raw Billing File</i> handles the uploading of raw billing files whether it is for immediate or scheduled posting. Only users with User role type can have the privilege in accessing this module.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={newUploadRawBillingFilePage} alt="New Upload Raw Billing File Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New Upload - Raw Billing File Page</div>
      </div>

      <div style={accordionContainerStyle}>

        {/* How to Upload Raw Billing File */}
        <div>
          <div style={accordionHeaderStyle(isUploadOpen)} onClick={() => setIsUploadOpen(!isUploadOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Upload Raw Billing File:</span>
            <span style={chevronStyle(isUploadOpen)}>&#8964;</span>
          </div>
          {isUploadOpen && (
            <div style={accordionBodyStyle}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  In Billing File Processing sub menu, click the <u><b>New Upload - Raw Billing File</b></u>. This redirects to New Upload - Raw Billing File page.
                </li>
                <li>
                  Click the{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Select File</button>{' '}
                  to select the file to upload and click the{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
                  button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file. Click{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                  to continue and{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                  if otherwise.
                </li>
                <li>
                  A transaction receipt is displayed signifying that the transaction is available for uploading.
                </li>
              </ol>

              <br/>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={newUploadRawBillingFilePage1} alt="New Upload - Raw Billing File Summary Pop-up" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New Upload - Raw Billing File Summary Pop-up</div>
              </div>

              <br/>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={newUploadRawBillingFilePage2} alt="New Upload - Raw Billing File Summary Pop-up" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New Upload - Raw Billing File Summary Pop-up</div>
              </div>
            </div>
          )}
        </div>

        {/* How to Upload Billing File Partially */}
        <div>
          <div style={{ ...accordionHeaderStyle(isPartialOpen), borderBottom: isPartialOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsPartialOpen(!isPartialOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Upload Billing File Partially:</span>
            <span style={chevronStyle(isPartialOpen)}>&#8964;</span>
          </div>
          {isPartialOpen && (
            <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u> page. Click{' '}
                  <i className="fas fa-download"></i>{' '}
                  button, this redirects you to Manage Scheduled Billing File.
                </li>
                <li>
                  Toggle{' '}
                  <button style={{ backgroundColor: '#d9d7ce', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Append</button>{' '}
                  button if the partial file is for append or toggle{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Overwrite</button>{' '}
                  if the partial file is to overwrite.
                </li>
                <li>
                  Click the{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Select File</button>{' '}
                  to select the file to upload and click the{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Upload</button>{' '}
                  button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file. Click{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                  to continue and{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                  if otherwise.
                </li>
                <li>
                  A transaction receipt is displayed signifying that the transaction is available for uploading at the Scheduled Billing File.
                </li>
              </ol>
              <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
                <b>Note:</b> When uploading billing file partially, make sure that billing filenames are the same.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default NewUploadRawBillingFile;