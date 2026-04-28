import React from "react";
import { useState } from "react";
import transactionDetailsFormImage from "../assets/transaction_details_form.png";

const popupOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  cursor: 'pointer'
};

const popupBoxStyle = {
  position: 'fixed',
  top: '50%', left: '50%',
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
  maxWidth: '500px',
};

const PostSingleTransaction = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection-title">Post Single Transaction</div>

      <h4>How to Post a Single Transaction:</h4>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Post Transaction &gt;&gt; Post Single Transaction</b></u>. This redirects to Post Transaction Details page.
        </li>
        <li>
          Supply the fields and click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button> button to submit the transaction. A confirmation dialog box is displayed.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval.
        </li>
      </ol>
      <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
        <b>Note:</b> When uploading single transaction for immediate posting, start date should be the current date and frequency count is 0. However, when uploading single transaction for scheduled/recurring posting, start date should be greater than the current date and frequency count should be greater than 0.
      </p>
     
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={transactionDetailsFormImage} alt="Transaction Details Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Transaction Details Form</div>
      </div>

      <p>
        For more information, click on{' '}
        <button type="button"onClick={() => setIsManagePopupVisible(true)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit' }}>
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
                  <td><strong>Merchant No</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the merchant number of the transaction.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Dropdown</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Required field</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Card No.</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the card number of the card holder.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Numeric</td>
                </tr>
                <tr>
                  <td>Length:</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>The type of card must be supported by the merchant. </td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Cardholder's Name</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the name of the owner of the card.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Alphanumeric</td>
                </tr>
                <tr>
                  <td>Maximum Length:</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Required field</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Amount</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the amount of the transaction.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Price</td>
                </tr>
                <tr>
                  <td>Maximum:</td>
                  <td>9,999,999.99</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Required field</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Description</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the description of the transaction.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Alphanumeric</td>
                </tr>
                <tr>
                  <td>Maximum Length:</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Required field</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Card Expiration Date</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the expiration date of the issued card.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Date</td>
                </tr>
                <tr>
                  <td>Maximum Length:</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Expiration date must be ahead of the start date and must be beyond the last posting date for recurring transactions.</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Start Date</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the date for transaction to be posted in ATP host.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Date</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Expiration date must be ahead of the start date and must be beyond the last posting date for recurring transactions.</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><strong>Frequency Count</strong></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the number of months that the transaction will be posted to ATP host.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Numeric</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Required Field</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
};

export default PostSingleTransaction;