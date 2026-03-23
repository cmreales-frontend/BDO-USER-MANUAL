import React from 'react';
import rolesAndPrivilegesPage from '../assets/roles_and_privileges_page.png';
import newRolePage from '../assets/new_role_page.png';
import editRolePage from '../assets/roles_update_details_page.png';
import rolesMultipleDelete from '../assets/roles_multiple_delete.png';
import privilegesDetailsPage from '../assets/privileges_details_page.png';

const imgWrapper = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const RolesManagement = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.6.2 ROLES AND PRIVILEGES</div>
        <div className="content-text">
          <p>This is where the user can create, edit, update, and delete system users. To navigate this page, go to <b>User Management&gt;&gt;Roles and Privileges.</b></p>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.40: Roles and Privileges Page</div>
          <div style={imgWrapper}>
            <img src={rolesAndPrivilegesPage} alt="Roles and Privileges Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>

          <h3>How to Create New Role:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <b>User Management</b>&gt;&gt;<b>Roles and Privileges</b>&gt;&gt;<u><b>New Role</b></u> page (see <i>Figure 4.41</i>).
            </li>
            <li>
              Supply the fields and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.41: New Role Page</div>
          <div style={imgWrapper}>
            <img src={newRolePage} alt="New Role Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
           
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
              <tr>
                <td>Field Name:</td>
                <td><strong>Function Type</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the function type of role; whether it is Maker, Verifier or both.</td>
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

          <h3>How to Update Role:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.40</i>). This redirects to Edit Role page with the details of the selected role (see <i>Figure 4.42</i>).
            </li>
            <li>
              Update the fields and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.42: Roles Update Details Page</div>
          <div style={imgWrapper}>
            <img src={editRolePage} alt="Roles Update Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>

          <h3>How to Delete Role:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.42</i>). This redirects to Edit Role page with the details of the selected role (see <i>Figure 4.38</i>).
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <h3>How to Delete Multiple Role:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In roles and privileges management page, select a role on the list by clicking a row (see <i>Figure 4.43</i>).
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.43: Roles Multiple Delete</div>
          <div style={imgWrapper}>
            <img src={rolesMultipleDelete} alt="Roles Multiple Delete" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>

          <h3>How to Update Privileges</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Roles and Privileges Management</b></u> page, click <i className="fas fa-cog" style={{ fontSize: '16px', color: '#000' }}></i> button (see <i>Figure 4.40</i>). This redirects to Privilege Management Page with the details of the selected role (see <i>Figure 4.44</i>).
            </li>
            <li>
              On the <u><b>Available Privileges</b></u> pane, select the modules by ticking the checkbox.
            </li>
            <li>
              Click the &#x276F; button to transfer the modules to the <u><b>Selected Privileges</b></u> pane.
            </li>
            <li>
              To remove the modules from <u><b>Selected Privileges,</b></u> select the modules by ticking the checkbox. Then, click the &#x276E; button to transfer it back to <u><b>Available Privileges</b></u> or just click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Reset</button>{' '}
              button.
            </li>
            <li>
              Click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Update</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed (see <i>Figure 4.18</i>). Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is for approval (see <i>Figure 4.19</i>).
            </li>
          </ol>
          <p><i><u><b>NOTE:</b></u> Please see Appendix C for more information on user roles and privileges.</i></p>

          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.44: Privileges Details Page</div>
          <div style={imgWrapper}>
            <img src={privilegesDetailsPage} alt="Privileges Details Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>

          <h3>How to Delete Privileges:</h3>
          <p>Upon deletion of a role in Role Management, privileges assigned to that role will also be deleted.</p>

        </div>
      </div>
    </div>
  );
};

export default RolesManagement;