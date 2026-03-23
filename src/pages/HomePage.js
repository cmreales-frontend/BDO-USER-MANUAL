import React from 'react';
import homePage from '../assets/home-page.png';

const HomePage = () => {
  return (
    <div className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>

      <div className="subsection">
        <div className="subsection-title">4.4 HOME PAGE</div>
        <div className="content-text">
          <p>
            The <strong>Home Page</strong> is the main page loaded by the system upon successful login and
            loading of merchant environment. It contains approval queue list and a table for Approved and
            Rejected Transactions<i> (see Figure 4.5).</i>
          </p>
          <br/>
          <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.5: Home Page (System Admin User Homepage)</div>
          <img src={homePage} alt="Figure 4.5: Home Page (System Admin User Homepage)" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }}/>
        </div>
      </div>

    </div>
  );
};

export default HomePage;