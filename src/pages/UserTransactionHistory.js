import React from 'react';
import userTransactionHistoryPageView from '../assets/user_transaction_history_page_view.png';
import userTransactionHistoryPageViewAsUser from '../assets/user_transaction_history_page_view_as_user.png';

const UserTransactionHistory = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.9.3 USER TRANSACTION</div>
        <div className="content-text">
          <p>
            <i>User Transaction History</i> manages the history of transactions of specific user.
          </p>

          <h3>How to View User Transaction History (Journal):</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>History</b></u>&gt;&gt;<u><b>User Transaction</b></u>. This redirects to User Transaction History Page (see <i>Figure 4.62</i> and <i>4.63</i>).
            </li>
            <li>
              Supply fields. If role type is System Administrator, there's a need to provide the username manually (see <i>Figure 4.62</i>). If the role type is User, there is no username field (see <i>Figure 4.63</i>). After providing the information, click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit search parameters and wait for the result to show in the user transaction history table.
            </li>
          </ol>

          <br />
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px', marginTop: '20px', textAlign: 'center' }}>Figure 4.62: User Transaction History Page View as System Administrator</div>
          <img
            src={userTransactionHistoryPageView}
            alt="Figure 4.62: User Transaction History Page View as System Administrator"
            style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '20px' }}
          />

          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px', marginTop: '20px', textAlign: 'center' }}>Figure 4.63: User Transaction History Page View as User/User Administrator</div>
          <img src={userTransactionHistoryPageViewAsUser} alt="Figure 4.63: User Transaction History Page View as User/User Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '20px' }}/>
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
                <td>Refers to the start date of user transactions to retrieve.</td>
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
                <td>Refers to the start time of user transactions to retrieve.</td>
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
                <td>Refers to the end date of user transactions to retrieve.</td>
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
                <td>Refers to the end time of user transactions to retrieve.</td>
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
                <td>Refers to the username the transactions belong to.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>32</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default UserTransactionHistory;