import React, { useState } from 'react';
import manageSupportedCardPage from '../assets/manage_supported_card_page.png';
import newSupportedCardForm from '../assets/merchant_supported_card_form.png';
import editSupportedCardDetails from '../assets/edit_supported_card_details.png';
import multipleSupportedCardDeletion from '../assets/multiple_supported_card_deletion.png';

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

const MerchantSupportedCard = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isNewCardPopupVisible, setIsNewCardPopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Merchant Supported Card Management</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete supported card. To navigate this page, go to <b>Merchant Management&gt;&gt;Manage Supported Card.</b></p>

          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={manageSupportedCardPage} alt="Manage Supported Card Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Supported Card Page</div>
          </div>

          <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsManagePopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
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
                    <tr><td>Field Name:</td><td><strong>Search</strong></td></tr>
                    <tr><td>Definition:</td><td>Field query input for the List of Supported Card table to retrieve related information on below listing.</td></tr>
                    <tr><td>Type:</td><td>Alphanumeric</td></tr>
                    <tr><td>Dependency:</td><td>Username must be active and validated by the verifier of the system.</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h3>How to Assign New Card Type on a Merchant:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Merchant Management</b></u>&gt;&gt;<u><b>Manage Supported Card</b></u>&gt;&gt;<u><b>New Supported Card</b></u>. This redirects to <u><b>New Supported Card</b></u> page.
            </li>
            <li>
              Supply the fields, mark the checkbox in the <u><b>Available Card Type</b></u> and click &#x276F; to select it. Also, if the selected card should have TID, toggle on the <u><b>Credential on the File Indicator</b></u> and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Create</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
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
            <img src={newSupportedCardForm} alt="Merchant Supported Card Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Merchant Supported Card Form</div>
          </div>

          <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsNewCardPopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
          </p>

          {isNewCardPopupVisible && (
            <>
              <div style={popupOverlayStyle} onClick={() => setIsNewCardPopupVisible(false)} />
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
                      <td><strong>Bill Code - Merchant Name</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the merchant.</td>
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
                      <td><strong>Merchant No</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the merchant number supported by specified merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Numeric</td>
                    </tr>
                    <tr>
                      <td>Required Length:</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Terminal ID</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the terminal ID for each merchant number supported by a merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Numeric</td>
                    </tr>
                    <tr>
                      <td>Required Length:</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Credential on File Indicator</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the indicator character for selected card type.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Dropdown</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Conditional. If Card types include Visa</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Available Card Types</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the type of the cards.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Multi-pick list</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Credential on File Indicator</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the indicator which identifies if a card type should have a TID or <i>Not</i>. This is only applicable for Visa.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Dropdown</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Conditional. If Card types include Visa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h3>How to Unlink Card Type to a Merchant Number:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Merchant Management</b></u>&gt;&gt;<u><b>Manage Supported Card</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to <u><b>Edit Supported Card</b></u> page with the details.
            </li>
            <li>
              Mark the checkbox in the <u><b>Selected Card Types</b></u> and click the &#x276E; deselect it. Click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
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
            <img src={editSupportedCardDetails} alt="Edit Supported Card Details" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit Supported Card Details</div>
          </div>

          <h3>How to Delete Merchant Supported Card:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Merchant Management</b></u>&gt;&gt;<u><b>Manage Supported Card</b></u> page, select on the list of supported cards and click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to <u><b>Edit Merchant</b></u> page with the details of the selected supported card.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. After clicking button, a confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval.
            </li>
          </ol>
          <p><i><b>Note</b>: When the supported card record is deleted, all card types linked to that Merchant ID or Terminal ID will be deleted.</i></p>

          <h3>How to Delete Multiple Supported Cards:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage Supported Card</b></u> page, select supported card on the list by clicking rows.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. After clicking the button, a confirmation dialog box is displayed. Click{' '}
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
            <img src={multipleSupportedCardDeletion} alt="Multiple Supported Card Deletion" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Multiple Supported Card Deletion</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MerchantSupportedCard;