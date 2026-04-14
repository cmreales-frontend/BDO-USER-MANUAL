import React from "react";
import { useState } from "react";
import reportsPageImage from '../assets/reports_page_as_system_administrator.png';
import reportsPageAsUserImage from '../assets/reports_page_as_user_user_administrator.png';
import downloadDialogImage from '../assets/download_dialog_box1.png';

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

const MerchantReportsPage = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <section className="content-section">
      <div className="subsection-title">Merchant Reports</div>

      <p className="content-text" style={{ marginTop: '5px' }}>
        <em>Merchant Reports</em> handles the downloading of the merchant billing zipped reports. All role types can
        have the privilege in accessing this module.
      </p>
      <p className="content-text" style={{ marginTop: '5px' }}>
        Merchant Report is the return file of the processed billing file. This report consists of details of the
        completed billing file, the approved and rejected transaction summary, the proof list, and the detailed proof
        list.
      </p>


      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={reportsPageImage} alt="Reports Page as System Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Report Page as System Administrator</div>
      </div>
      
      <br/>
      <p>
        For more information, click on{' '}
        <button
          type="button"
          onClick={() => setIsManagePopupVisible(true)}
          style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0 }}>
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
                  <td><strong>Bill Code</strong></td>
                  </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Refers to the code of desired merchant which needs to view reports.</td>
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
              </tbody>
            </table>
          </div>
        </>
      )}

      <br/>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={reportsPageAsUserImage} alt="Reports Page as User/User Administrator" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Reports Page as User/User Administrator</div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <p className="content-text" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          How to Download Billing Zipped Reports as System Administrator role type:
        </p>
        <ol className="content-text" style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
          <li>
            In <strong><u>Reports&gt;&gt;Merchant Reports</u></strong> menu. This will redirect to the Merchant Reports (<em>see Figure 4.67</em>).
          </li>
          <li>
            Then, in reports page, input desired <strong>Bill code</strong>, click{' '}
            <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
            button.
          </li>
          <li>
            Then, available reports are displayed. At the reports list, click <strong>&#11015;</strong> button.
          </li>
          <li>
            After clicking the button, a download dialog box is displayed (<em>see Figure 4.69</em>). Click{' '}
            <button style={{ backgroundColor: '#c5c3c3', border: '1px solid #999', padding: '2px 10px', fontSize: '12px', borderRadius: '3px', cursor: 'default' }}>OK</button>{' '}
            to open/save or{' '}
            <button style={{ backgroundColor: '#c5c3c3', border: '1px solid #999', padding: '2px 10px', fontSize: '12px', borderRadius: '3px', cursor: 'default' }}>Cancel</button>{' '}
            if otherwise.
          </li>
        </ol>

        <p className="content-text" style={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>
          How to Download Merchant Billing Zipped Reports as User/User Administrator role type:
        </p>
        <ol className="content-text" style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
          <li>
            In <strong><u>Reports&gt;&gt;Merchant Reports</u></strong> menu. This will redirect to the Merchant Reports (<em>see Figure 4.68</em>).
          </li>
          <li>
            Then, available reports are displayed in reports page. At the reports list, click <strong>&#11015;</strong> button.
          </li>
          <li>
            After clicking the button, a download dialog box is displayed (<em>see Figure 4.69</em>). Click{' '}
            <button style={{ backgroundColor: '#c5c3c3', border: '1px solid #999', padding: '2px 10px', fontSize: '12px', borderRadius: '3px', cursor: 'default' }}>OK</button>{' '}
            to open/save or{' '}
            <button style={{ backgroundColor: '#c5c3c3', border: '1px solid #999', padding: '2px 10px', fontSize: '12px', borderRadius: '3px', cursor: 'default' }}>Cancel</button>{' '}
            if otherwise. See Appendix D for generated Merchant Report file sample.
          </li>
        </ol>

        <p className="content-text" style={{ marginTop: '10px' }}>
          <em><strong>Note:</strong> All reports and other files will be shown within the retention period of 6 months. Download dialog box may differ from different browsers.</em>
        </p>

        <p className="content-text" style={{ marginTop: '5px' }}>
          <em>Merchant Password convention: MID-username</em><br />
          <em>for BDOUser: User account password</em>
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={downloadDialogImage} alt="Download Dialog Box" className="merchant-reports-image" style={{ width: '50%' }} />
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Download Dialog Box</div>
      </div>

    </section>
  );
};

export default MerchantReportsPage;