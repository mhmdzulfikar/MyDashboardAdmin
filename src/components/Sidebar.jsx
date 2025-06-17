import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 text-center" style={{ width: '250px', minHeight: '100vh' }}>
      <h4>CMS Dashboard</h4>
      <ul className="nav flex-column mt-5 fs-5 ">
        <li className="nav-item">
          <Link to="/users" className="nav-link text-white">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link text-white">Chat</Link>
        </li>
        <li className="nav-item">
        <Link to="/Transaction" className='nav-link text-white'>Transaction</Link>
        </li>
        <li className="nav-item">
        <Link to="/Warung" className='nav-link text-white'>Warung</Link>
        </li>
        <li className="nav-item">
        <Link to="/RiwayatPentitipan" className='nav-link text-white'>Riwayat Penitipan</Link>
        </li>
        <li className="nav-item">
          <Link to="/others" className="nav-link text-white">Others</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;