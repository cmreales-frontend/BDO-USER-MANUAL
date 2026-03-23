import React from 'react';
import loginPage from '../assets/login-page.png';
import loginBoxImage from '../assets/login-box.png';

const Login = () => {
  return (
    <div className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>

      <div className="subsection">
        <div className="subsection-title">4.2 LOGIN</div>
        <div className="content-text">
          <p>
            To access BRPS application, enter web address in web browser. After entering the web address,
            BRPS web login page is displayed <i>(see Figure 4.2)</i>. BRPS login page consists of login box.
          </p>
          <br />
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.2: Login Page</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <img src={loginPage} alt="Figure 4.2 Login Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '40%' }} />
          </div>
          <p>
            Access to the BRPS system is allowed only to its authorized users. To avoid an unauthorized user to utilize it, one must first successfully login to the system. This can be done by completely filling-out the fields on the login box with valid information <i>(see Figure 4.3)</i>.
          </p>

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

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '15px', textAlign: 'center' }}>Figure 4.3: Login Box</div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
            <img src={loginBoxImage} alt="Login Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '40%' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <table className="command-syntax-table">
              <thead>
                <tr><th colSpan="2">Field Details</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Field Name:</td>
                  <td><b>Username</b></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the username of the authorized user accessing the system.</td>
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
                  <td>Username must be active and validated by the verifier of the system.</td>
                </tr>
                <tr>
                  <td>Field Name:</td>
                  <td><b>Password</b></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the encrypted code of the user in accessing the system. For security purposes, a dot will be displayed for every character inputted in this field.</td>
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
                  <td>Username must be active and validated by the verifier of the system.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;