import React from "react";
import { useState } from "react";
import futureDatedPostTransactionsImage from "../assets/future_dated_post_transactions_page.png";
import futureDatedPostTransactionsMultipleDeleteImage from "../assets/future_dated_transactions_multiple_delete.png";

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

const ScheduledTransaction = () => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteMultipleOpen, setIsDeleteMultipleOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection">
        <div className="subsection-title">Scheduled Transactions</div>
        <p>
          This page contains the list of scheduled single transactions. This page allows the user to cancel scheduled transactions before the start date of processing.
        </p>
        <br/>

        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Future Dated Post Transactions</div>
        </div>

        <div style={accordionContainerStyle}>

       
          <div>
            <div style={accordionHeaderStyle(isViewOpen)} onClick={() => setIsViewOpen(!isViewOpen)}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>How to View the list of scheduled transactions:</span>
              <span style={chevronStyle(isViewOpen)}>&#8964;</span>
            </div>
            {isViewOpen && (
              <div style={accordionBodyStyle}>
                <ol style={{ marginLeft: '20px' }}>
                  <li>
                    Go to <u><b>Post Single Transaction &gt;&gt; Scheduled Transaction</b></u> page. This redirects you to Post Single Scheduled Transactions page.
                  </li>
                  <li>
                    The table shows all the scheduled post single transactions.
                  </li>
                  <li>
                    Click the <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button to see the details of each transaction.
                  </li>
                </ol>

                <br/>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Future Dated Post Transactions</div>
                </div>
              </div>
            )}
          </div>

        
          <div>
            <div style={accordionHeaderStyle(isUpdateOpen)} onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Update the Scheduled Post Single Transaction:</span>
              <span style={chevronStyle(isUpdateOpen)}>&#8964;</span>
            </div>
            {isUpdateOpen && (
              <div style={accordionBodyStyle}>
                <ol style={{ marginLeft: '20px' }}>
                  <li>
                    Go to <u><b>Post Transaction &gt;&gt; Post Single Scheduled Transaction</b></u>. Click{' '}
                    <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i>{' '}
                    button of the selected transaction. This will show the details of the selected transaction.
                  </li>
                  <li>
                    Update the field/s and click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
                    button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                    to continue and{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                    if otherwise. A transaction receipt is displayed signifying that the transaction is for approval.
                  </li>
                </ol>

                <br/>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Future Dated Post Transactions</div>
                </div>
              </div>
            )}
          </div>

      
          <div>
            <div style={accordionHeaderStyle(isDeleteOpen)} onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Future Dated Single Transaction Individually:</span>
              <span style={chevronStyle(isDeleteOpen)}>&#8964;</span>
            </div>
            {isDeleteOpen && (
              <div style={accordionBodyStyle}>
                <ol style={{ marginLeft: '20px' }}>
                  <li>
                    In <u><b>Post Single Scheduled Transactions</b></u> page, click{' '}
                    <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i>{' '}
                    button. This redirects to Transaction Details Form with the details of the selected transaction.
                  </li>
                  <li>
                    Click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                    button. After clicking{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                    button, a confirmation dialog box is displayed. Click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                    to continue and{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                    if otherwise.
                  </li>
                  <li>
                    A transaction receipt is displayed signifying that the transaction is for approval.
                  </li>
                </ol>
              </div>
            )}
          </div>

          
          <div>
            <div style={{ ...accordionHeaderStyle(isDeleteMultipleOpen), borderBottom: isDeleteMultipleOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDeleteMultipleOpen(!isDeleteMultipleOpen)}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Multiple Future Dated Transactions:</span>
              <span style={chevronStyle(isDeleteMultipleOpen)}>&#8964;</span>
            </div>
            {isDeleteMultipleOpen && (
              <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                <ol style={{ marginLeft: '20px' }}>
                  <li>
                    In <u><b>Post Single Scheduled Transactions</b></u> page, select transaction on the list by clicking rows.
                  </li>
                  <li>
                    Click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                    button. After clicking the button, a confirmation dialog box is displayed. Click{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                    to continue and{' '}
                    <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                    if otherwise.
                  </li>
                  <li>
                    A transaction receipt is displayed signifying that the transaction is for approval.
                  </li>
                </ol>

                <br/>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={futureDatedPostTransactionsMultipleDeleteImage} alt="Future Dated Transactions Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Future Dated Transactions Multiple Delete</div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScheduledTransaction;