import React, { useState } from 'react';
import logo from '../Images/logo.jpg';
import Sidebar from './sidebar.js'; // Import the Sidebar component
import DataTable from './DataTable';

const Topheader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Add state for sidebar

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '8px',
    width: '1300px',
  };

  const burgerIconStyle = {
    marginRight: '8px',
    cursor: 'pointer',
    color: '#266cc2',
  };

  const logoStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleSidebarToggle = () => {
    setSidebarOpen((prevState) => !prevState); // Toggle the sidebar state
  };

  return (
    <div className="top-header-container">
      <div style={headerStyle}>
        <div style={burgerIconStyle} onClick={handleSidebarToggle}>
          {/* Replace the content of this div with your SVG */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M3 11h18v2H3zm0-4h18v2H3zm0 8h18v2H3z"
            />
          </svg>
        </div>
        <div style={logoStyle}>
          <img src={logo} className="logostyle" alt="Logo" />
        </div>
      </div>
      <div className="main-content">
      {sidebarOpen && <Sidebar />} {/* Render Sidebar component if sidebarOpen is true */}
      <DataTable/>
      </div>
    </div>
  );
};

export default Topheader;

