import React, { useEffect, useState } from "react";
import { Navigate, useHistory } from "react-router-dom";
import { auth } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

const Chats = (props) => {
  // const [loading, setLoading] = useState(true);
  //   const history = useHistory();

  // const { user } = useAuth();
  // console.log(user);

  //////////logout //////////
  const handleLogut = async () => {
    await auth.signOut();
    Navigate(-1);
  };

  ///////////////////////////
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">ChatApp</div>
        <div onClick={handleLogut} className="logout-tab">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Chats;
