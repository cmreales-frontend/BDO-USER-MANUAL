import React from "react";
import progressStatusPageImage from "../assets/progress_status_page.png";

const ProgressStatus = () => {
  return (
    <section className="content-section">
      <div className="section-title" style={{ fontSize: "22px" }}>
        4.12.3 PROGRESS STATUS
      </div>

      <p className="content-text" style={{ marginTop: "5px" }}>
        <i>Progress Status</i> shows the progress of today's approved billing files. To redirect to this page, click the <u><b>Billing File Processing &gt;&gt; Progress Status</b></u>.
      </p>

       <div className="section-title" style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px", textAlign: "center" }}>
        Figure 4: Progress Status Page
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
        <img
          src={progressStatusPageImage}
          alt="Progress Status Page"
          style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "4px", width: "100%" }}
        />
      </div>
    </section>
  );
};

export default ProgressStatus;