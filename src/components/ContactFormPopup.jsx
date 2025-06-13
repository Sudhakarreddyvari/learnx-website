"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

const ContactFormPopup = ({ isOpen, onClose }) => {
  // Handle body overflow when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Close form"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm" style={{ backgroundColor: 'transparent', color: 'white', maxWidth: '100%' }}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
            <form
              id="webform788696000001041006"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads788696000001041006"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={(e) => {
                document.charset = "UTF-8";
                if (window.checkMandatory788696000001041006) {
                  return window.checkMandatory788696000001041006();
                }
                return true;
              }}
            >
              <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="a52bbcb0b40cfd0c5089ddd5c07ef59d8d8034f7e248d2e807eeb72cc9b7c83c" />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="5e6ec5bb3321ddf3feeca2b4b597f22970402fce4385ca44d65a81c2b9018a158f6d432cc97dcf72f15c2ff9fcfd8065" />
              <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" />
              <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="https&#x3a;&#x2f;&#x2f;learnxacademy.in&#x2f;thank-you&#x2f;" />
              
              <style>
                {`
                  .zcwf_lblLeft .zcwf_col_lab {
                    color: #e5e7eb;
                    font-size: 14px;
                    margin-bottom: 0.5rem;
                  }
                  .zcwf_lblLeft .zcwf_col_fld input[type="text"] {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #1f2937;
                    border: 1px solid #374151;
                    border-radius: 0.5rem;
                    color: white;
                    transition: all 0.2s;
                  }
                  .zcwf_lblLeft .zcwf_col_fld input[type="text"]:focus {
                    outline: none;
                    border-color: #a21caf;
                    box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2);
                  }
                  .zcwf_lblLeft .zcwf_button {
                    padding: 0.75rem 1.5rem;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 0.5rem;
                    transition: all 0.2s;
                  }
                  .zcwf_lblLeft .formsubmit {
                    background: linear-gradient(to right, #8b5cf6, #ec4899);
                    color: white;
                    border: none;
                    box-shadow: 0 2px 8px 0 rgba(139,92,246,0.15);
                  }
                  .zcwf_lblLeft .formsubmit:hover {
                    background: linear-gradient(to right, #7c3aed, #db2777);
                  }
                  .zcwf_lblLeft input[type="reset"] {
                    background: #23272f;
                    color: #e5e7eb;
                    border: 1px solid #8b5cf6;
                  }
                  .zcwf_lblLeft input[type="reset"]:hover {
                    background: #8b5cf6;
                    color: white;
                  }
                  .zcwf_lblLeft .zcwf_row {
                    margin-bottom: 1.5rem;
                  }
                  .zcwf_lblLeft .zcwf_col_fld {
                    width: 100%;
                  }
                  .zcwf_lblLeft .zcwf_col_lab {
                    width: 100%;
                    margin-bottom: 0.5rem;
                  }
                `}
              </style>

              <div className="zcwf_row">
                <div className="zcwf_col_lab">
                  <label htmlFor="Last_Name">
                    Name
                    <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" aria-valuemax="80" maxLength="80" />
                </div>
              </div>

              <div className="zcwf_row">
                <div className="zcwf_col_lab">
                  <label htmlFor="Phone">
                    Phone
                    <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input type="text" id="Phone" aria-required="true" aria-label="Phone" name="Phone" aria-valuemax="30" maxLength="30" />
                </div>
              </div>

              <div className="zcwf_row">
                <div className="zcwf_col_lab">
                  <label htmlFor="Email">
                    Email
                    <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input type="text" ftype="email" autoComplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" aria-valuemax="100" crmlabel="" maxLength="100" />
                </div>
              </div>

              <input type="hidden" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" />

              <div className="zcwf_row">
                <div className="zcwf_col_fld flex gap-4">
                  <input type="submit" id="formsubmit" role="button" className="formsubmit zcwf_button w-full" value="Submit" aria-label="Submit" title="Submit" />
                </div>
              </div>

              <script>
                {`
                  function validateEmail788696000001041006() {
                    var form = document.forms['WebToLeads788696000001041006'];
                    var emailFld = form.querySelectorAll('[ftype=email]');
                    var i;
                    for (i = 0; i < emailFld.length; i++) {
                      var emailVal = emailFld[i].value;
                      if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
                        var atpos = emailVal.indexOf('@');
                        var dotpos = emailVal.lastIndexOf('.');
                        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                          alert('Please enter a valid email address.');
                          emailFld[i].focus();
                          return false;
                        }
                      }
                    }
                    return true;
                  }

                  function checkMandatory788696000001041006() {
                    var mndFileds = new Array('Last Name', 'Email', 'Phone');
                    var fldLangVal = new Array('Name', 'Email', 'Phone');
                    for (i = 0; i < mndFileds.length; i++) {
                      var fieldObj = document.forms['WebToLeads788696000001041006'][mndFileds[i]];
                      if (fieldObj) {
                        if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                          if (fieldObj.type == 'file') {
                            alert('Please select a file to upload.');
                            fieldObj.focus();
                            return false;
                          }
                          alert(fldLangVal[i] + ' cannot be empty.');
                          fieldObj.focus();
                          return false;
                        } else if (fieldObj.nodeName == 'SELECT') {
                          if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                            alert(fldLangVal[i] + ' cannot be none.');
                            fieldObj.focus();
                            return false;
                          }
                        } else if (fieldObj.type == 'checkbox') {
                          if (fieldObj.checked == false) {
                            alert('Please accept ' + fldLangVal[i]);
                            fieldObj.focus();
                            return false;
                          }
                        }
                        try {
                          if (fieldObj.name == 'Last Name') {
                            name = fieldObj.value;
                          }
                        } catch (e) {}
                      }
                    }
                    if (!validateEmail788696000001041006()) {
                      return false;
                    }
                    var urlparams = new URLSearchParams(window.location.search);
                    if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
                      var webform = document.getElementById('webform788696000001041006');
                      var service = urlparams.get('service');
                      var smarturlfield = document.createElement('input');
                      smarturlfield.setAttribute('type', 'hidden');
                      smarturlfield.setAttribute('value', service);
                      smarturlfield.setAttribute('name', 'service');
                      webform.appendChild(smarturlfield);
                    }
                    document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
                  }
                `}
              </script>

              <script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=aabac104ff86b1a01f16ceaf7720a93c7137cb49f1ea4ac4078962a1bd64f7cedf6c24d799f262b90544810c3128ece0gid5dcedfc8e135e8c4914767faad6016b6c9e9d2c6192cd62967bd02b8207b9b7agidbc31708d5a69080b951beab47b84e00eb636faa484d559bb31415519613ee60egidea554c0054f47142461596bdfadb257df99ed5e99e0a25bb3ffbc419e25a8045&tw=a82add676088b46368cb468083568258e4d1e789a69bdb75f847555c88779ae9"></script>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFormPopup 