import React, { useState } from 'react';
import approvedTransactionsTable from '../assets/approved_transaction_table.png';

const ApprovedTransaction = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.4.3 APPROVED TRANSACTIONS</div>
        <div className="content-text">
          <p>
            This list contains approved transactions. Only valid approved transactions are listed on this table. All role types can view this table. For more information, click on <a href="#" onClick={togglePopupVisibility} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>Field Details</a>.
          </p>

          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '20px', textAlign: 'center' }}>Figure 4.14: Approved Transactions Table</div>
          <img src={approvedTransactionsTable} alt="Approved Transactions Table" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />

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
                    <td>Field query input for the Approved Transaction table to retrieve related information on below listing.</td>
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
      </div>
    </div>
  );
};

export default ApprovedTransaction;