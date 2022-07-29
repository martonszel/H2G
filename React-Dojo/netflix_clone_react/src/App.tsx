
import './App.css';
import { useState } from "react";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => {

  // eslint-disable-next-line
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(true)

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<Dashboard />} />
      </Routes>
    </div >
  );
}

export default App;
