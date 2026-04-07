import React, { useState } from 'react';
import myTransactionForApprovalTable from '../assets/my_transaction_for_approval_table.png';

const MyTransactionSubmitted = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">My Transaction Submitted for Approval</div>
        <div className="content-text">
          <h3>How to view my transactions for my approval:</h3>

          <ol style={{ marginLeft: '20px' }}>
            <li>
              Click the <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. A new window will pop up and will show the details of the transaction depending on its type (see <i>Figure 4.7</i>).
            </li>
            <li>
              Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Close</button> or <span style={{ fontWeight: 'bold', color: '#FF0000' }}>X</span> button to close the window.

              <br/><br />
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <img src={myTransactionForApprovalTable} alt="My Transaction for Approval Table" style={{ maxWidth: '100%', height: 'auto' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>My Transaction for Approval Table</div>
              </div>

              <div style={{ marginTop: '10px' }}>
                <p>
                  For more information, click on <a href="#" onClick={togglePopupVisibility} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>Field Details</a>.
                </p>
                {isPopupVisible && (
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

                {isPopupVisible && (
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
                  onClick={togglePopupVisibility} />
                )}
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MyTransactionSubmitted;