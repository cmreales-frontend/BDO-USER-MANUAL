import React from "react";
import transactionDetailsFormImage from "../assets/transaction_details_form.png";

const PostSingleTransaction = () => {
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.13.1 POST SINGLE TRANSACTION
      </div>

      <h3>How to Post a Single Transaction:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Post Transaction &gt;&gt; Post Single Transaction</b></u>. This redirects to Post Transaction Details page (see <i>Figure 4.93</i>).
        </li>
        <li>
          Supply the fields and click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button> button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>).
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>
      <p style={{ fontStyle: 'italic', marginTop: '10px' }}>
        <b>Note:</b> When uploading single transaction for immediate posting, start date should be the current date and frequency count is 0. However, when uploading single transaction for scheduled/recurring posting, start date should be greater than the current date and frequency count should be greater than 0.
      </p>
      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Transaction Details Form
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={transactionDetailsFormImage} alt="Transaction Details Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
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
                <td>Maximum Length::</td>
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

    </section>
  );
};

export default PostSingleTransaction;