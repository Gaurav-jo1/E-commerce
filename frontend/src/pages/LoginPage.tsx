import React from "react";
import { GoogleLogin } from "@react-oauth/google";

import axios from "axios";
import art from "../assets/login_art.jpeg";
import "../styles/Auth.scss";

function handleGoogleLogin(idToken?: string) {
  axios
    .post("http://127.0.0.1:8000/google_login/google/", {
      id_token: idToken,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Loginpage: React.FC = () => {
  return (
    <div className="LoginPage">
      <div className="Auth_login-form">
        <div className="Auth_login-text">
          <h4>Welcome back to Shoppy!</h4>
          <h4>Please sign in</h4>

          <div className="Auth_sign_in_or_up-link">
            <p>New to Shoppy? &nbsp; </p>
            <p>Create an account</p>
          </div>
        </div>
        <div className="Auth_google-div">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleGoogleLogin(credentialResponse.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }} type="standard" text="signin_with" logo_alignment="left" width="260px"
          />
        </div>
        <div className="Auth_login_form-divider">
          <p>or</p>
        </div>
        <div className="Auth_login-inputs">
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required/>
            <div className="Auth_login_forgot-password">
              <p>Forgot your password?</p>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>

      <div className="Auth_bg_img">
        <div className="Auth_bg_img-logo"></div>
        <div className="Auth_bg_img-art">
          <img src={art} alt="art" />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
