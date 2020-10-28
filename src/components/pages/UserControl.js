import React from "react";
import Styles from "./usercontrol.module.scss";

const handleClick = () => {
  console.log("click");
};

const UserControl = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.gridContainer}>
          <div className={Styles.select}>
            <div className={Styles.selectItem}>
              <button onClick={handleClick}>
                <h4>User</h4>
              </button>
            </div>
            <div className={Styles.selectItem}>
              <button onClick={handleClick}>
                <h4>User</h4>
              </button>
            </div>
            <div className={Styles.selectItem}>
              <button onClick={handleClick}>
                <h4>User</h4>
              </button>
            </div>
            <div className={Styles.selectItem}>
              <button onClick={handleClick}>
                <h4>User</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserControl;
