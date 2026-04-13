import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PageHeader from './components/PageHeader';
import AuditTrailPage from './pages/AuditTrailPage';
import MerchantReportsPage from './pages/MerchantReportsPage';
import SettlementsPage from './pages/SettlementsPage';
import SendSettlementsPage from './pages/SendSettlementsPage';
import GenerateSettlementPage from './pages/GenerateSettlementPage';
import BillingFileReportsPage from './pages/BillingFileReportsPage';
import Profile from './pages/Profile';
import BillingFileProcessing from './pages/BillingFileProcessing';
import NewUploadRawBillingFile from './pages/NewUploadRawBillingFile';
import UploadBillingFile from './pages/UploadBillingFile';
import ProgressStatus from './pages/ProgressStatus';
import ScheduledBillingFiles from './pages/ScheduledBillingFiles';
import PostTransaction from './pages/PostTransaction';
import PostSingleTransaction from './pages/PostSingleTransaction';
import ScheduledTransaction from './pages/ScheduledTransaction';
import Introduction from './pages/Introduction';
import UserManagementFunc from './pages/UserManagementFunc';
import UserManagementSub from './pages/UserManagementSub';
import SystemScreen from './pages/SystemScreen';
import Login from './pages/Login';
import LoadEnvironment from './pages/LoadEnvironment';
import HomePage from './pages/HomePage';
import MyTransactionSubmitted from './pages/MyTransactionSubmitted';
import TransactionForApproval from './pages/TransactionForApproval';
import ApprovedTransaction from './pages/ApprovedTransaction';
import RejectedTransaction from './pages/RejectedTransaction';
import MerchantManagement from './pages/MerchantManagement';
import MerchantManagementSub from './pages/MerchantManagementSub';
import InstitutionManagement from './pages/InstitutionManagement';
import MerchantSupportedCard from './pages/MerchantSupportedCard';
import CardTypeManagement from './pages/CardTypeManagement';
import RolesManagement from './pages/RolesManagement';
import UserAssignment from './pages/UserAssignment';
import FieldMap from './pages/FieldMap';
import CertificateManagement from './pages/CertificateManagement';
import History from './pages/History';
import BillingFileHistory from './pages/BillingFileHistory';
import TransactionHistory from './pages/TransactionHistory';
import UserTransactionHistory from './pages/UserTransactionHistory';
import ErrorMessages from './pages/ErrorMessages';
import UserRoleTypes from './pages/UserRoleTypes';
import UserFunctionTypes from './pages/UserFunctionTypes';

import './styles/App.css';
import logo from './assets/bdo-logo-removebg-preview.png';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNav = () => setMobileOpen(!mobileOpen);
  const closeMobileNav = () => setMobileOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <button className="menu-toggle" onClick={toggleMobileNav}>
          ☰
        </button>

        <div className="main-container">
          <aside className="left-gutter">
            <div className="logo-wrap">
              <img src={logo} alt="BDO Logo" className="logo" />
            </div>

            <Navigation
              mobileOpen={mobileOpen}
              onMobileClose={closeMobileNav}
            />
          </aside>

          <main className="content-area">
            <PageHeader />

            {/* Introduction Navigation and the submenus */}
            <Routes>
              <Route path="/" element={<Introduction />} />


            {/* User Role Types Navigation and the submenus */}
              <Route path="/user-role-types" element={<UserRoleTypes />} />
              <Route path="/user-function-types" element={<UserFunctionTypes />} />

            {/* Functionalities Navigation and the submenus */}
              <Route path="/system-screen" element={<SystemScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/load-environment" element={<LoadEnvironment />} />


            {/* Home Page Submenu*/}
              <Route path="/home-page" element={<HomePage />} />
              <Route path="/my-transaction-submitted" element={<MyTransactionSubmitted />} />
              <Route path="/transaction-for-approval" element={<TransactionForApproval />} />
              <Route path="/approved-transaction" element={<ApprovedTransaction />} />
              <Route path="/rejected-transaction" element={<RejectedTransaction />} />


            {/* Merchant Management Submenu*/}
              <Route path="/merchant-management" element={<MerchantManagement />} />
              <Route path="/merchant-management-sub" element={<MerchantManagementSub />} />
              <Route path="/institution-management" element={<InstitutionManagement />} />
              <Route path="/merchant-supported-card" element={<MerchantSupportedCard />} />
              <Route path="/card-type-management" element={<CardTypeManagement />} />

            {/* User Management Submenu*/}
              <Route path="/user-management-func" element={<UserManagementFunc />} />
              <Route path="/user-management-sub" element={<UserManagementSub />} />
              <Route path="/roles-management" element={<RolesManagement />} />
              <Route path="/user-assignment" element={<UserAssignment />} />

            {/* Field Map Submenu*/}
              <Route path="/field-map" element={<FieldMap />} />

            {/* Certificate Management Submenu*/}
              <Route path="/certificate-management" element={<CertificateManagement />} />

            {/* History Submenu*/}
              <Route path="/history" element={<History />} />
              <Route path="/billing-file-history" element={<BillingFileHistory />} />
              <Route path="/transaction-history" element={<TransactionHistory />} />
              <Route path="/user-transaction-history" element={<UserTransactionHistory />} />

            {/* Reports Navigation and the submenus */}
              <Route path="/merchant-reports" element={<MerchantReportsPage />} />
              <Route path="/audit-trail" element={<AuditTrailPage />} />
              <Route path="/settlements" element={<SettlementsPage />} />
              <Route path="/send-settlements" element={<SendSettlementsPage />} />
              <Route path="/generate-settlement" element={<GenerateSettlementPage />} />
              <Route path="/billing-file-reports" element={<BillingFileReportsPage />} />
              <Route path="/billing-file-processing" element={<BillingFileProcessing />} />

            
              <Route path="/profile" element={<Profile />} />

            {/* Billing File Processing submenus */}
              <Route path="/upload-billing-file" element={<UploadBillingFile />} />
              <Route path="/progress-status" element={<ProgressStatus />} />
              <Route path="/new-upload-raw-billing-file" element={<NewUploadRawBillingFile />} />
              <Route path="/scheduled-billing-files" element={<ScheduledBillingFiles />} />

            {/* Post Transaction submenus */}
              <Route path="/post-transaction" element={<PostTransaction />} />
              <Route path="/post-single-transaction" element={<PostSingleTransaction />} />
              <Route path="/scheduled-transaction" element={<ScheduledTransaction />} />


              {/* Error Messages Navigation and the submenus */}
              <Route path="/error-messages" element={<ErrorMessages />} />

             
            </Routes>

          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;