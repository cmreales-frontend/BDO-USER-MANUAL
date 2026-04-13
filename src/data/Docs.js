const Docs = [
  // Introduction
  { title: "Introduction", content: "General information about BRPS Payment Processor application overview.", path: "/" },
  { title: "General Information", content: "General information about the BRPS system overview.", path: "/" },
  { title: "Stylistic Conventions", content: "Stylistic conventions used in this manual and documentation.", path: "/" },
  { title: "Command Syntax Convention", content: "Command syntax conventions used in this manual and documentation.", path: "/" },

  // User Role Types
  { title: "User Role Types", content: "Overview of user role types in the BRPS system.", path: "/user-role-types" },
  { title: "System Administrator", content: "System Administrator role privileges and responsibilities in BRPS.", path: "/user-role-types" },
  { title: "User Administrator", content: "User Administrator role privileges and responsibilities in BRPS.", path: "/user-role-types" },
  { title: "User", content: "Standard user role privileges and responsibilities in BRPS.", path: "/user-role-types" },

  // User Function Types
  { title: "User Function Types", content: "Overview of user function types in the BRPS system.", path: "/user-function-types" },
  { title: "Maker", content: "Maker function type responsibilities and privileges in BRPS.", path: "/user-function-types" },
  { title: "Verifier", content: "Verifier function type responsibilities and privileges in BRPS.", path: "/user-function-types" },
  { title: "Maker/Verifier", content: "Combined Maker and Verifier function type responsibilities in BRPS.", path: "/user-function-types" },

  // Functionalities
  { title: "System Screen", content: "Overview of the system screen layout and navigation in BRPS.", path: "/system-screen" },
  { title: "Login", content: "How to login to the BRPS system using username and password credentials.", path: "/login" },
  { title: "Load Environment", content: "How to load environment after login in BRPS system.", path: "/load-environment" },

  // Home Page
  { title: "Home Page", content: "Overview of the home page dashboard and its components in BRPS.", path: "/home-page" },
  { title: "My Transaction Submitted", content: "View and monitor transactions submitted for approval by the user.", path: "/my-transaction-submitted" },
  { title: "Transaction for Approval", content: "View and manage transactions pending for your approval.", path: "/transaction-for-approval" },
  { title: "Approved Transaction", content: "View list of approved transactions in the system.", path: "/approved-transaction" },
  { title: "Rejected Transaction", content: "View list of rejected transactions in the system.", path: "/rejected-transaction" },

  // Merchant Management
  { title: "Merchant Management", content: "Overview of merchant management module in BRPS.", path: "/merchant-management" },
  { title: "Merchant Management Details", content: "Create, edit, update, delete and download merchants list in BRPS.", path: "/merchant-management-sub" },
  { title: "Institution Management", content: "Create, edit, update, and delete institution records in BRPS.", path: "/institution-management" },
  { title: "Merchant Supported Card", content: "Create, edit, update, and delete supported card types for merchants.", path: "/merchant-supported-card" },
  { title: "Card Type Management", content: "Create, edit, update, and delete card types and BIN ranges in BRPS.", path: "/card-type-management" },

  // User Management
  { title: "User Management", content: "Overview of user management functionalities in BRPS.", path: "/user-management-func" },
  { title: "User Management Details", content: "Create, edit, update, delete BRPS users and accounts.", path: "/user-management-sub" },
  { title: "Roles and Privileges", content: "Manage roles and privileges and permissions for users in BRPS.", path: "/roles-management" },
  { title: "User-Merchant Assignment", content: "Assign and manage users to merchants in BRPS system.", path: "/user-assignment" },

  // Field Map
  { title: "Field Map", content: "Field mapping configuration and setup in BRPS system.", path: "/field-map" },

  // Certificate Management
  { title: "Certificate Management", content: "Manage and configure certificates in the BRPS system.", path: "/certificate-management" },

  // History
  { title: "History", content: "Overview of history modules and logs in BRPS.", path: "/history" },
  { title: "Billing File History", content: "View billing file history and logs and records in BRPS.", path: "/billing-file-history" },
  { title: "Transaction History", content: "View transaction history and logs and records in BRPS.", path: "/transaction-history" },
  { title: "User Transaction History", content: "View user transaction history and activity logs in BRPS.", path: "/user-transaction-history" },

  // Reports
  { title: "Merchant Reports", content: "View and generate merchant reports and data in BRPS.", path: "/merchant-reports" },
  { title: "Audit Trail", content: "View audit trail logs and user activity records in BRPS.", path: "/audit-trail" },
  { title: "Settlements", content: "View and manage settlement records and data in BRPS.", path: "/settlements" },
  { title: "Send Settlements", content: "Send and transmit settlement files and data in BRPS.", path: "/send-settlements" },
  { title: "Generate Settlement", content: "Generate settlement files and reports in BRPS.", path: "/generate-settlement" },
  { title: "Billing File Reports", content: "View and generate billing file reports in BRPS.", path: "/billing-file-reports" },

  // Billing File Processing
  { title: "Billing File Processing", content: "Overview of billing file processing module in BRPS.", path: "/billing-file-processing" },
  { title: "Upload Billing File", content: "Upload raw billing files into the BRPS system for processing.", path: "/upload-billing-file" },
  { title: "New Upload Raw Billing File", content: "Upload new raw billing files into the BRPS system.", path: "/new-upload-raw-billing-file" },
  { title: "Progress Status", content: "View billing file upload and processing progress status in BRPS.", path: "/progress-status" },
  { title: "Scheduled Billing Files", content: "View and manage scheduled billing files in BRPS system.", path: "/scheduled-billing-files" },

  // Post Transaction
  { title: "Post Transaction", content: "Overview of post transaction module and features in BRPS.", path: "/post-transaction" },
  { title: "Post Single Transaction", content: "Post and submit a single transaction manually in BRPS.", path: "/post-single-transaction" },
  { title: "Scheduled Transaction", content: "View and manage scheduled transactions in BRPS system.", path: "/scheduled-transaction" },

  // Profile
  { title: "Profile", content: "View and manage your user profile and account settings in BRPS.", path: "/profile" },

  // Error Messages
  { title: "Error Messages", content: "List of system error messages and their descriptions and resolutions in BRPS.", path: "/error-messages" },
];

export default Docs;