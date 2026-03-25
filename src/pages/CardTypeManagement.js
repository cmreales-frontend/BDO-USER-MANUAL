import React, { useState } from 'react';
import manageCardTypePage from '../assets/manage_card_type_page.png';
import newCardTypePage from '../assets/card_type_page.png';
import editCardTypePage from '../assets/edit_card_type_page.png';
import multipleCardTypeDelete from '../assets/multiple_card_type_delete.png';

const imgWrapper = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

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

const CardTypeManagement = () => {
  const [isNewCardTypePopupVisible, setIsNewCardTypePopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.5.4 CARD TYPE MANAGEMENT</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete card type. To navigate this page, go to <b>Merchant Management&gt;&gt;Manage Card Types.</b></p>

          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.30: Manage Card Type Page</div>
          <div style={imgWrapper}>
            <img src={manageCardTypePage} alt="Manage Card Type Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

          <h3>How to Create Card Type:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Merchant Management</b></u>&gt;&gt;<u><b>Manage Card Types</b></u>&gt;&gt;<u><b>New Card Type</b></u>. This redirects to <u><b>New Card Type</b></u> page (see <i>Figure 4.31</i>).
            </li>
            <li>
              Supply the fields and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit the transaction. After clicking the button, a confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that transaction id for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>
          <p>
            <i><b>Note</b>: In minimum and maximum BINs, number of leading zeroes indicates the card number length. See examples below:</i>
          </p>
          <p style={{ marginLeft: '20px', fontStyle: 'italic' }}>
            000003 – 14 digits<br/>
            00003 – 15 digits<br/>
            0003 – 16 digits<br/>
            003 – 17 digits<br/>
            03 – 18 digits<br/>
            3 – 19 digits
          </p>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.31: Card Type Page</div>
          <div style={imgWrapper}>
            <img src={newCardTypePage} alt="Card Type Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

          <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsNewCardTypePopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
          </p>

          {isNewCardTypePopupVisible && (
            <>
              <div style={popupOverlayStyle} onClick={() => setIsNewCardTypePopupVisible(false)} />
              <div style={popupBoxStyle}>
                <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                  <thead>
                    <tr>
                      <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Field Name:</td><td><strong>Code</strong></td></tr>
                    <tr><td>Definition:</td><td>Refers to the identifier of card type (first letter of card type).</td></tr>
                    <tr><td>Type:</td><td>Alphanumeric</td></tr>
                    <tr><td>Maximum Length:</td><td>1</td></tr>
                    <tr><td>Dependency:</td><td>Required field</td></tr>

                    <tr><td>Field Name:</td><td><strong>Card Type</strong></td></tr>
                    <tr><td>Definition:</td><td>Refers to the name of card type.</td></tr>
                    <tr><td>Type:</td><td>Alphanumeric</td></tr>
                    <tr><td>Maximum Length:</td><td>32</td></tr>
                    <tr><td>Dependency:</td><td>Required field</td></tr>

                    <tr><td>Field Name:</td><td><strong>Description</strong></td></tr>
                    <tr><td>Definition:</td><td>Refers to the description of the card type.</td></tr>
                    <tr><td>Type:</td><td>Alphanumeric</td></tr>
                    <tr><td>Maximum Length:</td><td>32</td></tr>
                    <tr><td>Dependency:</td><td>Required field</td></tr>

                    <tr><td>Field Name:</td><td><strong>Minimum BIN</strong></td></tr>
                    <tr><td>Definition:</td><td>Refers to the minimum BIN range of each card type.</td></tr>
                    <tr><td>Type:</td><td>Numeric</td></tr>
                    <tr><td>Maximum Length:</td><td>9</td></tr>
                    <tr><td>Dependency:</td><td>Required field</td></tr>

                    <tr><td>Field Name:</td><td><strong>Maximum BIN</strong></td></tr>
                    <tr><td>Definition:</td><td>Refers to the maximum BIN range of each card type.</td></tr>
                    <tr><td>Type:</td><td>Numeric</td></tr>
                    <tr><td>Maximum Length:</td><td>9</td></tr>
                    <tr><td>Dependency:</td><td>Required field</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h3>How to Update Card Type:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Manage Card Type</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit Card Type</b></u> page with the details of the selected card type (see <i>Figure 4.32</i>).
            </li>
            <li>
              Update the field/s and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>
          <p>
            <i><b>Note</b>: In minimum and maximum <u>BINs</u>, number of leading zeroes indicates the card number length. See examples below:</i>
          </p>
          <p style={{ marginLeft: '20px', fontStyle: 'italic' }}>
            000003 – 14 digits<br/>
            00003 – 15 digits<br/>
            0003 – 16 digits<br/>
            003 – 17 digits<br/>
            03 – 18 digits<br/>
            3 – 19 digits
          </p>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.32: Edit Card Type Page</div>
          <div style={imgWrapper}>
            <img src={editCardTypePage} alt="Edit Card Type Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

          <h3>How to Delete Card Type:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage Card Type</b></u> page, select on the list of card types and click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to <u><b>Edit Card Type</b></u> page with the details of the selected card type (see <i>Figure 4.32</i>).
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <h3>How to Delete Multiple Card Type:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage Card Type</b></u> page, select a card type on the list by clicking a row (see <i>Figure 4.33</i>).
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.33: Multiple Card Type Delete</div>
          <div style={imgWrapper}>
            <img src={multipleCardTypeDelete} alt="Multiple Card Type Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardTypeManagement;