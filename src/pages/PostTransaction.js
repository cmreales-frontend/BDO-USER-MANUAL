import React from 'react';

const PostTransaction = () => {
  return (
    <div className="content-section">
      <div className="section-title" style={{ fontSize: '22px' }}>4. FUNCTIONALITIES</div>
      <div className="subsection">
        <div className="subsection-title">4.13 POST TRANSACTION</div>
        <div className="content-text">
          <p>
            <i>Post Transaction</i> handles posting of single transactions whether it is immediate or future dated. Only users with User role type can have privilege to access this module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostTransaction;