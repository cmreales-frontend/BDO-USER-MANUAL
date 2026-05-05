import React from 'react';
import { useState } from 'react';
import userAssignmentPage from '../assets/user_assignment_page.png';
import assignUserToMerchantForm from '../assets/assign_user_to_merchant_form.png';
import userMerchantAssignmentDetails from '../assets/user_merchant_assignment_details_page.png';
import userAssignmentPageMultiple from '../assets/user_assignment_page_1.png';

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  cursor: 'pointer'
};

const popupBoxStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
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
};

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

const UserAssignment = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteMultipleOpen, setIsDeleteMultipleOpen] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">User-Merchant Assignment</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete system users. To navigate this page, go to <b>User Management&gt;&gt;User Assignment.</b></p>
          <br/>

          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={userAssignmentPage} alt="User Assignment Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Assignment Page</div>
          </div>

          <div style={accordionContainerStyle}>

            {/* How to Assign User to Merchant */}
            <div>
              <div style={accordionHeaderStyle(isAssignOpen)} onClick={() => setIsAssignOpen(!isAssignOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Assign User to Merchant:</span>
                <span style={chevronStyle(isAssignOpen)}>&#8964;</span>
              </div>
              {isAssignOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Go to <u><b>User Management</b></u>&gt;&gt;<u><b>User Assignment</b></u>&gt;&gt;<u><b>Assign User to Merchant</b></u> page. This redirects to User-Merchant Assignment Page.
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
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>

                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={assignUserToMerchantForm} alt="Assign User to Merchant Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Assign User to Merchant Form</div>
                  </div>

                  <p>
                    For more information, click on{' '}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setIsManagePopupVisible(true); }}
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'blue', textDecoration: 'underline', font: 'inherit' }}>
                      Field Details
                    </button>.
                  </p>

                  {isManagePopupVisible && (
                    <>
                      <div style={popupOverlayStyle} onClick={() => setIsManagePopupVisible(false)} />
                      <div style={popupBoxStyle}>
                        <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                          <thead>
                            <tr><th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th></tr>
                          </thead>
                          <tbody>
                            <tr><td>Field Name:</td><td><strong>Institution</strong></td></tr>
                            <tr><td>Definition:</td><td>Refers to the institution the merchant belongs to.</td></tr>
                            <tr><td>Type:</td><td>Dropdown</td></tr>
                            <tr><td>Dependency:</td><td>Required field</td></tr>
                            <tr><td>Field Name:</td><td><strong>Merchant</strong></td></tr>
                            <tr><td>Definition:</td><td>Refers to the merchant that the user assigns to.</td></tr>
                            <tr><td>Type:</td><td>Dropdown</td></tr>
                            <tr><td>Dependency:</td><td>Required field</td></tr>
                            <tr><td>Field Name:</td><td><strong>Username</strong></td></tr>
                            <tr><td>Definition:</td><td>Refers to the user to assign in a merchant.</td></tr>
                            <tr><td>Type:</td><td>Dropdown</td></tr>
                            <tr><td>Dependency:</td><td>Required field</td></tr>
                            <tr><td>Field Name:</td><td><strong>User Role</strong></td></tr>
                            <tr><td>Definition:</td><td>Refers to the role of the user for specific merchant.</td></tr>
                            <tr><td>Type:</td><td>Dropdown</td></tr>
                            <tr><td>Dependency:</td><td>Required field</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* How to Update User Assignment */}
            <div>
              <div style={accordionHeaderStyle(isUpdateOpen)} onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Update User Assignment:</span>
                <span style={chevronStyle(isUpdateOpen)}>&#8964;</span>
              </div>
              {isUpdateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Select a list from the table in <u><b>User Assignment</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to User-Merchant Assignment page with the details of the selected role.
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
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>

                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={userMerchantAssignmentDetails} alt="User-Merchant Assignment Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User-Merchant Assignment Details Page</div>
                  </div>
                </div>
              )}
            </div>

            {/* How to Delete a User Assignment */}
            <div>
              <div style={accordionHeaderStyle(isDeleteOpen)} onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete a User Assignment:</span>
                <span style={chevronStyle(isDeleteOpen)}>&#8964;</span>
              </div>
              {isDeleteOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Merchant Assignment</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to User-Merchant Assignment page with the details.
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
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>
                </div>
              )}
            </div>

            {/* How to Multiple Delete a User Assignment */}
            <div>
              <div style={{ ...accordionHeaderStyle(isDeleteMultipleOpen), borderBottom: isDeleteMultipleOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDeleteMultipleOpen(!isDeleteMultipleOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Multiple Delete a User Assignment:</span>
                <span style={chevronStyle(isDeleteMultipleOpen)}>&#8964;</span>
              </div>
              {isDeleteMultipleOpen && (
                <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Merchant Assignment</b></u> page, select a user-merchant assignment on the list by clicking a row.
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
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>

                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={userAssignmentPageMultiple} alt="User Assignment Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Assignment Page</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAssignment;