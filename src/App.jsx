import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import Chat from './pages/Chat';
import Others from './pages/Others';
import Transaction from './pages/Transaction';
import Warung from './pages/Warung';
import RiwayatPentitipan from './pages/RiwayatPentitipan';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/Warung" element={<Warung />} />
          <Route path="/RiwayatPentitipan" element={<RiwayatPentitipan />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;