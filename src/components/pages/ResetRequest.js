import React, { useContext, useState, useEffect } from "react";
import Styles from "../../components/auth/register.module.scss";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Joi from "joi";
import axios from "axios";
import Button from "../util/Button";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export default function ResetRequest(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  });
  const authcontext = useContext(AuthContext);
  const history = useHistory();
  const [nodeError, setNodeError] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const APIReset = "/api/v1/users/reset";

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
      const resetRes = await axios.post(APIReset, data, {
        withCredentials: true,
      });
      setSuccess(true);
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
    <>
      {!success ? (
        <div className={Styles.reg}>
          <div className={Styles.regcon}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Reset</h1>
              <div className={Styles.errorcon}>
                {welcome && <p>{welcome}</p>}
              </div>
              <input
                name="email"
                placeholder="Email"
                defaultValue=""
                ref={register}
              />
              <div className={Styles.errorcon}>
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              {/* <input type="submit" /> */}
              <Button type="submit" isLoading={isButtonLoading}>
                Submit
              </Button>
              <div className={Styles.errorcon}>
                {nodeError && <p>{nodeError}</p>}
              </div>
              <p>
                Forgot your password? Enter the email you registered with and we
                will send you a link reset it.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className={Styles.reg}>
          <div className={Styles.regcon}>
            <h1>Success! Check your email to reset your password</h1>
          </div>
        </div>
      )}
    </>
  );
}
