import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../services/firebase";
import firebase from "firebase/compat/app";

function Login(props) {
  const googleRedirect = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Awais Chat app</h2>
        <div className="login-button google" onClick={googleRedirect}>
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
}

export default Login;
