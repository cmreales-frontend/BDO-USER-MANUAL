import React from 'react';
import { useState } from 'react';
import certificateManagementPage from '../assets/certificate_management_page.png';
import viewCertificatePage from '../assets/view_certificate_management_page.png';
import newCertificatePage from '../assets/certificate_page.png';
import revokeConfirmationDialogBox from '../assets/revoke_confirmation_dialog_box.png';
import certificateDownloadDialogBox from '../assets/certificate_download_dialog_box.png';

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

const CertificateManagement = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isRevokeOpen, setIsRevokeOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Certificate Management</div>
        <div className="content-text">
          <p>
            <i>Certificate Management</i> handles the creation of certificates for merchant workstations. It also handles the revoking and listing of all merchant certificates. Only users with the System Administrator role type can have the privilege to access this module.
          </p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={certificateManagementPage} alt="Certificate Management Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Certificate Management Page</div>
          </div>

          <div style={accordionContainerStyle}>

           
            <div>
              <div style={accordionHeaderStyle(isViewOpen)} onClick={() => setIsViewOpen(!isViewOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to View Client Certificate:</span>
                <span style={chevronStyle(isViewOpen)}>&#8964;</span>
              </div>
              {isViewOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Certificate Management</b></u> page. Click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button, this redirect to certificate form with the details of the selected certificate.
                    </li>
                  </ol>
                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={viewCertificatePage} alt="View Certificate Management Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>View Certificate Management Page</div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div style={accordionHeaderStyle(isCreateOpen)} onClick={() => setIsCreateOpen(!isCreateOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Create New Certificate:</span>
                <span style={chevronStyle(isCreateOpen)}>&#8964;</span>
              </div>
              {isCreateOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>Go to <u><b>New Certificate</b></u> page. This redirects to Certificate page.</li>
                    <li>
                      Supply the fields and click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
                      button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                      to continue and{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                      if otherwise.
                    </li>
                    <li>A transaction receipt is displayed signifying that transaction is already posted.</li>
                  </ol>

                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={newCertificatePage} alt="Certificate Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>View Certificate Management Page</div>
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
                            <tr>
                              <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Field Name:</td>
                              <td><strong>Certificate Life Span in Years</strong></td></tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Life span of a certificate in years (Maximum of 3 years; Minimum of 1).</td>
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
                              <td><strong>Common Name</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the unique identification name of the organization.</td>
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
                              <td><strong>Organization</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Organization name.</td>
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
                              <td><strong>Organization Unit</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Organization unit name.</td>
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
                              <td><strong>City/Location</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the location of the organization.</td>
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
                              <td><strong>Country</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the country of the organization.</td>
                            </tr>
                            <tr>
                              <td>Type:</td>
                              <td>Alphanumeric</td>
                            </tr>
                            <tr>
                              <td>Maximum Length:</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>Dependency:</td>
                              <td>Required field</td>
                            </tr>
                            <tr>
                              <td>Field Name:</td>
                              <td><strong>State</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the state of the organization.</td>
                            </tr>
                            <tr>
                              <td>Type; Length:</td>
                              <td>Alphanumeric; 32</td>
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
                              <td>Refers to the email address of the organization.</td>
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
                              <td><strong>Password</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the password assigned to the organization.</td>
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
                              <td><strong>Verify Password</strong></td>
                            </tr>
                            <tr>
                              <td>Definition:</td>
                              <td>Refers to the password verification. Content of this field should be equal to the content of Password field.</td>
                            </tr>
                            <tr>
                              <td>Type:</td>
                              <td>Alphanumeric</td>
                            </tr>
                            <tr>
                              <td>Maximum Length:</td>
                              <td>128</td>
                            </tr>
                            <tr><td>Dependency:</td><td>Password</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
      
            <div>
              <div style={accordionHeaderStyle(isRevokeOpen)} onClick={() => setIsRevokeOpen(!isRevokeOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Revoke a Certificate:</span>
                <span style={chevronStyle(isRevokeOpen)}>&#8964;</span>
              </div>
              {isRevokeOpen && (
                <div style={accordionBodyStyle}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Certificate</b></u> page, click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Revoke</button>{' '}
                      button. A confirmation dialog box is displayed. Click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
                      to continue and{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
                      if otherwise.
                    </li>
                    <li>A transaction receipt is displayed signifying that transaction is already posted.</li>
                  </ol>
                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={revokeConfirmationDialogBox} alt="Revoke Confirmation Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Revoke Confirmation Dialog Box</div>
                  </div>
                </div>
              )}
            </div>

         
            <div>
              <div style={{ ...accordionHeaderStyle(isDownloadOpen), borderBottom: isDownloadOpen ? '1px solid #ddd' : 'none' }} onClick={() => setIsDownloadOpen(!isDownloadOpen)}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>How to Download .cert.pem and .p12 Certificate:</span>
                <span style={chevronStyle(isDownloadOpen)}>&#8964;</span>
              </div>
              {isDownloadOpen && (
                <div style={{ ...accordionBodyStyle, borderBottom: 'none' }}>
                  <ol style={{ marginLeft: '20px' }}>
                    <li>
                      In <u><b>Edit Certificate</b></u> page, click{' '}
                      <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 12px', borderRadius: '4px', margin: '0 4px' }}>Download</button>{' '}
                      button on the lower part of the form.
                    </li>
                    <li>
                      After clicking the button, a download dialog box is displayed. Click{' '}
                      <button style={{ backgroundColor: '#dddcd7', border: '1px solid #ccc', padding: '2px 12px', borderRadius: '4px', margin: '0 4px' }}>OK</button>{' '}
                      to open/save or{' '}
                      <button style={{ backgroundColor: '#dddcd7', border: '1px solid #ccc', padding: '2px 12px', borderRadius: '4px', margin: '0 4px' }}>Cancel</button>{' '}
                      if otherwise.
                    </li>
                  </ol>
                  <br/>
                  <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={certificateDownloadDialogBox} alt="Certificate Download Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Certificate Download Dialog Box</div>
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

export default CertificateManagement;