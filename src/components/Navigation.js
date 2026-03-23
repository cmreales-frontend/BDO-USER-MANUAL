import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Navigation = ({ mobileOpen, onMobileClose }) => {

  const navItems = [
    {
      path: "/",
      label: "INTRODUCTION",
      icon: "fas fa-book-open",
      submenu: [
        { path: "/general-information",       label: "1.1 General Information" },
        { path: "/audience-description",      label: "1.2 Audience Description" },
        {
          label: "1.3 Convention",
          submenu: [
            { path: "/stylistic-convention",       label: "1.3.1 Stylistic Convention" },
            { path: "/command-syntax-convention",  label: "1.3.2 Command Syntax Convention" }
          ]
        }
      ]
    },
    {
      path: "/user-role-types",
      icon: "fas fa-users",
      label: "USER ROLE TYPES",
      submenu: [
        { path: "/system-administrator", label: "2.1 System Administrator" },
        { path: "/user-administrator",   label: "2.2 User Administrator" },
        { path: "/user",                 label: "2.3 User" }
      ]
    },
    {
      path: "/user-function-types",
      icon: "fas fa-cogs",
      label: "USER FUNCTION TYPES",
      submenu: [
        { path: "/maker",          label: "3.1 Maker" },
        { path: "/verifier",       label: "3.2 Verifier" },
        { path: "/maker-verifier", label: "3.3 Maker/Verifier" }
      ]
    },
    {
      path: "/functionalities",
      icon: "fas fa-wrench",
      label: "FUNCTIONALITIES",
      submenu: [
        { path: "/system-screen",           label: "4.1 System Screen" },
        { path: "/login",                   label: "4.2 Login" },
        { path: "/load-environment",        label: "4.3 Load Environment" },
        {
          path: "/home-page",
          label: "4.4 Home Page",
          submenu: [
            { path: "/my-transaction-submitted",  label: "4.4.1 My Transaction Submitted for Approval" },
            { path: "/transaction-for-approval",  label: "4.4.2 My Transaction for my Approval" },
            { path: "/approved-transaction",      label: "4.4.3 Approved Transaction" },
            { path: "/rejected-transaction",      label: "4.4.4 Rejected Transaction" }
          ]
        },
        {
          path: "/merchant-management",
          label: "4.5 Merchant Management",
          submenu: [
            { path: "/merchant-management-sub",   label: "4.5.1 Merchant Management" },
            { path: "/institution-management",    label: "4.5.2 Institution Management" },
            { path: "/merchant-supported-card",   label: "4.5.3 Merchant Supported Card Management" },
            { path: "/card-type-management",      label: "4.5.4 Card Type Management" }
          ]
        },
        {
          path: "/user-management-func",
          label: "4.6 User Management",
          submenu: [
            { path: "/user-management-sub",  label: "4.6.1 User Management" },
            { path: "/roles-management",     label: "4.6.2 Roles and Privileges" },
            { path: "/user-assignment",      label: "4.6.3 User-Merchant Assignment" }
          ]
        },
        { path: "/field-map",               label: "4.7 Field Map" },
        { path: "/certificate-management",  label: "4.8 Certificate Management" },
        {
          path: "/history",
          label: "4.9 History",
          submenu: [
            { path: "/billing-file-history",      label: "4.9.1 Billing File" },
            { path: "/transaction-history",       label: "4.9.2 Transaction" },
            { path: "/user-transaction-history",  label: "4.9.3 User Transaction History" }
          ]
        },
        {
          path: "/report",
          label: "4.10 Reports",
          submenu: [
            { path: "/audit-trail", label: "4.10.1 Audit Trail" },
            { path: "/merchant-reports", label: "4.10.2 Merchant Reports" },
            { path: "/settlements", label: "4.10.3 Settlements" },
            { path: "/send-settlements", label: "4.10.4 Send Settlements" },
            { path: "/generate-settlement", label: "4.10.5 Generate Settlement" },
            { path: "/billing-file-reports", label: "4.10.6 Billing File Reports" },
            { path: "/billing-file-processing", label: "4.10.7 Billing File Processing" }
          ]
        },
        {
          path: "/profile",
          label: "4.11 Profile",
        },
        {
          path: "/billing-file-processing",
          label: "4.12 Billing File Processing",
          submenu: [
            { path: "/new-upload-raw-billing-file", label: "4.12.1 New Upload - Raw Billing File" },
            { path: "/upload-billing-file", label: "4.12.2 Upload Billing File" },
            { path: "/progress-status", label: "4.12.3 Progress Status" },
            { path: "/scheduled-billing-files", label: "4.12.4 Scheduled Billing Files" }
          ]
        },
        {
          path: "/post-transaction",
          label: "4.13 Post Transaction",
          submenu: [
            { path: "/post-single-transaction", label: "4.13.1 Post Single Transaction" },
            { path: "/scheduled-transaction", label: "4.13.2 Scheduled Transaction (Post Single)" }
          ]
        },

      ]
    },
    {
      path: "/error-messages",
      icon: "fas fa-circle-info",
      label: "ERROR MESSAGES"
    },
  ];

  const handleNavClick = () => {
    if (window.innerWidth <= 768) onMobileClose();
  };

  // ── Recursive MenuItem with viewport-aware fixed flyout ──────────────────
  const MenuItem = ({ item, depth = 0 }) => {
    const [open, setOpen]           = useState(false);
    const [flyoutPos, setFlyoutPos] = useState({ top: 0, left: 0 });
    const timeoutRef = useRef(null);
    const triggerRef = useRef(null);
    const isTopLevel = depth === 0;

    const calcPosition = useCallback(() => {
      if (!triggerRef.current) return;
      const trigger = triggerRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let left = trigger.right + 2;
      let top  = trigger.top;

      // Flip left if would overflow right edge
      const estimatedWidth = 270;
      if (left + estimatedWidth > vw) {
        left = Math.max(8, trigger.left - estimatedWidth - 2);
      }

      // Push up if would overflow bottom
      const itemCount       = item.submenu ? item.submenu.length : 1;
      const estimatedHeight = Math.min(itemCount * 46 + 8, vh * 0.85);
      if (top + estimatedHeight > vh) {
        top = Math.max(8, vh - estimatedHeight - 8);
      }

      setFlyoutPos({ top, left });
    }, [item.submenu]);

    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      calcPosition();
      setOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => {
      if (!open) return;
      const update = () => calcPosition();
      window.addEventListener('scroll', update, true);
      window.addEventListener('resize', update);
      return () => {
        window.removeEventListener('scroll', update, true);
        window.removeEventListener('resize', update);
      };
    }, [open, calcPosition]);

    // Portal to <body> so no ancestor can clip it
    const flyoutPortal = (open && item.submenu)
      ? ReactDOM.createPortal(
          <ul
            className={`submenu flyout depth-${depth}`}
            style={{
              position: 'fixed',
              top:  flyoutPos.top,
              left: flyoutPos.left,
              maxHeight: '80vh',
              overflowY: 'auto',
              overflowX: 'visible',
              zIndex: 9999
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.submenu.map((child, i) => (
              <MenuItem key={i} item={child} depth={depth + 1} />
            ))}
          </ul>,
          document.body
        )
      : null;

    return (
      <li
        ref={triggerRef}
        className={`nav-item depth-${depth} ${open ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.path ? (
          <NavLink
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `nav-link ${isTopLevel ? 'top-level' : ''} ${isActive ? 'active' : ''}`
            }
            onClick={handleNavClick}
          >
            {item.icon && <span className="nav-icon"><i className={item.icon}></i></span>}
            <span className="nav-label-text">{item.label}</span>
            {item.submenu && (
              <span className={`nav-arrow ${open ? 'rotated' : ''}`}>&#9654;</span>
            )}
          </NavLink>
        ) : (
          <div className={`nav-link ${isTopLevel ? 'top-level' : ''} ${open ? 'active-parent' : ''}`}>
            {item.icon && <span className="nav-icon"><i className={item.icon}></i></span>}
            <span className="nav-label-text">{item.label}</span>
            {item.submenu && (
              <span className={`nav-arrow ${open ? 'rotated' : ''}`}>&#9654;</span>
            )}
          </div>
        )}

        {flyoutPortal}
      </li>
    );
  };

  return (
    <nav className={`navigation ${mobileOpen ? 'mobile-active' : ''}`}>
      <div className="nav-header">NAVIGATE</div>
      <ul className="nav-menu">
        {navItems.map((item, i) => (
          <MenuItem key={i} item={item} depth={0} />
        ))}
      </ul>
    </nav>
  );

};

export default Navigation;