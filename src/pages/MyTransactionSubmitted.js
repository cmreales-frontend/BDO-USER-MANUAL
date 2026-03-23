import React from 'react';
import myTransactionForApprovalTable from '../assets/my_transaction_for_approval_table.png';
import pendingApproval from '../assets/pending-approval.png';

const MyTransactionSubmitted = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.4.1 MY TRANSACTION SUBMITTED FOR APPROVAL</div>
        <div className="content-text">
          <h3>How to view my transactions for my approval:</h3>

          <ol style={{ marginLeft: '20px' }}>
            <li>
              Click the <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. A new window will pop up and will show the details of the transaction depending on its type (see <i>Figure 4.7</i>).
            </li>
            <li>
              Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Close</button> or <span style={{ fontWeight: 'bold', color: '#FF0000' }}>X</span> button to close the window.

              <br/><br />
              <div className="section-title" style={{ fontSize: '16px', marginBottom: '5px' }}>4.6: My Transaction for Approval Table</div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <img src={myTransactionForApprovalTable} alt="My Transaction for Approval Table" style={{ maxWidth: '100%', height: 'auto' }} />
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

              <div className="section-title" style={{ fontSize: '16px', marginBottom: '5px', marginTop: '20px' }}>Figure 4.7: My Pending Approval Details</div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <img src={pendingApproval} alt="Pending Approval" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MyTransactionSubmitted;