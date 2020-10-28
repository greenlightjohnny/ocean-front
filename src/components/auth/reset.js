import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import Styles from "./register.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { AuthContext } from "../../context/AuthContext";
import Joi from "joi";

import Button from "../util/Button";
import { Link } from "react-router-dom";

const schema = Joi.object({
  password: Joi.string().min(6).max(256).required(),
  confirmpassword: Joi.ref("password"),
});

const Reset = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  });
  //const authcontext = useContext(AuthContext);
  const history = useHistory();
  const [nodeError, setNodeError] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { token } = useParams();

  const ConfirmURL = "/api/v1/users/resetform";

  //clear nodeError
  const clearNode = () => {
    setNodeError("");
  };

  // Button loader
  useEffect(() => {
    if (isButtonLoading) {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, 1000);
    }
  }, [isButtonLoading]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //fetch data
  async function fetchData(data) {
    try {
      const loginRes = await axios.post(`${ConfirmURL}/${token}`, data, {
        withCredentials: true,
      });

      console.log("middel###", loginRes.response);
      history.push({
        pathname: "/login",
        welcome: "Your password is reset! Login using it",
      });

      //history.push("/");
    } catch (err) {
      err.response.data.msg && setNodeError(err.response.data.msg);
    }
  }

  // Handle login
  const onSubmit = async (data) => {
    setIsButtonLoading(true);

    clearNode();
    await delay(1000);
    await fetchData(data);
    // try {
    //   const loginRes = await axios.post(APILogin, data, {
    //     withCredentials: true,
    //   });
    //   setUserData({
    //     token: loginRes.data.token,
    //     user: loginRes.data.user,
    //   });
    //   localStorage.setItem("a-token", loginRes.data.token);
    //   history.push("/");
    // } catch (err) {
    //   setTimeout(() => {
    //     err.response.data.msg && setNodeError(err.response.data.msg);
    //   }, 1000);
    // }
  };
  const welcome = props.location.welcome;

  return (
    <div className={Styles.reg}>
      <div className={Styles.regcon}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Reset Password</h1>
          <div className={Styles.errorcon}>{welcome && <p>{welcome}</p>}</div>

          <input
            name="password"
            type="password"
            placeholder="password"
            ref={register}
          />
          <div className={Styles.errorcon}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            ref={register}
          />
          <div className={Styles.errorcon}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* <input type="submit" /> */}
          <Button type="submit" isLoading={isButtonLoading}>
            Submit
          </Button>
          <div className={Styles.errorcon}>
            {nodeError && <p>{nodeError}</p>}
          </div>
          <p>Enter your new password</p>
        </form>
      </div>
    </div>
  );
};

export default Reset;
