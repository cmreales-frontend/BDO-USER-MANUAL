import React from 'react';
import { useState } from 'react';
import transactionHistoryAdmin from '../assets/transaction_history_page_view_as_system_ad.png';
import transactionHistoryUser from '../assets/transaction_history_page_view_as_user.png';

const imgWrapper = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

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

const TransactionHistory = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.9.2 TRANSACTION</div>
        <div className="content-text">
          <p>
            <i>Transaction History</i> manages the history of each transaction in a billing file and single transaction entries.
          </p>

          <h3>How to View Transaction History:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>History</b></u>&gt;&gt;<u><b>Transaction</b></u>. This redirect to Transaction History Page (see <i>Figure 4.60</i> and <i>4.61</i>).
            </li>
            <li>
              Supply fields. If the role type is System Administrator, there's a need to provide the merchant number manually (see <i>Figure 4.60</i>). If the role type is User, the merchant number is automatically provided (see <i>Figure 4.61</i>). After providing the information, click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit search parameters and wait for the result to show in the billing file history table.
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.60: Transaction History Page View as System Administrator</div>
          <div style={imgWrapper}>
            <img src={transactionHistoryAdmin} alt="Transaction History Page View as System Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
           
          </div>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.61: Transaction History Page View as User/User Administrator</div>
          <div style={imgWrapper}>
            <img src={transactionHistoryUser} alt="Transaction History Page View as User/User Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
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
                <td>Refers to the start date of uploaded transactions to retrieve.</td>
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
                <td>Refers to the start time of uploaded transactions to retrieve.</td>
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
                <td>Refers to the end date of uploaded transactions to retrieve.</td>
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
                <td>Refers to the end time of uploaded transactions to retrieve.</td>
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
                <td><strong>Merchant No</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the merchant number of the transactions.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric/Dropdown</td>
              </tr>
              <tr>
                <td>Required Length:</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Card No</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the card number specified in the transactions.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>19</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Amount</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the amount stated in the transactions.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Approval Code</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the approval code of the transactions.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Billing No</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the billing number.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>7</td>
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

export default TransactionHistory;