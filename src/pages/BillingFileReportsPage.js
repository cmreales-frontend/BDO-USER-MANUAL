import React from "react";
import billingFileReportPage from "../assets/billing_file_report_page.png";


const BillingFileReportsPage = () => {
  const imgWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  };

  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.10.6 BILLING FILE REPORTS
      </div>

      <p className="content-text" style={{ marginTop: "10px" }}>
        <i>Billing File Reports</i> manages the summary of all billing files uploaded per merchant. The selected billing file reports can be downloaded to excel. The reports shows status, the total of the approved and declined transaction, the processor and the approver of each of the billing file.
      </p>

       <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '5px', textAlign: 'center' }}>Figure 4.74: Billing File Reports Page</div>
          <div style={imgWrapper}>
            <img src={billingFileReportPage} alt="Billing File Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

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

        
      <div style={{ marginTop: "20px" }}>
        <h4>How to Download Billing File Report:</h4>
        <ol style={{ paddingLeft: "40px" }}>
          <li style={{ marginBottom: "1px" }}>
            In <u><strong>Billing File Reports</strong></u> page, click the <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Export to Excel</button> button <i>(see Figure 4.74).</i>
          </li>
          <li style={{ marginBottom: "1px" }}>
            Then, a download dialog box is displayed. Click <button style={{
              backgroundColor: "#ccc",
              color: "#000",
              border: "1px solid #999",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>OK</button> to open/save or <button style={{
              backgroundColor: "#ccc",
              color: "#000",
              border: "1px solid #999",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Cancel</button> if otherwise. See <i>Appendix D</i> for a generated Billing File Report sample.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BillingFileReportsPage;