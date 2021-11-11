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
import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import CategoryContainer from "./products/category_container";
import Footer from './footer'

const App = () => (
  <div>
    <Modal />
    <header>
      <Route path="/" component={NavBarContainer} />
      <Menu />
    </header>
    <Switch>
      <Route
        exact
        path="/products/categories/:category"
        component={CategoryContainer}
      />
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route exact path="/" component={ProductIndexContainer} />
      <Route component={NotFound} />
    </Switch>
    <Footer className="footer"/>
  </div>
);


export default App;

