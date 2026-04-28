import React from 'react';
import homePage from '../assets/home-page.png';

const HomePage = () => {
  return (
    <div className="content-section">

      <div className="subsection">
        <div className="subsection-title">Home Page</div>
        <div className="content-text">
          <p>
            The <strong>Home Page</strong> is the main page loaded by the system upon successful login and
            loading of merchant environment. It contains approval queue list and a table for Approved and
            Rejected Transactions.
          </p>
          <br/>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={homePage} style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }}/>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Home Page (System Admin User Homepage)</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;