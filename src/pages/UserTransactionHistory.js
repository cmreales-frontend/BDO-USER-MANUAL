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

const UserTransactionHistory = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">User Transaction History</div>
        <div className="content-text">
          <p>
            <i>User Transaction History</i> manages the history of transactions of specific user.
          </p>

          <div style={accordionContainerStyle}>

            <div>
              <div style={{ ...accordionHeaderStyle(isViewOpen), borderBottom: isViewOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsViewOpen(!isViewOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to View User Transaction History (Journal):</span>
                <span style={chevronStyle(isViewOpen)}>&#8964;</span>
              </div>
              {isViewOpen && (
                <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
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
          <img alt="User Transaction History Page View as System Administrator" src={userTransactionHistoryPageView} style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '5px' }}/>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Transaction History Page View as System Administrator</div>
        </div>  

        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <img alt="User Transaction History Page View as User or User Administrator" src={userTransactionHistoryPageViewAsUser} style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%', marginBottom: '5px' }}/>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Transaction History Page View as User/User Administrator</div>
        </div>
  
      <p>
            For more information, click on{' '}
            <button type="button" onClick={() => setIsManagePopupVisible(true)} style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer', color: 'blue', textDecoration: 'underline', font: 'inherit' }}>
              Field Details
            </button>.
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
  )}
  </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTransactionHistory;