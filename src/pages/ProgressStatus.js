import React from "react";
import progressStatusPageImage from "../assets/progress_status_page.png";

const ProgressStatus = () => {
  return (
    <section className="content-section">
      <div className="subsection-title">Progress Status</div>

      <p className="content-text">
        <i>Progress Status</i> shows the progress of today's approved billing files. To redirect to this page, click the <u><b>Billing File Processing &gt;&gt; Progress Status</b></u>.
      </p>

      
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={progressStatusPageImage} alt="Progress Status Page" style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "100%" }}/>
      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Progress Status Page</div>
      </div>
    </section>
  );
};

export default ProgressStatus;