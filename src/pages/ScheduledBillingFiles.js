import React from "react";
import scheduledBillingPageImage from "../assets/scheduled_billing_page.png";
import scheduledBillingPageImage1 from "../assets/scheduled_billing_page1.png";
import futureDatedBillingFileDetailsPage from "../assets/future_dated_billing_file_details_page.png";
import futureDatedBillingFileMultipleDelete from "../assets/future_dated_billing_file_multiple_delete.png";

const ScheduledBillingFiles = () => {
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.12.4 SCHEDULED BILLING FILES
      </div>
      <p className="content-text" style={{ marginTop: "10px" }}>
        This page contains the list of scheduled billing files. This page allows the user to cancel scheduled billing files before the start date of processing.
      </p>
      <p className="content-text" style={{ marginTop: "16px" }}>
        To navigate this, go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u>.
      </p>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '5px', textAlign: 'center' }}>
        Figure 4: Scheduled Billing Page
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={scheduledBillingPageImage} alt="Scheduled Billing Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Submit Partial Billing File for Approval:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u>. This redirects to Scheduled Billing Files page (see <i>Figure 4.88</i>).
        </li>
        <li>
          From the <u><b>Future Dated Billing files</b></u> table below, click the 
          <i className="fas fa-download" style={{ fontSize: '16px', color: '#000', margin: '0 8px' }}></i> 
          button to check the available raw partial billing file uploaded (see <i>Figure 4.89</i>).
        </li>
        <li>
          Click the 
          <i className="fas fa-download" style={{ fontSize: '16px', color: '#000', margin: '0 8px' }}></i> 
          button beside the partial billing file. A confirmation dialog box is displayed that summarizes the raw billing file (see <i>Figure 4.84</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
           A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.85</i>).
         </li>
         
        <i><p><strong>Note:</strong> When uploading billing file for immediate posting, start date should be the current date and frequency count is 0. However, when uploading billing file for scheduled/recurring posting, start date should be greater than the current date and frequency count should be greater 0. All approved scheduled billing file will be shown first on the Future Dated Billing File table under the Scheduled Billing Files.</p></i>
      </ol>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Scheduled Billing Page
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={scheduledBillingPageImage1} alt="Scheduled Billing Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Update the Details of Scheduled Billing Files:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u> page. Click 
          <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000', margin: '0 8px' }}></i>
          button to select the scheduled billing file to update. This redirects you to Scheduled Billing File page (see <i>Figure 4.90</i>).
        </li>
        <li>
          Update the field/s and click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button> button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>
      <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
        <b>Note:</b> Future dated billing files can only be updated before the start date of processing.
      </p>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Future Dated Billing File Details Page
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedBillingFileDetailsPage} alt="Future Dated Billing File Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Delete Billing File Individually:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u> page. Click 
          <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000', margin: '0 8px' }}></i> 
          button to select the scheduled billing file to delete. This redirects you to Future Dated Billing File page (see <i>Figure 4.90</i>).
        </li>
        <li>
          Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button. After clicking the <b>Delete</b> button, a confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>

      <h3>How to Delete Multiple Billing Files:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Billing File Processing &gt;&gt; Scheduled Billing Files</b></u> page. Select from the list by clicking a row scheduled billing file (see <i>Figure 4.91</i>).
        </li>
        <li>
          Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button. After clicking the button, a confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 5: Future Dated Billing File Multiple Delete
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedBillingFileMultipleDelete} alt="Future Dated Billing File Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

    </section>
  );
};

export default ScheduledBillingFiles;