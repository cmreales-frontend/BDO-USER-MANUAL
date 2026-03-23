import React from 'react';
import rejectedTransactionsTable from '../assets/rejected_transactions_table.png';

const RejectedTransaction = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.4.4 REJECTED TRANSACTIONS</div>
        <div className="content-text">
          <p>This list contains rejected transactions. Only valid rejected transactions are listed on this table. All role type can view this table.</p>

  
          <div className="section-title" style={{ fontSize: '16px', marginTop: '18px', marginBottom: '10px', textAlign: 'center' }}>Rejected Transactions Table</div>
          <img src={rejectedTransactionsTable} alt="Rejected Transactions Table" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />

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
                <td>Field query input for the Rejected Transaction table to retrieve related information on below listing.</td>
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
      </div>
    </div>
  );
};

export default RejectedTransaction;