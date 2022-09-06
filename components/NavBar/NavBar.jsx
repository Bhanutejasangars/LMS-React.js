import React from "react";
import "./NavBar.css";
import Logo from "../../images/LmsLogo.png";
import { useNavigate } from "react-router-dom";
import { loggedUserData } from "../../utils/userInfoApiData";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const userLogged = loggedUserData();
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigateTo("/login");
  };

  return (
    <>
      <div className="navbar_box">
        <div className="navbar_container">
          <div
            className="logo_box"
            onClick={() => {
              navigateTo("/");
            }}
          >
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <div className="features_section">
            {!userLogged && (
              <button
                className="login_feature Navbar_button "
                onClick={() => {
                  navigateTo("/login");
                }}
              >
                Login
              </button>
            )}

            {!userLogged && (
              <button
                className="register_feature Navbar_button"
                onClick={() => {
                  navigateTo("/signup");
                }}
              >
                Register
              </button>
            )}

            {userLogged && (
              <button
                className="dashboards_feature Navbar_button"
                onClick={() => {
                  navigateTo("/dashboard");
                }}
              >
                Dashboards
              </button>
            )}

            {userLogged && (
              <button className=" Navbar_button" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
