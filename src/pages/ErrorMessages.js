import React from 'react';

const ErrorMessages = () => {
  return (
    <section className="content-section">
      <div className="subsection">
         <div className="subsection-title">Error Messages</div>

        <table className="command-syntax-table">
          <thead>
            <tr>
              <th>Error Code:</th>
              <th>Error Message Receipts:</th>
              <th>Meaning:</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>"7007"</td>
              <td>"Message cannot be parsed| - Kindly refresh the page."</td>
              <td>The system is experiencing an error in reading app side transaction messages.</td>
            </tr>

            <tr>
              <td>"7008"</td>
              <td>"Service not available| - Services are not available for the merchant at this time. Try again later."</td>
              <td>Merchant role login is currently not in schedule. Please Contact the System Administrator to change the schedule.</td>
            </tr>

            <tr>
              <td>"7009"</td>
              <td>"Service not available| Merchant status is disabled. Kindly contact BDO."</td>
              <td>Merchant role is disabled. Please Contact the System Administrator to change the enable the Merchant.</td>
            </tr>

            <tr>
              <td>"7010"</td>
              <td>"System Timed Out| No response from the P3 Application Server~"</td>
              <td>The system is not able to connect with the application server. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7011"</td>
              <td>"File Validation Error | File decryption validation error~"</td>
              <td>The uploaded billing file yields a decryption validation error. Please Contact the System Administrator</td>
            </tr>

            <tr>
              <td>"7012"</td>
              <td>"Field Map Error | Field Map validation error~"</td>
              <td>The field map used in parsing the uploaded billing file yields an error. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7013"</td>
              <td>"File is not yet ready | File is not yet ready for download~"</td>
              <td>The app is still processing the file to be downloaded and has not yet reached the designated download directory. Please wait until the processing is completed.</td>
            </tr>

            <tr>
              <td>"7014"</td>
              <td>"File does not exist | File does not exist, or it may have been move already~"</td>
              <td>The file to be downloaded could not be found. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7015"</td>
              <td>"File already exist | File is already existing~"</td>
              <td>Filename used already been uploaded. Kindly upload a different filename.</td>
            </tr>

            <tr>
              <td>"7016"</td>
              <td>"Error generating CA | Encountered error in generating CA, checko system logs~"</td>
              <td>Logging in as a System Administrator is a non-BDO platform (i.e. P3.1 "merchant" platform) yields this error.</td>
            </tr>

            <tr>
              <td>"7017"</td>
              <td>"Invalid Username and Password|"</td>
              <td>Unrecognized username and/or password. Please input the correct username or password to login.</td>
            </tr>

            <tr>
              <td>"7018"</td>
              <td>"Error Connecting to LDAP Server|"</td>
              <td>P3 web is not able to connect with the LDAP server. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7020"</td>
              <td>"System Timed Out| App Web service is down~"</td>
              <td>Default error messages when the app server is down. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7021"</td>
              <td>"File Validation Error | Incorrect merchant code~"</td>
              <td>Uploaded billing files must contain the correct designated merchant code found in ther designate configuration.xml file. Make sure to upload a correct filename. </td>
            </tr>

            <tr>
              <td>"7022"</td>
              <td>"File Validation Error | All merchant numbers should be the same~"</td>
              <td>Uploaded billing files must contain the same designated merchant IDs. For old billing files, one merchant per billing file is accepted, make sure to upload a correct content.</td>
            </tr>

            <tr>
              <td>"7023"</td>
              <td>"File Validation Error | Merchant number is not supported~"</td>
              <td>Uploaded billing files must contain the correct merchant IDs found their designated configuration.xml file. Make sure to upload a correct file of the merchant.</td>
            </tr>

            <tr>
              <td>"7024"</td>
              <td>"File Validation Error | Invalid preprocessed billing filename~"</td>
              <td>Uploaded billing files must have a invalid file name. Upload a billing file with correct file name.</td>
            </tr>

            <tr>
              <td>"7025"</td>
              <td>"File Validation Error | File has no contents~"</td>
              <td>Uploaded billing files must not be empty.</td>
            </tr>

            <tr>
              <td>"7026"</td>
              <td>"File Validation Error | Invalid Billing File transactions. PLease check the file contents and configuration parameters.~"</td>
              <td>Uploaded billing files must contain valid transaction entries.</td>
            </tr>

            <tr>
              <td>"7027"</td>
              <td>"File Validation Error | Invalid Header/Trailer or Contents~"</td>
              <td>Uploaded billing files must contain valid transaction Headers and Trailers</td>
            </tr>

            <tr>
              <td>"7030"</td>
              <td>"Upload Failed. | Please Contact your System Administrator. ~"</td>
              <td>Default error message when the PREPROCESSOR is inactive. Please Contact the System Administrator.</td>
            </tr>

            <tr>
              <td>"7031"</td>
              <td>"System Timed Out | Error generating return file~"</td>
              <td>Incorrect billing file parsing using custom field maps. Make sure the file to be uploaded is in line with the custom filed map.</td>
            </tr>

            <tr>
              <td>"7032"</td>
              <td>"Upload Failed. | File has been processed already. Duplicate filename and contents. ~"</td>
              <td>The billing file has both duplicate content and filename. Please upload a different file.</td>
            </tr>

            <tr>
              <td>"7033"</td>
              <td>"Upload Failed. | File has been processed already. Duplicate contents. ~"</td>
              <td>The contents of any uploaded billing file should be unique. Please upload a different file with a different.</td>
            </tr>

            <tr>
              <td>"7034"</td>
              <td>"Upload Failed. | File has been processed already. Duplicate filename. ~"</td>
              <td>A duplicate file name was found. Please upload a file different filename. Sam filename can be used after 20 days as per requirement. </td>
            </tr>

            <tr>
              <td>"7035"</td>
              <td>"Upload Failed.  | An unrecognized character was found. Please make sure the uploaded billing file is UTF_8 encoded. ~"</td>
              <td>Upon reading an uploaded billing file, an unrecognized character was found. Make sure the file format is UTF_8.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ErrorMessages;
