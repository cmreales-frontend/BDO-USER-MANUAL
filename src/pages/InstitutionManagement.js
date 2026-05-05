import React, { useState } from 'react';
import manageInstitutionPage from '../assets/manage_institution_page.png';
import institutionForm from '../assets/institution_form.png';
import editInstitutionPage from '../assets/edit_institution_page.png';
import institutionMultipleDelete from '../assets/institution_multiple_delete.png';

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

const InstitutionManagement = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isInstitutionFormPopupVisible, setIsInstitutionFormPopupVisible] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteMultipleOpen, setIsDeleteMultipleOpen] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Institution Management</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete institution. To navigate this page, go to <b>Merchant Management &gt;&gt; Manage Institution.</b></p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={manageInstitutionPage} alt="Manage Institution Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Manage Institution Page</div>
          </div>

          <p>
            For more information, click on{' '}
            <button
              type="button"
              onClick={() => setIsManagePopupVisible(true)}
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
                    <tr>
                      <td>Field Name:</td>
                      <td><strong>Search</strong></td>
                      </tr>
                    <tr>
                      <td>Definition:</td><td>Field query input for the List of Institution table to retrieve related information on below listing.</td></tr>
                    <tr><td>Type:</td><td>Alphanumeric</td></tr>
                    <tr><td>Dependency:</td><td>Username must be active and validated by the verifier of the system.</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div style={accordionContainerStyle}>

      
            <div>
              <div style={accordionHeaderStyle(isCreateOpen)} onClick={() => setIsCreateOpen(!isCreateOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Create New Institution:</span>
                <span style={chevronStyle(isCreateOpen)}>&#8964;</span>
              </div>
              {isCreateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Go to <u><b>Merchant Management</b></u>&gt;&gt;<u><b>Manage Institution</b></u>&gt;&gt;<u><b>New Institution</b></u>. This redirects to <u><b>New Institution</b></u> page.
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
                    <img src={institutionForm} alt="Institution Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Institution Form</div>
                  </div>

                  <p>
                    For more information, click on{' '}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setIsInstitutionFormPopupVisible(true); }}
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'blue', textDecoration: 'underline', font: 'inherit' }}>
                      Field Details
                    </button>.
                  </p>

                  {isInstitutionFormPopupVisible && (
                    <>
                      <div style={popupOverlayStyle} onClick={() => setIsInstitutionFormPopupVisible(false)} />
                      <div style={popupBoxStyle}>
                        <table className="command-syntax-table" style={{ marginTop: '10px' }}>
                          <thead>
                            <tr><th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th></tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Field Name:</td>
                              <td><strong>Code</strong></td>
                              </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the ID of the institution.</td>
                              </tr>
                            <tr>
                              <td>Type:</td>
                              <td>Numeric</td>
                              </tr>
                            <tr>
                              <td>Maximum Length:</td>
                              <td>9</td>
                              </tr>
                            <tr>
                              <td>Dependency:</td>
                              <td>Required field</td>
                              </tr>
                            <tr>
                              <td>Field Name:</td>
                              <td><strong>Name</strong></td>
                              </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the name of the institution.</td>
                              </tr>
                            <tr>
                              <td>Type:</td>
                              <td>Alphanumeric</td>
                              </tr>
                            <tr>
                              <td>Maximum Length:</td>
                              <td>50</td>
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
                              <td>Refers to the description of an institution.</td>
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
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Update Institution Details:</span>
                <span style={chevronStyle(isUpdateOpen)}>&#8964;</span>
              </div>
              {isUpdateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Select a list from the table in <u><b>Manage Institution</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit Institution</b></u> form with details of the selected merchant.
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
                    <img src={editInstitutionPage} alt="Edit Institution Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit Institution Page</div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div style={accordionHeaderStyle(isDeleteOpen)} onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Institution Individually:</span>
                <span style={chevronStyle(isDeleteOpen)}>&#8964;</span>
              </div>
              {isDeleteOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      Select a list from the table in <u><b>Manage Institution</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirects to <u><b>Edit Institution</b></u> form with details of the selected merchant.
                    </li>
                    <li>
                      Click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                      button to submit the transaction. After clicking{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
                      button, a confirmation dialog box is displayed. Click{' '}
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
              <div style={{ ...accordionHeaderStyle(isDeleteMultipleOpen), borderBottom: isDeleteMultipleOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDeleteMultipleOpen(!isDeleteMultipleOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Delete Multiple Institutions:</span>
                <span style={chevronStyle(isDeleteMultipleOpen)}>&#8964;</span>
              </div>
              {isDeleteMultipleOpen && (
                <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Manage Institution</b></u> page, select institutions on the list by clicking rows.
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
                    <li>A transaction receipt is displayed signifying that the transaction is for approval.</li>
                  </ol>

                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={institutionMultipleDelete} alt="Institution Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Institution Multiple Delete</div>
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

export default InstitutionManagement;