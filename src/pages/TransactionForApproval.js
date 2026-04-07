import React, { useState } from 'react';
import transactionForApproval from '../assets/transaction-for-approval.png';
import pendingApprovalDetails from '../assets/pending-approval-details.png';
import approvalProcess from '../assets/approval-process.png';
import approvalConfirmationReceipt from '../assets/approval-confirmation.png';
import declineProcess from '../assets/rejection-process.png';
import rejectConfirmationReceipt from '../assets/reject_confirmation_receipt.png';

const TransactionForApproval = () => {
  const [isPopupVisible1, setIsPopupVisible1] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  const togglePopupVisibility1 = () => {
    setIsPopupVisible1(!isPopupVisible1);
  };

  const togglePopupVisibility2 = () => {
    setIsPopupVisible2(!isPopupVisible2);
  };

  return (
    <div className="content-section">
     
      <div className="subsection">
        <div className="subsection-title">My Transactions for Approval</div>
        <div className="content-text">
          <p>This list contains transactions that need verifier's approval. A transaction is automatically removed from the list once the transaction is already approved.</p>

          <h3>How to View the Transactions for My Approval:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Click the <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.8</i>).
              A new window will pop up and will show the details of the transaction depending on its type (see <i>Figure 4.9</i>).
            </li>
            <li>Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Close</button> or <span style={{ fontWeight: 'bold', color: '#FF0000' }}>X</span> button to close the window.</li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={transactionForApproval} alt="Transaction for Approval" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Transaction for My Approval Table</div>
          </div>

          <p>
            For more information, click on 
            <button
              type="button"
              onClick={togglePopupVisibility1}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 2, font: 'inherit' }}>
              Field Details
            </button>.

          </p>
          {isPopupVisible1 && (
            <div style={{ 
              position: 'fixed', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              backgroundColor: 'white', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '20px', 
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>

              <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                <thead>
                  <tr>
                    <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Field Name:</td>
                    <td><strong>Search</strong></td>
                  </tr>
                  <tr>
                    <td>Definition:</td>
                    <td>Field query input for the Transaction for My Approval table to retrieve related information on below listing.</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Alphanumeric</td>
                  </tr>
                  <tr>
                    <td>Dependency:</td>
                    <td>Username must be active and validated by the verifier of the system.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {isPopupVisible1 && (
            <div style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              zIndex: 999,
              cursor: 'pointer'
            }} 
            onClick={togglePopupVisibility1} />
          )}

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={pendingApprovalDetails} alt="Pending Approval Details" style={{ maxWidth: '60%', height: 'auto' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Pending Approval Details</div>
          </div>

          <h3>How to Approve the transaction in Transactions for My Approval:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              On pending approval detail's view, click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Approve</button>{' '}
              button and wait for the confirmation box (see <i>Figure 4.9</i>).
            </li>

            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if you don't want to approve the transaction and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              button if you want to approve the transaction (see <i>Figure 4.10</i>).
            </li>

            <li>
              A transaction receipt is displayed signifying that the transaction is already posted in BRPS (see <i>Figure 4.11</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Close</button>{' '}
              or <span style={{ fontWeight: 'bold', color: '#FF0000' }}>X</span> button to close the window.
            </li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '5px' }}>
            <img src={approvalProcess} alt="Approval Process" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Approval Confirmation Dialog Box</div>
          </div>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={approvalConfirmationReceipt} alt="Approval Confirmation" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Approval Confirmation Receipt</div>
          </div>

          <h3>How to Decline transaction in Transactions for My Approval:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              On pending approval detail's view, click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Decline</button>{' '}
              button and wait for the confirmation box (see <i>Figure 4.12</i>).
            </li>
            <li>
              Provide the reason of declining the transaction. This is optional. Click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to continue the transaction.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction has been declined (see <i>Figure 4.13</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Close</button>{' '}
              or <span style={{ fontWeight: 'bold', color: '#FF0000' }}>X</span> button to close the window.
            </li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={declineProcess} alt="Decline Process" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Decline Confirmation Dialog Box</div>
          </div>

          <p>
            For more information, click on  
            <button
              type="button"
              onClick={togglePopupVisibility2}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 2, font: 'inherit' }}
            >
              Reason
            </button>.
          </p>
          {isPopupVisible2 && (
            <div style={{ 
              position: 'fixed', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              backgroundColor: 'white', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '20px', 
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
              
          <table className="command-syntax-table" style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Field Name:</td>
                <td><strong>Reason</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Reason why the transaction is rejected.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Maximum Length:</td>
                <td>128</td>
              </tr>
            </tbody>
          </table>
            </div>
          )}

          {isPopupVisible2 && (
            <div style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              zIndex: 999,
              cursor: 'pointer'
            }} 
            onClick={togglePopupVisibility2} />
          )}

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={rejectConfirmationReceipt} alt="Reject Confirmation Receipt" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '60%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Reject Confirmation Receipt</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransactionForApproval;