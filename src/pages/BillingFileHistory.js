import React from 'react';
import billingFileHistoryAdmin from '../assets/billing_file_history_page_view.png';
import billingFileHistoryUser from '../assets/billing_file_history_page_view_as_user_administrator.png';

const imgWrapper = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const BillingFileHistory = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.9.1 BILLING FILE</div>
        <div className="content-text">
          <p>
            <i>Billing File History</i> manages the history of overview details of all billing files uploaded per merchant. To navigate to this page <b>History</b>&gt;&gt;<b>Billing File</b>.
          </p>

          <h3>How to View Billing History:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>History</b></u>&gt;&gt;<u><b>Billing File</b></u>. This redirect to Billing File History Page.
            </li>
            <li>
              Supply fields. If role type is System Administrator, there's a need to provide the bill code (see <i>Figure 4.58</i>). If the role type is User, the Bill Code is automatically provided (see <i>Figure 4.59</i>). After providing the information, click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit search parameters and wait for the result to show in the billing file history table.
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.58: Billing File History Page View as System Administrator</div>
          <div style={imgWrapper}>
            <img src={billingFileHistoryAdmin} alt="Billing File History Page View as System Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.59: Billing File History Page View as User Administrator/User</div>
          <div style={imgWrapper}>
            <img src={billingFileHistoryUser} alt="Billing File History Page View as User Administrator/User" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
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
                <td><strong>Bill Code</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the code of merchant the billing files belong to.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Dependency:</td>
                <td>Required Field</td>
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
              <tr>
                <td>Field Name:</td>
                <td><strong>Merchant Number</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the merchant number specified in the billing file.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Required Length:</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default BillingFileHistory;