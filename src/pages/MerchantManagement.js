import React, { useState } from 'react';

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

const MerchantManagement = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.5 MERCHANT MANAGEMENT</div>
        <div className="content-text">
          <p>
            <i>Merchant Management</i> handles the administration of Institution, Merchant,
            Merchant Supported Cards, and Card Types. Only user with a System Administrator role type
            can access these modules.
          </p>
          <p>
            For more information, click on{' '}
            <a href="#" onClick={togglePopupVisibility} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
              Field Details
            </a>.
          </p>

          {isPopupVisible && (
            <>
              <div style={popupOverlayStyle} onClick={togglePopupVisibility} />
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
                      <td><strong>Institution Code</strong></td>
                    </tr>
                    <tr>
                      <td>Definition:</td>
                      <td>Refers to the institution the merchant belongs to.</td>
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
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantManagement;