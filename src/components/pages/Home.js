import React from "react";
import Flow from "../../images/flow3.svg";
import About from "../About";
import Styles from "./home.module.scss";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Icon4 from "../../images/icon4.png";
import Icon5 from "../../images/icon5.png";
import Icon6 from "../../images/icon6.png";
import Icon7 from "../../images/icon7.png";
import Icon8 from "../../images/icon8.png";
import Icon9 from "../../images/icon9.png";
import Icon11 from "../../images/icon11.png";
import Icon12 from "../../images/icon12.png";
import Icon13 from "../../images/icon13.png";
import Icon14 from "../../images/icon14.png";
import Icon15 from "../../images/icon15.png";
import Icon16 from "../../images/icon16.png";
import Icon10 from "../../images/icon10.png";
import Icon17 from "../../images/icon17.png";

const Home = () => {
  return (
    <>
      <section className={Styles.hero}>
        <div className={Styles.heroCon}>
          <div className={Styles.heroFlex}>
            <div className={Styles.info}>
              <h1>
                MERN For Fun and <span>Profit</span>
              </h1>
              <p>
                Three servers (Netlify, Digital Ocean, Atlas) <br></br>
                Registration with client AND server side validation <br></br>
                Email confirmations with unique JWT URL's <br></br>
                Bcrypt salting and hashing <br></br>
                REST API JWT authorization/authentication<br></br>
              </p>
            </div>
            <div className={Styles.tech}>
              <h3>The tech:</h3>
              <div className={Styles.logoflex}>
                <div className={Styles.iconcon}>
                  <img src={Icon15} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon2} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon3} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon4} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon5} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon17} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon16} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon1} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon7} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon8} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon9} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon10} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon11} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon6} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon13} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon14} alt="test" />
                </div>
                <div className={Styles.iconcon}>
                  <img src={Icon12} alt="test" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.flow}>
        <div className={Styles.con}>
          <div className={Styles.imgcon}>
            <img src={Flow} alt="Diagram of servers" />
          </div>
          <div className={Styles.sendit}>
            <div className={Styles.left}>
              <h3>Front End</h3>
              <p>
                Lots going on here! This has a React SPA front end (hosted on
                Netlify). It's using all React functional components with Hooks,
                no class based components. useContext, useEffect, useState, and
                createContext are use. For routing, I have private and public
                routes set up and redirects in place with the useParams and
                useHistory to display error messages and redirect the client{" "}
              </p>
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
            <div className={Styles.right}>
              <h3>Back End</h3>
              <p>
                I have two back end servers: <br></br>A Digital Ocean VPS
                running Nginx and PM2, and a MongoDBAtlas server for the
                database.
                <br></br>
                The Node server is using Express and Mongoose for routing and
                database work, along with Joi for input validation and Bcrypt
                for salting and hashing. Authentication and authorization is
                handled using JWTs, which are stored client side only, making it
                a REST API. The Node server is also responsible for sending out
                registration conformation emails with a separate unique JWT.
                <br></br>
              </p>
              <p>
                The Digital Ocean VPS is running several different Node
                applications on different ports using PM2 to manage them, and
                Nginx is used to route incoming requests to the correct one. The
                Node program I built for this is a REST API, it is using Express
                for routing and Mongoose for database connectivity. It has
                routes for registration, login, deleting the account, logging
                out, authentication, and email conformation
              </p>
              <p>
                Both the registration and login routes also use Joi to validate
                input prior to sending a request to the MongoDB server. If there
                is an error, it is sent back the client without needing to
                bother the poor server.
              </p>
              <p>
                The registration and login routes also both use Bcrypt to salt
                and hash passwords along with a secret key.
              </p>
              <p>
                The registration route will temporarily save the user to the
                MongoDB database, and create a JWT using the generated ID and
                secret key. This JWT has a 20 minute expiration window. Next an
                email is sent using either Node Mailer or SendGrid with a link
                that uses the JWT as a URI parameter. The user has 20 minutes to
                click the link, taking them to the front end confirmation page
                where the JWT is taken from the URI and sent to the back end
                Node confirmation route for checking.{" "}
              </p>
              <p>
                If the registration and confirmation are successful, the client
                can now login. The login request checks the email to see if it
                exists, and the password against the stored hashed version. If
                successful it generates a JWT signed with a secret key and the
                users MongoDB generated ID. It is returned to the client as a
                HttpOnly and sameSite=true cookie. This is allegedly the
                securest way to store it client side. Because it is a REST API,
                the JWT is not stored on the back end.{" "}
              </p>
              <p>
                Each time the user sends a request once logged in, the JWT is
                included and sent to the back end server as a cookie. I use
                Cookie Parser to read the cookie, and check to see if it is
                valid using a JWT verify function.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
