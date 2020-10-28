import React from "react";
import Styles from "./about.module.scss";
import Place from "../images/place2.png";
import Reg from "../images/reg.png";
import Login from "../images/loginback.png";
import Jwtback from "../images/jwtback.png";
import Email from "../images/email.png";
import Confirm from "../images/confirmback.png";
import Token from "../images/token.png";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <section className={Styles.about}>
      <div className={Styles.container}>
        <div className={Styles.flex}>
          <div className={Styles.txt}>
            <h3>Front end Login</h3>
            <p>
              Client side input validation using Joi, displays error message if
              the input is not valid and does not send to the back end server.
              If it passes the validation, it makes a POST request to the back
              end Node REST API using Axios.
            </p>
          </div>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Place} alt="placeholder" />
            </div>
          </Zoom>
        </div>

        <div className={Styles.flex}>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Login} alt="placeholder" />
            </div>
          </Zoom>
          <div className={Styles.txt}>
            <h3>Back end login api</h3>
            <p>
              The back end server is a VPS Digital Ocean Droplet. I have it
              running Ubuntu and an Nginx server which directs incoming
              requests. PM2 is used to manage multiple Node apps. The login
              request is sent to a Node process that is using Express for
              routing and Mongoose for database connectivity and schemas.
              <br></br> <br></br>
              The login route also validates the data using Joi. If it passes,
              Mongoose is used to query the MongoDB server to see if the user
              exists. If it does, Mongoose returns the user object and Bcrypt is
              used to compare the stored hashed password with the password sent
              in the request. If it matches, a JWT is generated using the NPM
              "json-web-token" module.
            </p>
          </div>
        </div>

        <div className={Styles.flex}>
          <div className={Styles.txt}>
            <h3>Back end JWT generation</h3>
            <p>
              A secret key stored on the server is used along with the MongoDB
              generated user ID to create and sign a JSON Web Token. This JWT is
              sent back to the client stored inside a cookie. The cookie is set
              to httpOnly=true, meaning it can only be accessed via HTTP, and
              sameSite=true is set to insure it is only sent to the correct
              server. Supposedly this is currently the most secure method, since
              the cookie can't be accessed by client side JavaScript.
            </p>
          </div>
          <Slide right>
            <div className={Styles.pic}>
              <img src={Jwtback} alt="placeholder" />
            </div>
          </Slide>
        </div>

        <div className={Styles.flex}>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Token} alt="placeholder" />
            </div>
          </Zoom>
          <div className={Styles.txt}>
            <h3>Client receives login response</h3>
            <p>
              If the login request passed the gauntlet of checks, it receives a
              cookie as a reward. If it fails, an error message is displayed
              telling the user what the problem is (validation, user/password
              not found, database server error).
              <br></br> <br></br>
              The cookie is now stored and sent along with any request to the
              back end Node REST API, allowing the user to access protected
              routes. Once the user is authenticated, the register and login
              buttons on the nav bar are replaced with a logout button. The
              logout button sends a request to the API to removed the cookie,
              and once done the client can no longer access private routes on
              the React front end.
            </p>
          </div>
        </div>

        <div className={Styles.flex}>
          <div className={Styles.txt}>
            <h3>Registration</h3>
            <p>
              The first steps are almost the same as the login. Joi is used
              client side for validation and Axios is used to send a POST
              request to the Node back end server. The Node server also uses
              Joi, and after data validation sends a query using Mongoose to the
              MongoDB Atlas server to find out if the email has already been
              registered.
            </p>
            <p>
              If not, the user data is temporarily saved to the MongoDB server.
              The password, of course, is salted and encrypted before being sent
              from the Node server to the MongoDB server.
            </p>
            <p>
              A temporary JWT is generated using a secret key and the MongoDB
              generated user ID, and this is passed on to the email handler.
            </p>
          </div>
          <Zoom>
            <div className={Styles.pic}>
              <img src={Reg} alt="placeholder" />
            </div>
          </Zoom>
        </div>
      </div>

      <div className={Styles.flex}>
        <Zoom>
          <div className={Styles.pic}>
            <img src={Email} alt="placeholder" />
          </div>
        </Zoom>
        <div className={Styles.txt}>
          <h3>Client is sent confirmation email</h3>
          <p>
            SendGrid is used to send an email via SMTP (had to punch a hole in
            the firewall for this, wasted a few hours wondering why it was not
            working). On successfully sending the email, the Node server sends a
            message back to the client telling them to confirm their email and
            redirects them to the login page.
            <br></br> <br></br>
          </p>
        </div>
      </div>

      <div className={Styles.flex}>
        <div className={Styles.txt}>
          <h3>Client confirms email</h3>
          <p>
            The client receives an email with a link to the site in the form of
            "www.sitename.com/confirm/long-string-jwt". Clicking on the link
            takes them to the React front end and to a unique URL. I am using
            React Router and the token as a param to create a page dynamically
            with the JWT as part of the URL. This React component, once loaded,
            sends a request to the Node server. The Node server receives the
            request and Express sends it to the verification route.
            <br></br> <br></br>
            The JWT is validated, and if everything checks out, sends a
            conformation back to the the client. The client is given a success
            message, and after two seconds redirected to the login page. Easy!
          </p>
        </div>
        <Zoom>
          <div className={Styles.pic}>
            <img src={Confirm} alt="placeholder" />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;
