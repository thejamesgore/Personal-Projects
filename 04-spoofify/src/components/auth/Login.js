import React from "react";
import "../../styles/login.css";

import { loginUrl } from "../lib/auth";

const Login = () => {

  const handleClick = () => {
        window.location = loginUrl
    }

  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="the spotify logo"
      />
      <button onClick={handleClick}>LOGIN WITH SPOTIFY</button>
    </div>
  )
}

export default Login;
