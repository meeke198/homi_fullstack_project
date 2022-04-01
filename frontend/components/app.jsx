import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import NotFound from "./not_found/not_found";
import { Switch } from "react-router";
import Modal from './modal/modal'
import Menu from './nav_bar/menu'
import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import CategoryContainer from "./products/category_container";
import Footer from './footer';
import CartIndexContainer from './carts/cart_index_container';
import ReviewFormContainer from './reviews/review_form_container';
import EditReviewContainer from "./reviews/edit_review_container";
import ProfileContainer from "../components/profiles/profile_container";
import OrderConfirm from "../components/order_confirmation/order_confirm";


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
      <ProtectedRoute exact path="/cart_items" component={CartIndexContainer} />
      <ProtectedRoute exact path="/reviews/new" component={ReviewFormContainer} />
      <ProtectedRoute exact path="/users/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/reviews/:reviewId/edit"
        component={EditReviewContainer}
      />

      <Route exact path="/" component={ProductIndexContainer} />
      <Route exact path="/order_confirmation" component={OrderConfirm} />
     

      <Route component={NotFound} />
    </Switch>
    <Footer className="footer" />
  </div>
);


export default App;

