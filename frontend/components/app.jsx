import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home"
import NotFound from "./not_found/not_found"

const App = () => (
  <div>
    <header>
      <Route path="/" component={NavBarContainer} />
    </header>
    <Switch>
      {/* <Route path="/" component={NavBarContainer} /> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact={true} path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
//authroute link to the containers => connect => sessonForm?