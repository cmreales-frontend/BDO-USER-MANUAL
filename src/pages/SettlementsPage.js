import React from "react";
import downloadDialogBox from "../assets/download_dialog_box1.png";
import settlementReportPage from "../assets/settlement_report_page.png";


const SettlementsPage = () => {
  const imgWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
  };


  return (
    <section className="content-section">

      <div className="section-title" style={{ fontSize: '22px' }}>4.10.3 SETTLEMENTS</div>

      <p className="content-text" style={{ marginTop: '10px' }}>
        <i>Settlements</i> manage the merchant’s unsettled billing file zip reports download. All role types can have the privilege in accessing this module.
      </p>
      <p className="content-text" style={{ marginTop: '10px' }}>
        The Unsettled Transaction tables show the unsettled transaction report of each billing file that is ready for download. This is use for manual resettlement. Includes the extracted unsettled transaction file and the unsettled transaction summary.
      </p>

    
          <div className="section-title" style={{ fontSize: '16px', marginTop: '5px', marginBottom: '5px', textAlign: 'center' }}>Figure 4.70: Settlement Report Page</div>
          <div style={imgWrapper}>
            <img src={settlementReportPage} alt="Settlement Report Page" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '100%' }} />
            
          </div>
          <div style={{ marginTop: '20px' }}>
            <h4>How to Download Unsettled Reports:</h4>
            <ol style={{ paddingLeft: '40px' }}>
              <li style={{ marginBottom: '1px' }}>
                In <strong>Reports &gt;&gt; Settlement Report</strong> page, click  
                <i className=" fas fa-download "></i> 
                button on the lower part of the form (see <strong>Figure 4.70</strong>).
              </li>
              
              <li style={{ marginBottom: '1px' }}>
                After clicking the button, a download dialog box is displayed (see <strong>Figure 4.71</strong>). Click 
                <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}> OK </button> 
                to open/save or <button style={{ backgroundColor: '#FFD700', border: '1px solid #ccc', padding: '2px 6px', borderRadius: '4px' }}>Cancel</button> if otherwise. See Appendix D for generated Extracted Unsettled Report sample.
              </li>
            </ol>
          </div>

          <div className="section-title" style={{ fontSize: '16px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Figure 4.71: Download Dialog Box</div>
          <div style={imgWrapper}>
            <img src={downloadDialogBox} alt="Download Dialog Box" style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px', width: '50%' }} />
          </div>


    </section>
    
  );
};

export default SettlementsPage;