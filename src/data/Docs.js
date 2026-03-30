const Docs = [
  // Introduction
  { title: "Introduction", content: "General information about BRPS Payment Processor application overview.", path: "/" },
  { title: "1.1 General Information", content: "General information about the BRPS system overview.", path: "/general-information" },
  { title: "1.2 Audience Description", content: "Describes the intended audience of this document and manual.", path: "/audience-description" },
  { title: "1.3.1 Stylistic Convention", content: "Stylistic conventions used in this manual and documentation.", path: "/stylistic-convention" },
  { title: "1.3.2 Command Syntax Convention", content: "Command syntax conventions used in this manual and documentation.", path: "/command-syntax-convention" },

  // User Role Types
  { title: "2. User Role Types", content: "Overview of user role types in the BRPS system.", path: "/user-role-types" },
  { title: "2.1 System Administrator", content: "System Administrator role privileges and responsibilities in BRPS.", path: "/system-administrator" },
  { title: "2.2 User Administrator", content: "User Administrator role privileges and responsibilities in BRPS.", path: "/user-administrator" },
  { title: "2.3 User", content: "Standard user role privileges and responsibilities in BRPS.", path: "/user" },

  // User Function Types
  { title: "3. User Function Types", content: "Overview of user function types in the BRPS system.", path: "/user-function-types" },
  { title: "3.1 Maker", content: "Maker function type responsibilities and privileges in BRPS.", path: "/maker" },
  { title: "3.2 Verifier", content: "Verifier function type responsibilities and privileges in BRPS.", path: "/verifier" },
  { title: "3.3 Maker/Verifier", content: "Combined Maker and Verifier function type responsibilities in BRPS.", path: "/maker-verifier" },

  // Functionalities
  { title: "4. Functionalities", content: "Overview of all system functionalities and features in BRPS.", path: "/functionalities" },
  { title: "4.1 System Screen", content: "Overview of the system screen layout and navigation in BRPS.", path: "/system-screen" },
  { title: "4.2 Login", content: "How to login to the BRPS system using username and password credentials.", path: "/login" },
  { title: "4.3 Load Environment", content: "How to load environment after login in BRPS system.", path: "/load-environment" },

  // Home Page
  { title: "4.4 Home Page", content: "Overview of the home page dashboard and its components in BRPS.", path: "/home-page" },
  { title: "4.4.1 My Transaction Submitted", content: "View and monitor transactions submitted for approval by the user.", path: "/my-transaction-submitted" },
  { title: "4.4.2 Transaction for Approval", content: "View and manage transactions pending for your approval.", path: "/transaction-for-approval" },
  { title: "4.4.3 Approved Transaction", content: "View list of approved transactions in the system.", path: "/approved-transaction" },
  { title: "4.4.4 Rejected Transaction", content: "View list of rejected transactions in the system.", path: "/rejected-transaction" },

  // Merchant Management
  { title: "4.5 Merchant Management", content: "Overview of merchant management module in BRPS.", path: "/merchant-management" },
  { title: "4.5.1 Merchant Management", content: "Create, edit, update, delete and download merchants list in BRPS.", path: "/merchant-management-sub" },
  { title: "4.5.2 Institution Management", content: "Create, edit, update, and delete institution records in BRPS.", path: "/institution-management" },
  { title: "4.5.3 Merchant Supported Card", content: "Create, edit, update, and delete supported card types for merchants.", path: "/merchant-supported-card" },
  { title: "4.5.4 Card Type Management", content: "Create, edit, update, and delete card types and BIN ranges in BRPS.", path: "/card-type-management" },

  // User Management
  { title: "4.6 User Management", content: "Overview of user management functionalities in BRPS.", path: "/user-management-func" },
  { title: "4.6.1 User Management", content: "Create, edit, update, delete BRPS users and accounts.", path: "/user-management-sub" },
  { title: "4.6.2 Roles and Privileges", content: "Manage roles and privileges and permissions for users in BRPS.", path: "/roles-management" },
  { title: "4.6.3 User-Merchant Assignment", content: "Assign and manage users to merchants in BRPS system.", path: "/user-assignment" },

  // Field Map
  { title: "4.7 Field Map", content: "Field mapping configuration and setup in BRPS system.", path: "/field-map" },

  // Certificate Management
  { title: "4.8 Certificate Management", content: "Manage and configure certificates in the BRPS system.", path: "/certificate-management" },

  // History
  { title: "4.9 History", content: "Overview of history modules and logs in BRPS.", path: "/history" },
  { title: "4.9.1 Billing File History", content: "View billing file history and logs and records in BRPS.", path: "/billing-file-history" },
  { title: "4.9.2 Transaction History", content: "View transaction history and logs and records in BRPS.", path: "/transaction-history" },
  { title: "4.9.3 User Transaction History", content: "View user transaction history and activity logs in BRPS.", path: "/user-transaction-history" },

  // Reports
  { title: "4.10 Report", content: "Overview of all reports and report generation in BRPS.", path: "/report" },
  { title: "4.10.1 Merchant Reports", content: "View and generate merchant reports and data in BRPS.", path: "/merchant-reports" },
  { title: "4.10.2 Audit Trail", content: "View audit trail logs and user activity records in BRPS.", path: "/audit-trail" },
  { title: "4.10.3 Settlements", content: "View and manage settlement records and data in BRPS.", path: "/settlements" },
  { title: "4.10.4 Send Settlements", content: "Send and transmit settlement files and data in BRPS.", path: "/send-settlements" },
  { title: "4.10.5 Generate Settlement", content: "Generate settlement files and reports in BRPS.", path: "/generate-settlement" },
  { title: "4.10.6 Billing File Reports", content: "View and generate billing file reports in BRPS.", path: "/billing-file-reports" },

  // Billing File Processing
  { title: "4.11 Billing File Processing", content: "Overview of billing file processing module in BRPS.", path: "/billing-file-processing" },
  { title: "4.11.1 Upload Billing File", content: "Upload raw billing files into the BRPS system for processing.", path: "/upload-billing-file" },
  { title: "4.11.2 New Upload Raw Billing File", content: "Upload new raw billing files into the BRPS system.", path: "/new-upload-raw-billing-file" },
  { title: "4.11.3 Progress Status", content: "View billing file upload and processing progress status in BRPS.", path: "/progress-status" },
  { title: "4.11.4 Scheduled Billing Files", content: "View and manage scheduled billing files in BRPS system.", path: "/scheduled-billing-files" },

  // Post Transaction
  { title: "4.12 Post Transaction", content: "Overview of post transaction module and features in BRPS.", path: "/post-transaction" },
  { title: "4.12.1 Post Single Transaction", content: "Post and submit a single transaction manually in BRPS.", path: "/post-single-transaction" },
  { title: "4.12.2 Scheduled Transaction", content: "View and manage scheduled transactions in BRPS system.", path: "/scheduled-transaction" },

  // Profile
  { title: "Profile", content: "View and manage your user profile and account settings in BRPS.", path: "/profile" },

  // Error Messages
  { title: "Error Messages", content: "List of system error messages and their descriptions and resolutions in BRPS.", path: "/error-messages" },
];

export default Docs;