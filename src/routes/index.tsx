import React from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./Home";

const routesConfig = [
  {
    path: "/",
    component: Home,
    name: "Home",
    exact: true,
  },
];

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((config) => {
          return (
            <Route
              exact={config.exact || true}
              key={`${config.name}`}
              path={config.path}
              render={(props: RouteComponentProps) => {
                return <config.component {...props} />;
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
