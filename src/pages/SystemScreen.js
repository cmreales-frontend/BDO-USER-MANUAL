import React from 'react';
import systemScreen from '../assets/system-screen.png';

const imageStyle = {
  border: '1px solid #ccc',
  padding: '5px',
  borderRadius: '4px',
};

const SystemScreen = () => {
  return (
    <div className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>

      <div className="subsection">
        <div className="subsection-title">4.1 SYSTEM SCREEN</div>
        <div className="content-text">
          <p>The BRPS <strong>System Screen</strong> consists of the following items <i>(see Figure 4.1)</i>:</p>
    
          <p><strong>1. Main Menu Navigation</strong> - these buttons are role type specific and letting the user change from functions to functions. These will change according to the user role type.</p>
          <p><strong>2. Menu Navigation Bar</strong> - this also contains menus and submenus.</p>
          <p><strong>3. User Information</strong> - this contains the information of the authenticated user which consist of the following details:</p>
          <ul className="list" style={{ marginLeft: '30px', marginTop: '8px', marginBottom: '8px' }}>
            <li>Username</li>
            <li>Institution Name</li>
            <li>Merchant Name</li>
            <li>Role Name</li>
          </ul>
          
          <p><strong>4. Load Environment Button</strong> - this is the Button to switch merchant.</p>
          <p><strong>5. Notification</strong> - this contains the notifications of the user such as transactions for approval or notification for reports and a notification button to refresh the notification lists.</p>
          <p><strong>6. My Transaction Submitted for Approval Table</strong> - this table contains the user's created transactions that are submitted for approval.</p>
          <p><strong>7. Transaction for my Approval Table</strong> - this table contains the user's lists of transactions for his review and approval.</p>
          <p><strong>8. Approved Transactions</strong> - this table contains the list of approved transactions.</p>
          <p><strong>9. Rejected Transactions</strong> - this table contains the list of rejected transactions.</p>
          <br />
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px' }}>Figure 4.1: System Screen</div>
          <img src={systemScreen} alt="System Screen" style={imageStyle} width="100%" height="100%" />
        </div>
      </div>

    </div>
  );
};

export default SystemScreen;