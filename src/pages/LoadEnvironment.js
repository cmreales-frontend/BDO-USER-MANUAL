import React from 'react';
import loadEnvironment from '../assets/load-system.png';

const LoadEnvironment = () => {
  return (
    <div className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>

      <div className="subsection">
        <div className="subsection-title">4.3 LOAD ENVIRONMENT</div>
        <div className="content-text">
          <p>
            Switch Merchant Page consists of all merchants and corresponding role assigned to logged in user <i>(see Figure 4.4)</i>. It is only displayed if user logged in has many merchants assigned to him/her.</p>
          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.4: Load Environment Page</div>
          <img src={loadEnvironment} alt="Load Environment"style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
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
      </div>

    </div>
  );
};

export default LoadEnvironment;