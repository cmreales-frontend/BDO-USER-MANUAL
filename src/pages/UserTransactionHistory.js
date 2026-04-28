import React from 'react';
import { useState } from 'react';
import userTransactionHistoryPageView from '../assets/user_transaction_history_page_view.png';
import userTransactionHistoryPageViewAsUser from '../assets/user_transaction_history_page_view_as_user.png';

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  cursor: 'pointer'
};

const popupBoxStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  zIndex: 1000,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxHeight: '80vh',
  overflowY: 'auto',
  width: 'fit-content',
  minWidth: '300px',
};

const UserTransactionHistory = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">User Transaction History</div>
        <div className="content-text">
          <p>
            <i>User Transaction History</i> manages the history of transactions of specific user.
          </p>

          <h3>How to View User Transaction History (Journal):</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>History</b></u>&gt;&gt;<u><b>User Transaction</b></u>. This redirects to User Transaction History Page.
            </li>
            <li>
              Supply fields. If role type is System Administrator, there's a need to provide the username manually. If the role type is User, there is no username field. After providing the information, click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit search parameters and wait for the result to show in the user transaction history table.
            </li>
          </ol>

          <br/>
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <img src={userTransactionHistoryPageView} alt="Figure 4.62: User Transaction History Page View as System Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '5px' }}/>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Transaction History Page View as System Administrator</div>
        </div>  

        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <img src={userTransactionHistoryPageViewAsUser} alt="Figure 4.63: User Transaction History Page View as User/User Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '5px' }}/>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Transaction History Page View as User/User Administrator</div>
        </div>
  
      <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsManagePopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
          </p>

    {isManagePopupVisible && (
      <>
      <div style={popupOverlayStyle} onClick={() => setIsManagePopupVisible(false)} />
      <div style={popupBoxStyle}> 
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
       </>
    )}
      </div>
    </div>
    </div>
  );
};

export default UserTransactionHistory;