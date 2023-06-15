import React, { useState } from "react";
import "../styles/HomePage.scss";

import {RxCross2} from "react-icons/rx";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  const [loginOpen, setloginOpen] = useState<boolean>(false);
  const [signupOpen, setsignupOpen] = useState<boolean>(false);

  return (
    <div className="Homepage_div">
      <div className="Homepage_login">
        {loginOpen && 
        <div className="backdrop">
          <dialog className="Homepage_login-dialog" open>
            <p className="Homepage_login-close"><RxCross2 onClick={() => setloginOpen(false)}/></p>
            <LoginPage setSignupOpen={setsignupOpen} setLoginOpen={setloginOpen}/>
          </dialog>
        </div>
        }
      </div> 
      <div className="Homepage_signup">
        {signupOpen && 
        <div className="backdrop">
          <dialog className="Homepage_login-dialog" open>
            <p className="Homepage_login-close"><RxCross2 onClick={() => setsignupOpen(false)}/></p>
            <SignupPage setSignupOpen={setsignupOpen} setLoginOpen={setloginOpen}/>
          </dialog>
        </div>
        }
      </div>
      <div className="HomePage_nav-contai">
        <Navbar setSignupOpen={setsignupOpen} setLoginOpen={setloginOpen} />
      </div>
    </div>
  );
};

export default HomePage;
