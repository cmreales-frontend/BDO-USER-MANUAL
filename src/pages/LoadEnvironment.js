import React, { useState } from 'react';
import loadEnvironment from '../assets/load-system.png';

const LoadEnvironment = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="content-section">

      <div className="subsection">
        <div className="subsection-title">Load Environment</div>
        <div className="content-text">
          <p>
          Switch Merchant Page consists of all merchants and corresponding role assigned to logged in user <i>(see Figure 4.4)</i>. It is only displayed if user logged in has many merchants assigned to him/her.
          For more information, click on <button type="button" onClick={togglePopupVisibility} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit' }}>Field Details</button>.
        </p>
          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={loadEnvironment} alt="Load Environment"style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }}/>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Load Environment Page</div>
        </div>
        
        {isPopupVisible && (
          <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'white', 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '20px', 
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}>
            <table className="command-syntax-table">
              <thead>
                <tr><th colSpan="2">Field Details</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Field Name:</td>
                  <td><b>Search</b></td>
                </tr>
                <tr>
                  <td>Definition:</td>
                  <td>Field query input for the Assigned Merchant table to retrieve related information on below listing.</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Alphanumeric</td>
                </tr>
                <tr>
                  <td>Dependency:</td>
                  <td>Username must be active and validated by the verifier of the system.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {isPopupVisible && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 999,
            cursor: 'pointer'
          }} 
          onClick={togglePopupVisibility} />
        )}
        </div>
      </div>
    </div>
  );
};

export default LoadEnvironment;