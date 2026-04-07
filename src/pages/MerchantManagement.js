import React, { useState } from 'react';


const MerchantManagement = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="content-section">
    
      <div className="subsection">
        <div className="subsection-title">Merchant Management</div>
        <div className="content-text">
          <p>
            <i>Merchant Management</i> handles the administration of Institution, Merchant,
            Merchant Supported Cards, and Card Types. Only user with a System Administrator role type
            can access these modules.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default MerchantManagement;