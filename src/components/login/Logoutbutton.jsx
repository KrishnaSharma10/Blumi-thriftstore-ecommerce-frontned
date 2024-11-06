import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from './authservice'

const LogoutButton = () => {
  const navigate = useNavigate();

  const HandleLogout = async () => {
    try {
      await logoutUser();
      navigate('/authenticate');
    } catch (error) {

    }
  }


  return (
    <button onClick={HandleLogout} className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 hover:text-white transition-colors duration-300 ">
      Log Out
    </button>
  );
}

export default LogoutButton;