import React from "react";
import futureDatedPostTransactionsImage from "../assets/future_dated_post_transactions_page.png";
import futureDatedPostTransactionsMultipleDeleteImage from "../assets/future_dated_transactions_multiple_delete.png";

const ScheduledTransaction = () => {
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.13.2 SCHEDULED TRANSACTION (POST SINGLE)
      </div>
      <p>
        This page contains the list of scheduled single transactions. This page allows the user to cancel scheduled transactions before the start date of processing.
      </p>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Future Dated Post Transactions
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to View the list of scheduled transactions:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Post Single Transaction &gt;&gt; Scheduled Transaction</b></u> page. This redirects you to Post Single Scheduled Transactions page (see <i>Figure 4.93</i>).
        </li>
        <li>
          The table shows all the scheduled post single transactions.
        </li>
        <li>
          Click the <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button to see the details of each transaction (see <i>Figure 4.94</i>).
        </li>
      </ol>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Future Dated Post Transactions
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Update the Scheduled Post Single Transaction:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          Go to <u><b>Post Transaction &gt;&gt; Post Single Scheduled Transaction</b></u>. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button of the selected transaction. This will show the details of the selected transaction (see <i>Figure 4.95</i>).
        </li>
        <li>
          Update the field/s and click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button> button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise. A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>


      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Future Dated Post Transactions
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedPostTransactionsImage} alt="Future Dated Post Transactions Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

      <h3>How to Delete Future Dated Single Transaction Individually:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          In <u><b>Post Single Scheduled Transactions</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.95</i>). This redirects to Transaction Details Form with the details of the selected transaction.
        </li>
        <li>
          Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button. After clicking <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button, a confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
            A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>

      <h3>How to Delete Multiple Future Dated Transactions:</h3>
      <ol style={{ marginLeft: '20px' }}>
        <li>
          In <u><b>Post Single Scheduled Transactions</b></u> page, select transaction on the list by clicking rows (see <i>Figure 4.95</i>).
        </li>
        <li>
          Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button> button. After clicking the button, a confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button> to continue and <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button> if otherwise.
        </li>
        <li>
          A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
        </li>
      </ol>

      <div className="section-title" style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>
        Figure 4: Future Dated Transactions Multiple Delete
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <img src={futureDatedPostTransactionsMultipleDeleteImage} alt="Future Dated Transactions Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      </div>

    </section>
  );
};

export default ScheduledTransaction;