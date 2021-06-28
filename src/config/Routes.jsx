import React from "react";
import { Switch, Route } from "react-router-dom";
import { Result } from "antd";

import LayoutWrapper from "../layouts/DefaultLayout";

import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

const Routes = () => (
  <Switch>
    <RouteWrapper path="/" component={MainPage} exact />
    <RouteWrapper path="/products" component={ProductPage} exact />
    <RouteWrapper component={() => <Result status="500" />} />
  </Switch>
);

const RouteWrapper = ({ component: C, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => (
      <LayoutWrapper>
        <C {...props} />
      </LayoutWrapper>
    )}
  />
)

export default Routes;
