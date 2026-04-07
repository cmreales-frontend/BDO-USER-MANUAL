import React from 'react';
import loadEnvironmentIcon from '../assets/load_environment.png';
import inactiveIcon from '../assets/inactive.png';
import appendIcon from '../assets/append.png';
import privilegesIcon from '../assets/privileges.png';
import transferIcon from '../assets/transfer.png';
import partialFileIcon from '../assets/partial_file.png';
import aboutIcon from '../assets/about.png';
import switchMerchantIcon from '../assets/switch_merchant.png';
import amexToggleIcon from '../assets/amex.png';
import cupToggleIcon from '../assets/cup.png';
import dinersToggleIcon from '../assets/diners.png';
import jcbToggleIcon from '../assets/JCB.png';
import mastercardToggleIcon from '../assets/mastercard.png';
import visaToggleIcon from '../assets/visa.png';

const Introduction = () => {
  return (
    <div className="content-section">

      <div className="subsection">
        <div className="subsection-title">Introduction</div>
        <p className="content-text" style={{ marginTop: '5px' }}>
          This manual contains an overview on how <strong>BRPS Payment Processor</strong> operates. To guide its users,
          this provides the module's complete description, its execution procedure with sample screens
          and description of each entry field for every module.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">General Information</div>
        <p className="content-text">
          BRPS is a web-based system that processes batch BRPS billing files, scheduled billing files,
          single transactions, and scheduled single transactions coming from BRPS merchants to obtain
          approval codes from the issuers (whether the issuer is on-us or off-us issuers).
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Audience Description</div>
        <p className="content-text">
          The intended user of the system must be knowledgeable in standard banking operations/transactions
          and computer-literate. This manual serves as a guide for the next BRPS users who will continue
          to use the system.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Stylistic Convention</div>
        <p className="content-text">
          For a better understanding of the commands used, sample screens captured from the actual
          running program are provided. Discussion of items on the screen is located on the shaded
          portion of this document.
        </p>
        
        <p className="content-text">The following styles are used.</p>
        <p className="content-text">
          <u><strong>Bold</strong></u> for menu name and button name.
        </p>
        <p className="content-text">
          <strong>Bold</strong> for textbox name and also used to highlight words.
        </p>
        <p className="content-text">
          <i>Italic</i> for screen item properties (shaded portions), cross references, and Notes.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Command Syntax Convention</div>
        <p className="content-text">
          The table below shows the buttons and icons found in the system and its purpose. Some of the
          buttons/icons display a brief description while the mouse pointer rests on top of it, commonly
          known as the tooltip.
        </p>

        <table className="command-syntax-table">
          <thead>
            <tr>
              <th>BUTTON</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="button-cell">
                <i className="fas fa-home" style={{ fontSize: '32px', color: '#003d7a' }}></i>
              </td>
              <td>The <u><strong>Home</strong></u> button redirects the user to the home page, which contains the transactions for approval submitted by the maker user. In this page the user can view, approve and decline the transactions depending on its user function i.e. Maker, Verifier and Maker/Verifier.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <i className="fas fa-sign-out-alt" style={{ fontSize: '32px', color: '#003d7a' }}></i>
              </td>
              <td>The <u><strong>Log Out</strong></u> button closes the last authenticated session and redirects the user to the sign-in page.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-login">LOGIN</button>
              </td>
              <td>The <u><strong>Login</strong></u> button validates the entered login ID and password prior to accessing the Portable Payment Processor.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#003d7a' }}>&lt;</span>
              </td>
              <td>The <u><strong>Previous</strong></u> button allows the user to go back to the previous page of the data list.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#003d7a' }}>&gt;</span>
              </td>
              <td>The <u><strong>Next</strong></u> button allows the user to go to the next page of the data list.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <span style={{ fontSize: '14px', color: '#003d7a', fontWeight: 'bold' }}>1 2 3 4 5 6 7</span>
              </td>
              <td>The <u><strong>[1]</strong></u> button allows the user to select a page number in the list of data. This button is regularly found between Previous and Next buttons.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-decline">Decline</button>
              </td>
              <td>The <u><strong>Decline</strong></u> button rejects the transactions submitted by the maker.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-approve">Approve</button>
              </td>
              <td>The <u><strong>Approve</strong></u> button approves the transactions submitted by the maker.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-yes">Yes</button>
              </td>
              <td>The <u><strong>Yes</strong></u> button is a confirmation button usually found in a confirmation dialog box.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-no">No</button>
              </td>
              <td>The <u><strong>No</strong></u> button is a confirmation button usually found in a confirmation dialog box.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-submit">Submit</button>
              </td>
              <td>The <u><strong>Submit</strong></u> button allows the user to submit the new transactions for approval.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-update">Update</button>
              </td>
              <td>The <u><strong>Update</strong></u> button allows the user to submit the updated fields for approval.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-delete">Delete</button>
              </td>
              <td>The <u><strong>Delete</strong></u> button allows the user to delete the selected listing for approval.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-search">Search</button>
              </td>
              <td>The <u><strong>Search</strong></u> button allows the user to filter transactions based on its criteria.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-x">X</button>
              </td>
              <td>The <u><strong>x</strong></u> button allows the user to close dialog boxes or pop-up pages.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-generate">Generate</button>
              </td>
              <td>The <u><strong>Generate</strong></u> button allows the user to randomly generate a password for the user.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-clear">Clear</button>
              </td>
              <td>The <u><strong>Clear</strong></u> button allows the user to clear fields in a form or text boxes.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={inactiveIcon} alt="Inactive" width="80" height="25" />
              </td>
              <td>The <u><strong>Inactive</strong></u> flag button allows the user to set the option to inactive.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={appendIcon} alt="Append" width="80" height="35" />
              </td>
              <td>The <u><strong>Append</strong></u> flag button allows the user to set the option to active.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-overwrite">Overwrite</button>
              </td>
              <td>The <u><strong>Overwrite</strong></u> flag button allows the user to overwrite transactions into the scheduled billing file.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-left_arrow">←</button>
              </td>
              <td>The <u><strong>Left Arrow</strong></u> button allows the user to go back to the previous page.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-refresh">Refresh</button>
              </td>
              <td>The <u><strong>Refresh</strong></u> button allows the user to refresh the list of Notifications.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <i className="fas fa-eye" style={{ fontSize: '24px', color: '#333' }}></i>
              </td>
              <td>The <u><strong>View</strong></u> button allows the user to retrieve and view the details of the selected transaction.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <i className="fas fa-key" style={{ fontSize: '24px', color: '#333' }}></i>
              </td>
              <td>The <u><strong>Key</strong></u> button redirects to the Force Change Password page.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <i className="fas fa-download" style={{ fontSize: '24px', color: '#333' }}></i>
              </td>
              <td>The <u><strong>Download</strong></u> button allows the user to download a report.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={loadEnvironmentIcon} alt="Load Environment" width="80" height="50" />
              </td>
              <td>The <u><strong>Load Environment</strong></u> button allows the user to enter a selected merchant environment.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={privilegesIcon} alt="Privileges" width="40" height="30" />
              </td>
              <td>The <u><strong>Privileges</strong></u> button redirects the user to the privileges page that is used to assign modules in a role.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={transferIcon} alt="Transfer" width="60" height="30" />
              </td>
              <td>The <u><strong>Transfer</strong></u> buttons allow the user to transfer privileges from the list of available privileges into the list of selected privileges.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-select">Select</button>
              </td>
              <td>The <u><strong>Select</strong></u> button allows the user to select a .bf file for upload.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-upload">Upload</button>
              </td>
              <td>The <u><strong>Upload</strong></u> button allows the user to upload a file for approval.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={partialFileIcon} alt="Partial File" width="50" height="40" />
              </td>
              <td>The <u><strong>Partial File</strong></u> toggle is to tag the file to upload it for partial upload.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={aboutIcon} alt="About" width="50" height="40" />
              </td>
              <td>The <u><strong>About</strong></u> button allows the user to view the information all about the system.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={switchMerchantIcon} alt="Switch Merchant" width="80" height="50" />
              </td>
              <td>The <u><strong>Switch Merchant</strong></u> button allows the user to switch from one merchant to another.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-export">Export</button>
              </td>
              <td>The <u><strong>Export</strong></u> button allows the user to download the list from the table.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-confirm">Confirm</button>
              </td>
              <td>The <u><strong>Confirm</strong></u> button allows the user to accept the message in the dialog box.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-create">Create</button>
              </td>
              <td>The <u><strong>Create</strong></u> in the new supported card is to submit the new supported card for approval.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <button className="btn-reset">Reset</button>
              </td>
              <td>The <u><strong>Reset</strong></u> in the supported card is to clear the new selection and move back to the previous selection.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={amexToggleIcon} alt="AMEX Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>AMEX Toggle</strong></u> button allows the user to toggle the AMEX card support on or off.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={cupToggleIcon} alt="CUP Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>CUP Toggle</strong></u> in the supported card is to turn on or off the file indicator if the CUP card is selected.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={dinersToggleIcon} alt="Diners Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>Diners Toggle</strong></u> in the supported card is to turn on or off the file indicator if the Diners card is selected.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={jcbToggleIcon} alt="JCB Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>JCB Toggle</strong></u> in the supported card is to turn on or off the file indicator if the JCB card is selected.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={mastercardToggleIcon} alt="Mastercard Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>Mastercard Toggle</strong></u> in the supported card is to turn on or off the file indicator if the Mastercard is selected.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <img src={visaToggleIcon} alt="Visa Toggle" width="60" height="50" />
              </td>
              <td>The <u><strong>Visa Toggle</strong></u> in the supported card is to turn on or off the file indicator if the Visa card is selected.</td>
            </tr>
            <tr>
              <td className="button-cell">
                <span style={{ fontSize: '7px', color: '#003d7a', fontWeight: 'bold' }}>Previous 1 2 3 4 5... 14 Next</span>
              </td>
              <td>The <u><strong>Pagination Button</strong></u> button allows the user to select a page number in the list of data. This button is regularly found between Previous and Next buttons.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Introduction;