import React, { useState, useEffect } from "react";
import Styles from "./usercontrol.module.scss";
import { Link } from "react-router-dom";
const UserControl = () => {
  const [linkState, setLinkState] = useState({
    links: [
      {
        id: 1,
        type: "a",
        name: "Home",
        to: "/",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
      {
        id: 2,
        type: "a",
        name: "Data",
        to: "/secrets",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
      {
        id: 3,
        type: "button",
        name: "Details",
        to: "/",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
      {
        id: 4,
        type: "button",
        name: "Settings",
        to: "/",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
      {
        id: 5,
        type: "button",
        name: "Security",
        to: "/",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
      {
        id: 6,
        type: "a",
        name: "Logout",
        to: "/logout",
        className: "selectItem",
        path:
          "M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z",
      },
    ],
  });

  //   let fix = clsx({
  //     ["selectItem"]: true,
  //     ["active"]: activeLink === item.id ? true : false,
  //   });
  const [activeLink, setActiveLink] = useState(false);

  const handleClick = (id) => {
    console.log("click");
    setActiveLink(id);
  };

  useEffect(() => {
    setActiveLink(3);
  }, []);

  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.gridContainer}>
          <div className={Styles.info}></div>
          <div className={Styles.select}>
            {linkState.links.map((item) => {
              return (
                <div className={Styles.selectItem} key={item.id}>
                  {item.type === "button" ? (
                    <>
                      <span
                        className={
                          activeLink === item.id ? Styles.round : Styles.hide
                        }
                      ></span>
                      <span
                        className={
                          activeLink === item.id ? Styles.round2 : Styles.hide
                        }
                      ></span>
                      <button
                        className={activeLink === item.id ? Styles.active : ""}
                        onClick={() => handleClick(item.id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          stroke="currentColor"
                        >
                          <path d={item.path}></path>
                        </svg>
                        <span>{item.name}</span>
                      </button>
                    </>
                  ) : (
                    <Link to={item.to} alt={item.name}>
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d={item.path}></path>
                      </svg>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserControl;
