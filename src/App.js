import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";

import Confirm from "./components/auth/Confirm";
import Secret from "./components/pages/Secrets";
import Private from "./hocs/Private2";
import Reset from "./components/pages/ResetRequest";
import Reset2 from "./components/auth/reset";
import UserControl from "./components/pages/UserControl";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/register" component={Register}></Route>
          <Private path="/secrets" component={Secret}></Private>
          {/* <Route path="/user" component={UserControl}></Route> */}
          <Private path="/user" component={UserControl}></Private>
          <Route path="/confirm/:etoken" component={Confirm}></Route>
          <Route path="/resetform/:token" component={Reset2}></Route>
          <Route path="/reset" component={Reset}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
