import React from 'react';
import { useNavigate } from 'react-router-dom';
import InnerBanner from '../includes/Innerbanner';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (



    
    <div>
 <InnerBanner title={"Welcome To Dashboard"}/>
       
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;