import React from "react";
import Flow from "../../images/flow3.svg";
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
                Three servers (Netlify, Heroku, Atlas) <br></br>
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
            <img src={Flow} alt="Diagram of servers" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
