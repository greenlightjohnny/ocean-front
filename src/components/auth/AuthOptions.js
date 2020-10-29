import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
//import UserContext from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../images/usero.png";
import Styles from "./authoptions.module.scss";
const AuthOptions = (props) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const register = () => {
    history.push("/register");
  };
  const login = () => {
    history.push("/login");
  };

  const logout = async () => {
    const confirmURL = "/api/v1/users/logout";
    const loginRes = await axios.post(
      confirmURL,
      {},
      { withCredentials: true }
    );
    console.log(loginRes);
    history.push("/");
    authContext.setIsAuthenticated(false);
  };

  return (
    <>
      <Link to="/secrets">Secret</Link>
      <button onClick={logout}>Log Out</button>
      <Link to="/user" alt="control panel">
        <img className={Styles.btn} src={Logo} alt="test" />
      </Link>
    </>
    // <div>
    //   {authContext.isAuthenticated ? (
    //     <>
    //       <Link to="/secrets">Secret</Link>
    //       <button onClick={logout}>Log Out</button> <Logo stroke="#ec5990" />
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/secrets">Secret</Link>
    //       <button onClick={register}>Register</button>
    //       <button onClick={login}>Login</button>{" "}
    //     </>
    //   )}
    // </div>
  );
};

export default AuthOptions;
