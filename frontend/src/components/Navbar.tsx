import axios from "axios";
import React, { useState, useContext } from "react";
// Icons
import { HiMagnifyingGlass } from "react-icons/hi2";
import {CiShoppingCart} from "react-icons/ci" 
import {BsSearch} from "react-icons/bs" 
// Interface and Types
import { SignComponentProps } from "./CommonInterfaces";

interface MyData {
  id: number;
  user: string;
  picture: string;
}

// Styling
import "../styles/components_styles/Navbar.scss";
import { AuthContext } from "../context/AuthContext";

const Navbar: React.FC<SignComponentProps> = ({
  setSignupOpen,
  setLoginOpen,
}) => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [getUserInfo, setGetUserInfo] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<MyData>();

  const { authTokens } = useContext(AuthContext);

  const UserProfileData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    };

    axios.get("http://127.0.0.1:8000/user_profile/info/", { headers })
      .then(response => {
        console.log(response.data);
        setUserInfo(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (authTokens && getUserInfo) {
    UserProfileData()
    setGetUserInfo(false);
  }

  // console.log(userSearch);
  return (
    <nav className="Navbar_container">
      <div className="Navbar_container-search">
        <p>
          {" "}
          <HiMagnifyingGlass />{" "}
        </p>
        <input
          value={userSearch}
          type="text"
          placeholder="Search..."
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
      <div className="Navbar_container-logo">
        {" "}
        <p>Shoppy</p>{" "}
      </div>
      {userInfo ? (
        <div className="Navbar_container-profile">
          <p> <BsSearch/> </p>
          <p> <CiShoppingCart/> </p>
          <img src={`http://127.0.0.1:8000${userInfo.picture}`} alt="profile pic" />
        </div>
      ) : (
        <div className="Navbar_container-buttons">
          <p onClick={() => setSignupOpen(true)}>Sign up</p>
          <button onClick={() => setLoginOpen(true)}>Sign in</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
