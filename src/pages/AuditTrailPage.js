import React from "react";
import auditTrailFormImage from "../assets/audit_trail_form.png";
import auditTrailFormImage1 from "../assets/audit_trail_form1.png";
import downloadDialogBoxImage from "../assets/download_dialog_box.png";

const AuditTrailPage = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>4.10.1 AUDIT TRAIL</div>

      <p className="content-text">
        Audit Trail Report is timestamps of records of user's activities. The audit trail report shows the module accessed by the user, the description, old value, new value for updated records, and remarks of each of the activities.
      </p>
      <p className="content-text">
        This is where the systems administrator user can download the audit trail report. To navigate this page, go to <strong>Reports &gt;&gt; Audit Trails</strong>.
      </p>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.64: Audit Trail Form</div>
      <img 
        src={auditTrailFormImage} 
        alt="Audit Trail Form" 
        style={{ width: "100%", marginBottom: "20px" }} 
      />

       <div className="content-text" style={{ marginLeft: '20px' }}>
        <h4>How to download Audit Trail Report:</h4>
        <ol style={{ marginLeft: '20px' }}>
          <li>
            Go to <strong>Reports &gt;&gt; Audit Trails</strong>. This redirects to the Audit Trail page (see <i>Figure 4.65</i>).
          </li>
          <li>
            Supply fields and then, click{' '}
            <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
            button to submit search parameters and wait for the result to show in the audit trail records.
          </li>
          <li>
            At the audit trail records pane, click{' '}
            <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Download</button>{' '}
            button.
          </li>
          <li>
            A download dialog box will show (see <i>Figure 4.66</i>). Click{' '}
            <button style={{ backgroundColor: '#c6c5be', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>OK</button>{' '}
            to open/save or{' '}
            <button style={{ backgroundColor: '#c6c5be', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Cancel</button>{' '}
            if otherwise. See <i>Appendix D</i> for a generated Audit Trails Report sample.
          </li>
        </ol>
        <p><strong>Note:</strong> Only users with System Administrator privileges can access the audit trail.</p>
      </div>

       <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.66: Audit Trail Form</div>
      <img 
        src={auditTrailFormImage1} 
        alt="Audit Trail Form 1" 
        style={{ width: "100%", marginBottom: "20px", border: '1px solid #ccc', padding: '5px', borderRadius: '4px' }} 
      />

       <table className="command-syntax-table" style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Field Name:</td>
                <td><strong>Start Date</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the start date of transactions to retrieve.</td>
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
                <td>Refers to the start time of transactions to retrieve</td>
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
                <td>Refers to the end date of transactions to retrieve.</td>
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
                <td>Refers to the end time of transactions to retrieve.</td>
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
                <td><strong>Username</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the username of the user the transactions belong to.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Minimum Length:</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>32</td>
              </tr>
              <tr>
                <td>Dependency:</td>
                <td>Required field</td>
              </tr>
            </tbody>
          </table>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.66: Download Dialog Box</div>
      <img 
        src={downloadDialogBoxImage} 
        alt="Download Dialog Box" 
        style={{ width: "50%", marginBottom: "20px", border: '1px solid #ccc', padding: '5px', borderRadius: '4px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
      />    

    </div>
  );
};

export default AuditTrailPage;