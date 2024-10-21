import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 hover:text-white transition-colors duration-300 ">
      Log Out
    </button>
  );
}

export default LogoutButton;