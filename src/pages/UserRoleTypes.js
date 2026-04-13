import React from "react";

const UserRoleTypes = () => {
  return (
    <div className="content-section">
        <div className="subsection">
            <div className="subsection-title">User Role Types</div>
        </div>

      <div className="subsection">
        <div className="subsection-title">System Administrator</div>
        <p className="content-text">
          System Administrator role type can access all BRPS modules except for Billing File Upload.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">User Administrator</div>
        <p className="content-text">
          User Administrator role type handles User Management, Roles &amp; Privileges Management and
          User-Merchant Assignment Management.
        </p>
      </div>

      <div className="subsection">
        <div className="subsection-title">User</div>
        <p className="content-text">
          User role type is considered the processors in BRPS system. They are responsible for uploading
          and processing the billing files. Their access includes Billing File Processing, Post Transaction,
          History and Reports.
        </p>
      </div>

   </div>
  );
};

export default UserRoleTypes;