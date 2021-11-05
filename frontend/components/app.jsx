import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import NotFound from "./not_found/not_found";
import { Switch } from "react-router";
import Modal from './modal/modal'
import Menu from './nav_bar/menu'

const App = () => (
  <div>
    <Modal />
    <header>
      <Route exact path="/" component={NavBarContainer} />
      <Menu/>
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);


export default App;

