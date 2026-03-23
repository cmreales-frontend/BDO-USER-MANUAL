import React from "react";
import userProfilePage from "../assets/user_profile_page.png";
import userChangePasswordPage from "../assets/user_change_password_page.png";
import confirmationDialogBox from "../assets/confirmation_dialog_box.png";  
import confirmationReceipt from "../assets/confirmation_receipt.png";

const Profile = () => {
const imgWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0",
};

  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.11 PROFILE
      </div>

      <p className="content-text" style={{ marginTop: "10px" }}>
        <i>Profile</i> handles the personal details of a user. The user can also change his/her password using the change password in profile page if he/she is Non-LDAP user.
      </p>

      <h4>How to Go to User Information (Profile):</h4>
      <p className="content-text">
        In navigation tab, click <i className="fas fa-info"></i> button on the upper right. This redirects you to <u><strong>Profile</strong></u> Page.
      </p>

     
       <div className="section-title" style={{ fontSize: '16px', marginTop: '5px', marginBottom: '5px', textAlign: 'center' }}>Figure 4: User Profile Page</div>
          <div style={imgWrapper}>
            <img src={userProfilePage} alt="User Profile Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>How to Change User Password:</h4>
        <ol style={{ paddingLeft: "40px" }}>
          <li style={{ marginBottom: "1px" }}>
            Go to <strong>User Profile &gt;&gt; Change Password</strong> page. This redirects you to Change Password page (see <strong>Figure 4.76</strong>).
          </li>
          <li style={{ marginBottom: "1px" }}>
            Supply the fields or click <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Generate</button> button to generate random password.
          </li>
          <li style={{ marginBottom: "1px" }}>
            Click <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Update</button> button to submit the transaction. A confirmation dialog box is displayed (see <strong>Figure 4.77</strong>). Click <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ccc",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>Yes</button> to continue and <button style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "1px solid #ffc107",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}>No</button> if otherwise.
          </li>
          <li style={{ marginBottom: "1px" }}>
            A transaction receipt is displayed instructing the user to log out and log in again (see <strong>Figure 4.78</strong>).
          </li>
        </ol>

        <p className="content-text" style={{ marginTop: "16px" }}>
          <strong>Note:</strong> Changing of own password does <strong>Not</strong> need an approval and is only allowed once per day. It is directly committing the changes in the system. Password should confirm BDO security stated below:
        </p>

        <ul className="content-text" style={{ marginTop: "10px", paddingLeft: "40px" }}>
          <li>Password should be 12 characters</li>
          <li>Should contain at least 1 Uppercase letter</li>
          <li>Should contain at least 1 Numeric character</li>
          <li>Should contain at least 1 Special character</li>
          <li>Should <strong>Not</strong> be a used password for the last 4 Updates</li>
        </ul>

        <div style={{ marginTop: "20px" }}>
          <h4 className="section-title" style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>
            Figure 4: User Change Password Page
          </h4>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={userChangePasswordPage}
              alt="User Change Password Page"
              style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "100%" }}
            />
          </div>

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
                <td>Refers to the username of the user that the password will be changed.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Disabled textbox</td>
              </tr>
              <tr>
                <td>Dependency:</td>
                <td>Required field</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Old Password</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the initial password/old password of the user used to sign in</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Minimum Length:</td>
                <td>12</td>
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
                <td><strong>New Password</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the new password of the user</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Alphanumeric</td>
              </tr>
              <tr>
                <td>Minimum Length:</td>
                <td>12</td>
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
                <td>12</td>
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
                <td>12</td>
              </tr>
            </tbody>
            </table>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4 className="section-title" style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>
            Figure 4: Confirmation Dialog Box
          </h4>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={confirmationDialogBox}
              alt="Confirmation Dialog Box"
              style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "50%" }}/>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4 className="section-title" style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>
            Figure 4: Confirmation Receipt
          </h4>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={confirmationReceipt}
              alt="Confirmation Receipt"
              style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "70%" }}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;