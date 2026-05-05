import React, { useState } from 'react';
import rolesAndPrivilegesPage from '../assets/roles_and_privileges_page.png';
import newRolePage from '../assets/new_role_page.png';
import editRolePage from '../assets/roles_update_details_page.png';
import rolesMultipleDelete from '../assets/roles_multiple_delete.png';
import privilegesDetailsPage from '../assets/privileges_details_page.png';

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

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  cursor: 'pointer',
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

const RolesAndPrivileges = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteMultipleOpen, setIsDeleteMultipleOpen] = useState(false);
  const [isUpdatePrivilegesOpen, setIsUpdatePrivilegesOpen] = useState(false);
  const [isDeletePrivilegesOpen, setIsDeletePrivilegesOpen] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Roles and Privileges</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete system users. To navigate this page, go to <b>User Management&gt;&gt;Roles and Privileges.</b></p>
          <br/>

          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={rolesAndPrivilegesPage} alt="Roles and Privileges Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Roles and Privileges Page</div>
          </div>

       <br/>
          <div style={accordionContainerStyle}>
 
            <div>
              <div style={accordionHeaderStyle(isCreateOpen)} onClick={() => setIsCreateOpen(!isCreateOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Create New Role:</span>
                <span style={chevronStyle(isCreateOpen)}>&#8964;</span>
              </div>

              {isCreateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>Go to <b>User Management</b>&gt;&gt;<b>Roles and Privileges</b>&gt;&gt;<u><b>New Role</b></u> page.</li>
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
                    <img src={newRolePage} alt="New Role Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>New Role Page</div>
                  </div>
                  <p>
                    For more information, click on{' '}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setIsPopupVisible(true); }}
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                    >
                      Field Details
                    </button>.
                  </p>

                  {isPopupVisible && (
                    <>
                      <div style={popupOverlayStyle} onClick={() => setIsPopupVisible(false)} />
                      <div style={popupBoxStyle}>
                        <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                          <thead>
                            <tr><th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th></tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Field Name:</td>
                              <td><strong>Role Name</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to name of role.</td>
                            </tr>
                            <tr>
                              <td>Type:</td>
                              <td>Alphanumeric</td>
                            </tr>
                            <tr>
                              <td>Maximum Length:</td>
                              <td>24</td>
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
                              <td>Refers to the description of the role.</td>
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
                              <td><strong>Role Type</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the type role; whether it is System Administrator, User Administrator or User.</td>
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
                </div>
              )}
           </div>

           
            <div>
              <div style={accordionHeaderStyle(isUpdateOpen)} onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Update Role:</span>
                <span style={chevronStyle(isUpdateOpen)}>&#8964;</span>
              </div>
              {isUpdateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Select a list from the table in <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to Edit Role page with the details of the selected role.
                    </li>
                    <li>
                      Update the fields and click{' '}
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
                    <img src={editRolePage} alt="Roles Update Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Roles Update Details Page</div>
                  </div>
                </div>
              )}
            </div>

          
            <div>
              <div style={accordionHeaderStyle(isDeleteOpen)} onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Role:</span>
                <span style={chevronStyle(isDeleteOpen)}>&#8964;</span>
              </div>
              {isDeleteOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Select a list from the table in <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to Edit Role page with the details of the selected role.
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

          
            <div>
              <div style={accordionHeaderStyle(isDeleteMultipleOpen)} onClick={() => setIsDeleteMultipleOpen(!isDeleteMultipleOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Multiple Role:</span>
                <span style={chevronStyle(isDeleteMultipleOpen)}>&#8964;</span>
              </div>
              {isDeleteMultipleOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>In roles and privileges management page, select a role on the list by clicking a row.</li>
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
                    <img src={rolesMultipleDelete} alt="Roles Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Roles Multiple Delete</div>
                  </div>
                </div>
              )}
            </div>

            
            <div>
              <div style={accordionHeaderStyle(isUpdatePrivilegesOpen)} onClick={() => setIsUpdatePrivilegesOpen(!isUpdatePrivilegesOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Update Privileges</span>
                <span style={chevronStyle(isUpdatePrivilegesOpen)}>&#8964;</span>
              </div>
              {isUpdatePrivilegesOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-cog" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to Privilege Management Page with the details of the selected role.
                    </li>
                    <li>On the <u><b>Available Privileges</b></u> pane, select the modules by ticking the checkbox.</li>
                    <li>Click the &#x276F; button to transfer the modules to the <u><b>Selected Privileges</b></u> pane.</li>
                    <li>
                      To remove the modules from <u><b>Selected Privileges,</b></u> select the modules by ticking the checkbox. Then, click the &#x276E; button to transfer it back to <u><b>Available Privileges</b></u> or just click the{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Reset</button>{' '}
                      button.
                    </li>
                    <li>
                      Click the{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
                      button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                      to continue and{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                      if otherwise.
                    </li>
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>
                  <p><i><u><b>NOTE:</b></u> Please see Appendix C for more information on user roles and privileges.</i></p>
                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={privilegesDetailsPage} alt="Privileges Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Privileges Details Page</div>
                  </div>
                </div>
              )}
            </div>

           
            <div>
              <div style={{ ...accordionHeaderStyle(isDeletePrivilegesOpen), borderBottom: isDeletePrivilegesOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDeletePrivilegesOpen(!isDeletePrivilegesOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Privileges:</span>
                <span style={chevronStyle(isDeletePrivilegesOpen)}>&#8964;</span>
              </div>
              {isDeletePrivilegesOpen && (
                <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                  <p>Upon deletion of a role in Role Management, privileges assigned to that role will also be deleted.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesAndPrivileges;