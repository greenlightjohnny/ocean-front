import React from "react";
import Styles from "./about.module.scss";
import Place from "../images/place2.png";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <section className={Styles.about}>
      <div className={Styles.container}>
        <div className={Styles.flex}>
          <div className={Styles.txt}>
            <h3>Login</h3>
            <p>
              For the registration and login forms, I am using Joi for input
              validation client side before submitting information to the back
              end server. It displays error messages telling the user what the
              issue is. After successfully submitting to the server, I have a
              spinner display for 1 second just so the user feels like it is
              actually checking (it is, but obviously much faster). If my back
              end server returns an error message, such as the email already
              being registered, that message will be displayed. On success the
              user will be redirected.
            </p>
          </div>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Place} alt="image" />
            </div>
          </Zoom>
        </div>

        <div className={Styles.flex}>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Place} alt="image" />
            </div>
          </Zoom>
          <div className={Styles.txt}>
            <h3>Login</h3>
            <p>
              For the registration and login forms, I am using Joi for input
              validation client side before submitting information to the back
              end server. It displays error messages telling the user what the
              issue is. After successfully submitting to the server, I have a
              spinner display for 1 second just so the user feels like it is
              actually checking (it is, but obviously much faster). If my back
              end server returns an error message, such as the email already
              being registered, that message will be displayed. On success the
              user will be redirected.
            </p>
          </div>
        </div>

        <div className={Styles.flex}>
          <div className={Styles.txt}>
            <h3>Registration</h3>
            <p>
              For the registration and login forms, I am using Joi for input
              validation client side before submitting information to the back
              end server. It displays error messages telling the user what the
              issue is. After successfully submitting to the server, I have a
              spinner display for 1 second just so the user feels like it is
              actually checking (it is, but obviously much faster). If my back
              end server returns an error message, such as the email already
              being registered, that message will be displayed. On success the
              user will be redirected.
            </p>
          </div>
          <div className={Styles.pic}>
            <img src={Place} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
