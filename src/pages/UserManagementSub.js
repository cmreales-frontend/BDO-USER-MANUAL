import React, { useState } from 'react';
import userManagementPage from '../assets/user_management_page.png';
import newUserPage from '../assets/new_user_page.png';
import editUserPage from '../assets/edit_user_page.png';
import userMultipleDeletePage from '../assets/user_multiple_delete_page.png';
import changePasswordForm from '../assets/user_change_password_form.png';
import forceChangePasswordReceipt from '../assets/force_change_password_receipt.png';


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

const UserManagementSub = () => {
  const [isNewUserPopupVisible, setIsNewUserPopupVisible] = useState(false);
  const [isChangePasswordPopupVisible, setIsChangePasswordPopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">User Management</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, delete and update BRPS users. To navigate this page, go to <b>User Management&gt;&gt;Manage User.</b></p>

          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={userManagementPage} alt="User Management Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Management Page</div>
          </div>

          <br/>
          <p>All of the users of BRPS are summarized in the List of Users table and can be exported to Excel. The report shows every user's detail, date of creation, and role name.</p>

          <h3>How to Download List of Users:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage User</b></u> page, click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Export to Excel</button>{' '}
              button.
            </li>
            <li>
              Then, a download dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#d8d8d8d3', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>OK</button>{' '}
              to open/save or{' '}
              <button style={{ backgroundColor: '#d8d8d8d3', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Cancel</button>{' '}
              if otherwise. See <i>Appendix D</i> for generated User List Report sample.
            </li>
          </ol>

          <h3>How to Create New User:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>User Management</b></u>&gt;&gt;<u><b>Manage User</b></u>&gt;&gt;<u><b>New User</b></u>. This redirects to New User page.
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
          <p>
            <i><b>Note:</b> Upon approval of the newly created user (non-BDO user), the system creates an initial password for the user to use to login to the system. The initial password will be sent to user's email.</i>
          </p>
          <p>
            <i>The user can use this password to login to the system but will be forced to change the password before the user can totally access the system (see <u><b>Sign-in with an initial password</b></u>).</i>
          </p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={newUserPage} alt="New User Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New User Page</div>
          </div>

          <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsNewUserPopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
          </p>

          {isNewUserPopupVisible && (
            <>
              <div style={popupOverlayStyle} onClick={() => setIsNewUserPopupVisible(false)} />
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
                      <td><strong>Username</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the ID of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Minimum Length:</td>
                      <td>8</td>
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
                      <td><strong>Institution</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the institution the user belongs to.</td>
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
                      <td><strong>Status</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Status of the user whether active or inactive.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Boolean</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Email</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the email address of the user.</td>
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
                      <td><strong>Verify Email</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the email verification. Content of this field should be equal to the content of Email field.</td>
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
                      <td>Email</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>First Name</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the given name of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>Middle Name</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the middle name of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>Last Name</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the surname of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>Birthday</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the date of birth of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Date</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Gender</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the gender of the user.</td>
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
                      <td><strong>Department</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the department of the user which he/she belongs to.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>Branch</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the branch of the user which he/she belongs to.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>Address</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the location of the office of the user.</td>
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
                      <td><strong>Mobile Number</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the mobile number of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Numeric</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Telephone Number</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the contact number of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
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
                      <td><strong>BDO User</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the kind of user, whether it is a merchant user or LDAP user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Boolean</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>User Creator Role; Required field</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h3>How to Update User:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Manage User</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit User</b></u> page with the details of the selected user.
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
            <img src={editUserPage} alt="Edit User Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit User Page</div>
          </div>

          <h3>How to Delete a User:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Manage User</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit User</b></u> page with the details of the selected user.
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

          <h3>How to Delete Multiple Users:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage User</b></u> page, select a user on the list by clicking a row.
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

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={userMultipleDeletePage} alt="User Multiple Delete Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Multiple Delete Page</div>
          </div>

          <h3>How to Force Change User Password:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Manage User</b></u> page, click <i className="fas fa-key" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to Change Password Form.
            </li>
            <li>
              Supply the fields or click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Generate</button>{' '}
              button to generate random password.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is posted to user's email address.
            </li>
          </ol>
          <p>
            <i><b>Note:</b> Force change password does not need an approval. It is directly committing the changes in the system. Password should confirm to BDO security stated below:</i>
          </p>
          <ul style={{ marginLeft: '30px', fontStyle: 'italic' }}>
            <li>Password should be 12 characters</li>
            <li>Should contain at least 1 Uppercase letter</li>
            <li>Should contain at least 1 Numeric character</li>
            <li>Should contain at least 1 Special character</li>
            <li>Should not be a used password for the last 4 updates (configurable).</li>
          </ul>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={changePasswordForm} alt="User Change Password Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>User Change Password Form</div>
          </div>

          <p>
            For more information, click on{' '}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsChangePasswordPopupVisible(true); }}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Field Details
            </a>.
          </p>

          {isChangePasswordPopupVisible && (
            <>
              <div style={popupOverlayStyle} onClick={() => setIsChangePasswordPopupVisible(false)} />
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
                      <td><strong>Username</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the username of the user that will be forced to change password.</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>Required field</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>New Password</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the verification of new password of the user.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Minimum Length:</td>
                      <td>8</td>
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
                      <td><strong>Verify Password</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the password verification. Content of this field should be equal to the content of New Password field.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric</td>
                    </tr>
                    <tr>
                      <td>Minimum Length:</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Maximum Length:</td>
                      <td>128</td>
                    </tr>
                    <tr>
                      <td>Dependency:</td>
                      <td>New Password</td>
                    </tr>

                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Random Password</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the system generated password.</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Alphanumeric; System Generated</td>
                    </tr>
                    <tr>
                      <td>Length:</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={forceChangePasswordReceipt} alt="Force Change Password Receipt" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '70%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Force Change Password Receipt</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserManagementSub;