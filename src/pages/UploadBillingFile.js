import React from "react";
import newUploadRawBillingFilePage from "../assets/manage_billing_file_page.png";
import manageUploadBillingFile from "../assets/manage_upload_billing_file.png";
import manageUploadBillingFileSummaryAndConfirmationDialogBox from "../assets/manage_upload_billing_file_summary_and_confirmation_dialog_box.png";
import manageUploadBillingFileReceipt from "../assets/manage_upload_billing_file_receipt.png";
import receiptForDeleteBillingFile from "../assets/receipt_for_delete_billing_file.png";

const UploadBillingFile = () => {
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.12.2 UPLOAD BILLING FILE
      </div>
      <p className="content-text" style={{ marginTop: "10px" }}>
        <i>Upload Billing File</i> handles the uploading of billing files whether it is for immediate or scheduled posting. Only users with User role type can have the privilege in accessing this module.
      </p>
     

      <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '5px', textAlign: 'center' }}>
        Figure 4: Manage Billing File Page
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={newUploadRawBillingFilePage} alt="Manage Billing File Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Submit Raw Billing File for Approval:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Upload Billing Files</b></u>. This redirects to Upload Billing Files page (see <i>Figure 4.82</i>).
        </li>
        <li>
          From the <u><b>Preprocessed Files</b></u> table, select and view the file to be submitted. Click the 
          <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000', margin: '0 8px' }}></i> 
          of the selected file to submit, this will redirect to the <u><b>Manage Billing File Upload</b></u> page (see <i>Figure 4.83</i>).
        </li>
        <li>
          Click the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button> button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file (see <i>Figure 4.84</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.85</i>).
        </li>
      </ol>

      <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
        <b>Note:</b> When uploading billing file for immediate posting, start date should be the current date and frequency count is 0. However, when uploading billing file for scheduled/recurring posting, start date should be greater than the current date and frequency count should be greater than 0. All approved scheduled billing file will be shown first on the Future Dated Billing File table under the Scheduled Billing Files.
      </p>


      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Manage Upload Billing File
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={manageUploadBillingFile} alt="Manage Upload Billing File" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={manageUploadBillingFile} alt="Manage Upload Billing File" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Manage Upload Billing File Summary and Confirmation Dialog Box
      </div>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={manageUploadBillingFileSummaryAndConfirmationDialogBox} alt="Manage Upload Billing File Summary and Confirmation Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
      </div>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Manage Upload Billing File Receipt
      </div>

       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={manageUploadBillingFileReceipt} alt="Manage Upload Billing File Receipt" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
      </div>

      <h3>How to Delete a Preprocessed File/s:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Select one or more from the <b>Preprocessed</b> table in <u><b>Manage Billing File</b></u> page.
        </li>
        <li>
          Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button to submit the transaction.
        </li>
        <li>
          A transaction receipt is displayed that the transaction is posted (see <i>Figure 4.86</i>).
        </li>
      </ol>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '5px', textAlign: 'center' }}>
        Figure 4: Receipt for Delete Billing File
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={receiptForDeleteBillingFile} alt="Receipt for Delete Billing File" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
      </div>

      <h3>How to Download Rejected Files:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Select the Reject file from the <u><b>Error Files</b></u> table in <u><b>Manage Billing File</b></u> page (see <i>Figure 4.82</i>).
        </li>
        <li>
          Click <i className="fas fa-download" style={{ fontSize: '16px', color: '#000' }}></i> button to download the rejected file.
        </li>
        <li>
          See the download folder to view the file.
        </li>
      </ol>

      <h3>How to Download Error Files:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Select the Error file from the <u><b>Error Files</b></u> table in <u><b>Manage Billing File</b></u> page (see <i>Figure 4.82</i>).
        </li>
        <li>
          Click <i className="fas fa-download" style={{ fontSize: '16px', color: '#000' }}></i> button to download the rejected file.
        </li>
        <li>
          See the download folder to view the file.
        </li>
      </ol>

    </section>
  );
};

export default UploadBillingFile;