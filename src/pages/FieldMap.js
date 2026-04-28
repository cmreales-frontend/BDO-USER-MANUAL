import React from 'react';
import { useState } from 'react';
import fieldMapPage from '../assets/field_map_page.png';
import customFieldMapForm from '../assets/custom_field_map_form.png';
import editCustomFieldMapForm from '../assets/custom_field_map_form1.png';
import fieldMapMultipleDelete from '../assets/custom_field_map_form2.png';

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

const FieldMap = () => {
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);

  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">Field Map</div>
        <div className="content-text">
          <p>
            <i>Field Map</i> handles the creation of custom field maps. This custom field map is used in the generation of a configuration file for merchants who are not complying to the default format of billing files or the old billing file format. Only users with the System Administrator role type can access this page.
          </p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={fieldMapPage} alt="Field Map Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Field Map Page</div>
          </div>

          <h3>How to Create New Custom Field Map:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Go to <u><b>Field Map</b></u>&gt;&gt;<u><b>New Custom Field Map</b></u>. This redirects to Custom Field Map page.
            </li>
            <li>Select institution and bill code.</li>
            <li>Drag each row to arrange the sequence depending on custom field of the merchant.</li>
            <li>Change field length if necessary.</li>
            <li>Change field length to zero if field will not be use.</li>
            <li>
              Click the{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>A transaction receipt is displayed signifying that the transaction is already posted.</li>
          </ol>
          <p><i><b>Note:</b> Field Map approval is not supported. Kindly make sure that all changes are correct before submitting.</i></p>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={customFieldMapForm} alt="Custom Field Map Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} /> 
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Custom Field Map Form</div>
          </div>


           <p>
            For more information, click on{' '}
            <button
              type="button"
              onClick={() => setIsManagePopupVisible(true)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit' }}>
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
                <td><strong>Institution</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the institution the merchants belong to.</td>
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
                <td><strong>Merchant</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the merchant with custom field map.</td>
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
                <td><strong>Field Name</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the field of a billing file.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Draggable</td>
              </tr>
              <tr>
                <td>Dependency:</td>
                <td>Required field</td>
              </tr>
              <tr>
                <td>Field Name:</td>
                <td><strong>Length</strong></td>
              </tr>
              <tr>
                <td>Definition:</td>
                <td>Refers to the length of the field of a billing file.</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Draggable; Numeric</td>
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

          <h3>How to Update Field Map:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select a list from the table in <u><b>Field Map</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to <u><b>Edit Field Map</b></u> page with the details of the selected Institution - Bill code.
            </li>
            <li>
              Update the field/s and click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Submit</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is successful.
            </li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={editCustomFieldMapForm} alt="Edit Custom Field Map Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Custom Field Map Form</div>  
          </div>

          <h3>How to Delete a Field Map:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              In <u><b>Field Map</b></u> page, click <i className="fas fa-eye" style={{ fontSize: '16px', color: '#000' }}></i> button. This redirects to User-Merchant Assignment page with the details.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is posted.
            </li>
          </ol>

          <h3>How to Multiple Delete a Field Map:</h3>
          <ol style={{ marginLeft: '20px' }}>
            <li>
              Select from the list by clicking a row.
            </li>
            <li>
              Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Delete</button>{' '}
              button to submit the transaction. A confirmation dialog box is displayed. Click{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Yes</button>{' '}
              to continue and{' '}
              <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>No</button>{' '}
              if otherwise.
            </li>
            <li>
              A transaction receipt is displayed signifying that the transaction is posted.
            </li>
          </ol>

          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={fieldMapMultipleDelete} alt="Custom Field Map Form" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Custom Field Map Form</div>  
          </div>

        </div>
      </div>
    </div>
  );
};

export default FieldMap;