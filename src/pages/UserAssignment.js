import React from 'react';
import { useState } from 'react';
import userAssignmentPage from '../assets/user_assignment_page.png';
import assignUserToMerchantForm from '../assets/assign_user_to_merchant_form.png';
import userMerchantAssignmentDetails from '../assets/user_merchant_assignment_details_page.png';
import userAssignmentPageMultiple from '../assets/user_assignment_page_1.png';

const imgWrapper = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

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

const UserAssignment = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.6.3 USER-MERCHANT ASSIGNMENT</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete system users. To navigate this page, go to <b>User Management&gt;&gt;User Assignment.</b></p>

       
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.45: User Assignment Page</div>
          <div style={imgWrapper}>
            <img src={userAssignmentPage} alt="User Assignment Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          </div>

          <h3>How to Assign User to Merchant:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>User Management</b></u>&gt;&gt;<u><b>User Assignment</b></u>&gt;&gt;<u><b>Assign User to Merchant</b></u> page. This redirects to User-Merchant Assignment Page (see <i>Figure 4.46</i>).
            </li>
            <li>
              Supply the fields and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
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
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.46: Assign User to Merchant Form</div>
          <div style={imgWrapper}>
            <img src={assignUserToMerchantForm} alt="Assign User to Merchant Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
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
              <tr>
                <td>Field Name:</td>
                <td><strong>Institution</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the institution the merchant belongs to.</td>
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
                <td><strong>Merchant</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the merchant that the user assigns to.</td>
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
                <td><strong>Username</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the user to assign in a merchant.</td>
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
                <td><strong>User Role</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the role of the user for specific merchant.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Dropdown</td>
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

          <h3>How to Update User Assignment:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>User Assignment</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.45</i>). This redirects to User-Merchant Assignment page with the details of the selected role (see <i>Figure 4.47</i>).
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

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.47: User-Merchant Assignment Details Page</div>
          <div style={imgWrapper}>
            <img src={userMerchantAssignmentDetails} alt="User-Merchant Assignment Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>

          <h3>How to Delete a User Assignment:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Merchant Assignment</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.45</i>). This redirects to User-Merchant Assignment page with the details (see <i>Figure 4.47</i>).
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

          <h3>How to Multiple Delete a User Assignment:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Merchant Assignment</b></u> page, select a user-merchant assignment on the list by clicking a row (see <i>Figure 4.48</i>).
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
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.48: User Assignment Page</div>
          <div style={imgWrapper}>
            <img src={userAssignmentPageMultiple} alt="User Assignment Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserAssignment;