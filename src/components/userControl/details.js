import React from "react";
import Styles from "./details.module.scss";

function details() {
  return (
    <div className={stylers.main}>
      <h1>Details</h1>
      <div className={Styles.info}>
        <p>Blah blah blah</p>
      </div>
    </div>
  );
}

export default details;
