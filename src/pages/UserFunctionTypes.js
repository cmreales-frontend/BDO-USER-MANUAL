import React from 'react';

const UserFunctionTypes = () => {
  return (
    <div className="content-section">
      <div className="subsection">
        <div className="subsection-title">User Function Types</div>
      </div>
      <div className="subsection">
        <div className="subsection-title">Maker</div>
        <p className="content-text">
          <i>Maker</i> function type is the one who creates transactions. To post successfully his/her created
          transaction, he/she needs to wait for the verifier to approve it.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Verifier</div>
        <p className="content-text">
          <i>Verifier</i> function type is the one who approves created transactions by maker. After he/she
          approves specific transaction, it will be posted successfully to BRPS system. </p>
      </div>

        <div className="subsection">
        <div className="subsection-title">Maker/Verifier</div>
        <p className="content-text">
          <i>Maker/Verifier</i> function type can create transactions and at the same time approve his/her
          created transactions.
        </p>
      </div>
    </div>
  );
};

export default UserFunctionTypes;