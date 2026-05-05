import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Navigation = ({ mobileOpen, onMobileClose }) => {

  const navItems = [
    {
      path: "/",
      label: "Introduction",
    },
    {
      label: "User Types",
      submenu: [
        { path: "/user-role-types", label: "User Role Types" },
        { path: "/user-function-types", label: "User Function Types" },
      ]
    },
    {
      label: "Functionalities",
      submenu: [
        { path: "/system-screen",           label: "System Screen" },
        { path: "/login",                   label: "Login" },
        { path: "/load-environment",        label: "Load Environment" },
        {
          path: "/home",
          label: "Home",
          submenu: [
            { path: "/my-transaction-submitted",  label: "My Transaction Submitted for Approval" },
            { path: "/transaction-for-approval",  label: "My Transaction for my Approval" },
            { path: "/approved-transaction",      label: "Approved Transaction" },
            { path: "/rejected-transaction",      label: "Rejected Transaction" }
          ]
        },
        {
          label: "Merchant Management",
          submenu: [
            { path: "/merchant-management",   label: "Merchant Management" },
            { path: "/institution-management",    label: "Institution Management" },
            { path: "/merchant-supported-card",   label: "Merchant Supported Card Management" },
            { path: "/card-type-management",      label: "Card Type Management" }
          ]
        },
        {
          label: "User Management",
          submenu: [
            { path: "/user-management",  label: "User Management" },
            { path: "/roles-and-privileges",     label: "Roles and Privileges" },
            { path: "/user-assignment",      label: "User-Merchant Assignment" }
          ]
        },
        { path: "/field-map",               label: "Field Map" },
        { path: "/certificate-management",  label: "Certificate Management" },
        {
          path: "/history",
          label: "History",
          submenu: [
            { path: "/billing-file-history",      label: "Billing File" },
            { path: "/transaction-history",       label: "Transaction" },
            { path: "/user-transaction-history",  label: "User Transaction History" }
          ]
        },
        {
          label: "Reports",
          submenu: [
            { path: "/audit-trail",           label: "Audit Trail" },
            { path: "/merchant-reports",      label: "Merchant Reports" },
            { path: "/settlements",           label: "Settlements" },
            { path: "/send-settlements",      label: "Send Settlements" },
            { path: "/generate-settlement",   label: "Generate Settlement" },
            { path: "/billing-file-reports",  label: "Billing File Reports" },
          ]
        },
        {
          path: "/profile",
          label: "Profile",
        },
        {
          path: "/billing-file-processing",
          label: "Billing File Processing",
          submenu: [
            { path: "/new-upload-raw-billing-file", label: "New Upload - Raw Billing File" },
            { path: "/upload-billing-file",         label: "Upload Billing File" },
            { path: "/progress-status",             label: "Progress Status" },
            { path: "/scheduled-billing-files",     label: "Scheduled Billing Files" }
          ]
        },
        {
          path: "/post-transaction",
          label: "Post Transaction",
          submenu: [
            { path: "/post-single-transaction", label: "Post Single Transaction" },
            { path: "/scheduled-transaction",   label: "Scheduled Transaction (Post Single)" }
          ]
        },
      ]
    },
    {
      path: "/error-messages",
      label: "Error Messages"
    },
    {
      path: "/revision-history",
      label: "Revision History"
  },
];

  const handleNavClick = () => {
    if (window.innerWidth <= 768) onMobileClose();
  };

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

      const estimatedWidth = 270;
      if (left + estimatedWidth > vw) {
        left = Math.max(8, trigger.left - estimatedWidth - 2);
      }

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
            <span className="nav-label-text">{item.label}</span>
            {item.submenu && (
              <span className={`nav-arrow ${open ? 'rotated' : ''}`}>&#9654;</span>
            )}
          </NavLink>
        ) : (
          <div className={`nav-link ${isTopLevel ? 'top-level' : ''} ${open ? 'active-parent' : ''}`}>
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