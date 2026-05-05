import React from "react";
import { useState } from "react";
import newUploadRawBillingFilePage from "../assets/manage_billing_file_page.png";
import manageUploadBillingFile from "../assets/manage_upload_billing_file.png";
import manageUploadBillingFileSummaryAndConfirmationDialogBox from "../assets/manage_upload_billing_file_summary_and_confirmation_dialog_box.png";
import manageUploadBillingFileReceipt from "../assets/manage_upload_billing_file_receipt.png";
import receiptForDeleteBillingFile from "../assets/receipt_for_delete_billing_file.png";

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

const UploadBillingFile = () => {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDownloadRejectedOpen, setIsDownloadRejectedOpen] = useState(false);
  const [isDownloadErrorOpen, setIsDownloadErrorOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection-title">Upload Billing File</div>

      <p className="content-text" style={{ marginTop: "5px" }}>
        <i>Upload Billing File</i> handles the uploading of billing files whether it is for immediate or scheduled posting. Only users with User role type can have the privilege in accessing this module.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={newUploadRawBillingFilePage} alt="Manage Billing File Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Billing File Page</div>
      </div>

      <div style={accordionContainerStyle}>

        <div>
          <div style={accordionHeaderStyle(isSubmitOpen)} onClick={() => setIsSubmitOpen(!isSubmitOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Submit Raw Billing File for Approval:</span>
            <span style={chevronStyle(isSubmitOpen)}>&#8964;</span>
          </div>
          {isSubmitOpen && (
            <div style={accordionBodyStyle}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  Go to <u><b>Upload Billing Files</b></u>. This redirects to Upload Billing Files page.
                </li>
                <li>
                  From the <u><b>Preprocessed Files</b></u> table, select and view the file to be submitted. Click the{' '}
                  <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000', margin: '0 4px' }}></i>{' '}
                  of the selected file to submit, this will redirect to the <u><b>Manage Billing File Upload</b></u> page.
                </li>
                <li>
                  Click the{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
                  button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file. Click{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                  to continue and{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                  if otherwise.
                </li>
                <li>
                  A transaction receipt is displayed signifying that the transaction is for approval.
                </li>
              </ol>

              <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
                <b>Note:</b> When uploading billing file for immediate posting, start date should be the current date and frequency count is 0. However, when uploading billing file for scheduled/recurring posting, start date should be greater than the current date and frequency count should be greater than 0. All approved scheduled billing file will be shown first on the Future Dated Billing File table under the Scheduled Billing Files.
              </p>

              <br/>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={manageUploadBillingFile} alt="Manage Upload Billing File" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Upload Billing File</div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={manageUploadBillingFileSummaryAndConfirmationDialogBox} alt="Manage Upload Billing File Summary and Confirmation Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Upload Billing File Summary and Confirmation Dialog Box</div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={manageUploadBillingFileReceipt} alt="Manage Upload Billing File Receipt" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Upload Billing File Receipt</div>
              </div>
            </div>
          )}
        </div>

    
        <div>
          <div style={accordionHeaderStyle(isDeleteOpen)} onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete a Preprocessed File/s:</span>
            <span style={chevronStyle(isDeleteOpen)}>&#8964;</span>
          </div>
          {isDeleteOpen && (
            <div style={accordionBodyStyle}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  Select one or more from the <b>Preprocessed</b> table in <u><b>Manage Billing File</b></u> page.
                </li>
                <li>
                  Click{' '}
                  <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                  button to submit the transaction.
                </li>
                <li>
                  A transaction receipt is displayed that the transaction is posted.
                </li>
              </ol>

              <br/>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img src={receiptForDeleteBillingFile} alt="Receipt for Delete Billing File" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Receipt for Delete Billing File</div>
              </div>
            </div>
          )}
        </div>

       
        <div>
          <div style={accordionHeaderStyle(isDownloadRejectedOpen)} onClick={() => setIsDownloadRejectedOpen(!isDownloadRejectedOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Download Rejected Files:</span>
            <span style={chevronStyle(isDownloadRejectedOpen)}>&#8964;</span>
          </div>
          {isDownloadRejectedOpen && (
            <div style={accordionBodyStyle}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  Select the Reject file from the <u><b>Error Files</b></u> table in <u><b>Manage Billing File</b></u> page.
                </li>
                <li>
                  Click <i className="fas fa-download" style={{ fontSize: '16px', color: '#000' }}></i> button to download the rejected file.
                </li>
                <li>
                  See the download folder to view the file.
                </li>
              </ol>
            </div>
          )}
        </div>

   
        <div>
          <div style={{ ...accordionHeaderStyle(isDownloadErrorOpen), borderBottom: isDownloadErrorOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDownloadErrorOpen(!isDownloadErrorOpen)}>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Download Error Files:</span>
            <span style={chevronStyle(isDownloadErrorOpen)}>&#8964;</span>
          </div>
          {isDownloadErrorOpen && (
            <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
              <ol style={{ marginLeft: '20px' }}>
                <li>
                  Select the Error file from the <u><b>Error Files</b></u> table in <u><b>Manage Billing File</b></u> page.
                </li>
                <li>
                  Click <i className="fas fa-download" style={{ fontSize: '16px', color: '#000' }}></i> button to download the rejected file.
                </li>
                <li>
                  See the download folder to view the file.
                </li>
              </ol>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default UploadBillingFile;