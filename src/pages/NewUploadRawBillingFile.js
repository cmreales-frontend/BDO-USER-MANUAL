import React from "react";
import newUploadRawBillingFilePage from "../assets/new_upload_raw_billing_file_page.png";
import newUploadRawBillingFilePage1 from "../assets/new_upload_raw_billing_file_summary_pop_up.png";
import newUploadRawBillingFilePage2 from "../assets/new_upload_raw_billing_file_summary_pop_up1.png";

const NewUploadRawBillingFile = () => {
const imgWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
};
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.12.1 NEW UPLOAD – RAW BILLING FILE
      </div>
      <p className="content-text" style={{ marginTop: "10px" }}>
        <i>New Upload – Raw Billing File</i> handles the uploading of raw billing files whether it is for immediate or scheduled posting. Only users with User role type can have the privilege in accessing this module.
      </p>

       
       <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4: New Upload – Raw Billing File</div>
          <div style={imgWrapper}>
            <img src={newUploadRawBillingFilePage} alt="User Profile Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Upload Raw Billing File:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In Billing File Processing sub menu, click the <u><b>New Upload - Raw Billing File</b></u>. This redirects to New Upload - Raw Billing File page (see <i>Figure 4.79</i>).
            </li>
            <li>
              Click the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Select File</button> to select the file to upload and click the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button> button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file (see <i>Figure 4.80</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is available for uploading (see <i>Figure 4.81</i>).
            </li>
          </ol>

        <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: New Upload – Raw Billing File Summary Pop-up
        </div>
        <div style={imgWrapper}>
        <img src={newUploadRawBillingFilePage1} alt="New Upload – Raw Billing File Summary Pop-up" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
        </div>

        <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '5px', textAlign: 'center' }}>
        Figure 4: New Upload – Raw Billing File Summary Pop-up
        </div>
        <div style={imgWrapper}>
        <img src={newUploadRawBillingFilePage2} alt="New Upload – Raw Billing File Summary Pop-up" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
        </div>

        <h3>How to Upload Billing File Partially:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u> page. Click 
              <i className="fas fa-download"></i> 
              button, this redirects you to Manage Scheduled Billing File (see <i>Figure 4.79</i>).
            </li>
            <li>
              Toggle <button style={{ backgroundColor: '#d9d7ce', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Append</button> button if the partial file is for append or toggle <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Overwrite</button> if the partial file is to overwrite.
            </li>
            <li>
              Click the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Select File</button> to select the file to upload and click the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Upload</button> button to submit the transaction. A confirmation dialog box is displayed that summarizes the raw billing file (see <i>Figure 4.80</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is available for uploading at the Scheduled Billing File (see <i>Figure 4.81</i>).
            </li>
          </ol>
          <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
            <b>Note:</b> When uploading billing file partially, make sure that billing filenames are the same.
          </p>

    </section>
  );
};

export default NewUploadRawBillingFile;