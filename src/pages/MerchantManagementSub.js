import React, { useState } from 'react';
import merchantManagementPage from '../assets/merchant_management_page.png';
import newMerchantPage from '../assets/new_merchant_pages.png';
import confirmationDialogBox from '../assets/confirmation_dialog_box.png';
import confirmationReceipt from '../assets/confirmation_receipt.png';
import editMerchantPage from '../assets/edit_merchant_details.png';
import merchantMultipleDelete from '../assets/merchant_multiple_delete.png';

const MerchantManagementSub = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isNewMerchantPopupVisible, setIsNewMerchantPopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Merchant Management</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, delete and download merchants list. To navigate this page, go to <b>Merchant Management &gt;&gt; Manage Merchants.</b></p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={merchantManagementPage} alt="Merchant Management Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Merchant Management Page</div>
          </div>
          <p>
            For more information, click on{' '}
            <button
              onClick={() => setIsManagePopupVisible(true)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
            >
              Field Details
            </button>.
          </p>

          {isManagePopupVisible && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 999,
                  cursor: 'pointer'
                }}
                onClick={() => setIsManagePopupVisible(false)}
              />
              <div
                style={{
                  position: 'fixed',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '20px',
                  zIndex: 1000,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
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
                      <td>Field query input for the List of Merchant table to retrieve related information on below listing.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Username must be active and validated by the verifier of the system.</td>
                    </tr>
                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Show Entries</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Selection of 10, 25, 50 or 100 entries for below table.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Dropdown</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Table must have list.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <p>All of the BRPS merchants are summarized in the List of Merchants. Every bill code displays the institution code, status, and all corresponding merchant numbers. Users can export these lists to Excel.</p>

          <h3>How to Download List of Merchants:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage Merchant</b></u> page, click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Export to Excel</button>{' '}
              button.
            </li>
            <li>
              Then, a download dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#d8d8d8d3', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>OK</button>{' '}
              to open/save or{' '}
              <button style={{ backgroundColor: '#d8d8d8d3', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Cancel</button>{' '}
              if otherwise. See <i>Appendix D</i> for the generated Merchant List Report sample.
            </li>
          </ol>

          <h3>How to Create New Merchant:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <b>Merchant Management &gt;&gt; Manage Merchant &gt;&gt; New Merchant</b>. This redirects to <b>New Merchant</b> page.
            </li>
            <li>
              Supply the fields and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
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
          <img src={newMerchantPage} alt="Figure 4.17: New Merchant Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }}/>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New Merchant Pages</div>
          </div>

          <p>
            For more information, click on{' '}
            <button
              onClick={() => setIsNewMerchantPopupVisible(true)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
            >
              Field Details
            </button>.
          </p>

          {isNewMerchantPopupVisible && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 999,
                  cursor: 'pointer'
                }}
                onClick={() => setIsNewMerchantPopupVisible(false)}
              />
              <div
                style={{
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
                  overflowY: 'auto'
                }}
              >
                <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                  <thead>
                    <tr>
                      <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Institution Code - Institution Name</strong></td>
                      </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the institution the merchant is belong to.</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Bill Code</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the ID of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Length:</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Merchant Initials</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the alias/initials of specific merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Merchant Name</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the name of the merchant.</td>
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
                      <td><strong>Contact Person</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the contact person of merchant.</td>
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
                      <td><strong>Contact Number 1</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the primary contact number of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Numeric</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Contact Number 2</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the secondary contact number of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Numeric</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>20</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Address</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the address of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>128</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Email Address</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the email address of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric; Formatted field (xxxx@xxx.com)</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>32</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Start Time</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the access start time of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Time</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>End Time</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the access end time of the merchant.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Time</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Settlement Time</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the time of settlement on the daily single transactions.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Time</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(day => (
                      <React.Fragment key={day}>
                        <tr>
                          <td>Field Name:</td>
                          <td><strong>{day}</strong></td>
                            </tr>
                        <tr>
                          <td>Definition:</td>
                          <td>Day the merchant is available to access the application.</td>
                          </tr>
                        <tr>
                          <td>Type:</td>
                          <td>Boolean</td>
                          </tr>
                        <tr>
                          <td>Dependency:</td>
                          <td>Required field</td>
                          </tr>
                      </React.Fragment>
                    ))}

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Status</strong></td>
                      </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Merchant status whether it is active or inactive.</td>
                      </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Boolean</td>
                      </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <br/>
    
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={confirmationDialogBox} alt="Confirmation Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '60%' }} />
           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Confirmation Dialog Box</div>
          </div>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={confirmationReceipt} alt="Confirmation Receipt" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '60%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Confirmation Receipt</div>
          </div>

          <h3>How to Update Merchant:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Manage Merchant</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit Merchant</b></u> page with details of the selected merchant.
            </li>
            <li>
              Update the field/s and click{' '}
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
          <img src={editMerchantPage} alt="Edit Merchant Details" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit Merchant Details</div>
          </div>

          <h3>How to Delete Merchant in Edit Merchant Page:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Manage Merchant</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit Merchant</b></u> form with details of the selected merchant.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
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

          <h3>How to Delete Multiple Merchants:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage Merchant</b></u>. Select merchants on the list by clicking rows.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transactions. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transactions is for approval.
            </li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={merchantMultipleDelete} alt="Merchant Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Merchant Multiple Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantManagementSub;