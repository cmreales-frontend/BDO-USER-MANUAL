import React, { useState } from 'react';
import loginPage from '../assets/login-page.png';

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

const Login = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="content-section">
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4.2 LOGIN</h2>
      <p>
        To access BRPS application, enter web address in web browser. After entering the web address, BRPS web login page is displayed (see Figure 4.2). BRPS login page consists of login box.
      </p>
      <br/>
      <div className="section-title" style={{ fontSize: '16px', marginBottom: '5px', textAlign: 'left' }}>Figure 4.2: Login Page</div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={loginPage} alt="Figure 4.2: Login Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '40%' }} />
      </div>
      <p>
        Access to the BRPS system is allowed only to its authorized users. To avoid an unauthorized user to utilize it, one must first successfully login to the system. This can be done by completely filling-out the fields on the login box with valid information <i>(see Figure 4.3)</i>.
      </p>

      <p>
        For more information, click on{' '}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setIsPopupVisible(true); }}
          style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
        >
          Field Details
        </a>.
      </p>

      {isPopupVisible && (
        <>
          <div style={popupOverlayStyle} onClick={() => setIsPopupVisible(false)} />
          <div style={popupBoxStyle}>
            <table className="command-syntax-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th colSpan="2" style={{ textAlign: 'center' }}>Field Details</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Field Name:</td><td><strong>Username</strong></td></tr>
                <tr><td>Definition:</td><td>Refers to the username of the authorized user accessing the system.</td></tr>
                <tr><td>Type:</td><td>Alphanumeric</td></tr>
                <tr><td>Maximum Length:</td><td>32</td></tr>
                <tr><td>Dependency:</td><td>Username must be active and validated by the verifier of the system.</td></tr>

                <tr><td>Field Name:</td><td><strong>Password</strong></td></tr>
                <tr><td>Definition:</td><td>Refers to the encrypted code of the user in accessing the system. For security purposes, a dot will be displayed for every character inputted in this field.</td></tr>
                <tr><td>Type:</td><td>Alphanumeric</td></tr>
                <tr><td>Minimum Length:</td><td>8</td></tr>
                <tr><td>Maximum Length:</td><td>128</td></tr>
                <tr><td>Dependency:</td><td>Username must be active and validated by the verifier of the system.</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      <p><strong>How to login:</strong></p>
      <ol style={{ marginLeft: '20px' }}>
        <li>Input the <strong>Username</strong> in the username field.</li>
        <li>Input the user's <strong>Password</strong> in the password field.</li>
        <li>Click on the <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>LOGIN</button> button to validate the entries.
          <ol type="a" style={{ marginLeft: '20px' }}>
            <li>If the information provided are valid and the user has a single assigned merchant, it will go directly to the home page <i>(see Figure 4.1)</i>.</li>
            <li>If the information provided are valid and the user has multiple assigned merchants, a <u><strong>Load Environment</strong></u> page will show <i>(see Figure 4.4)</i>.</li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Login;