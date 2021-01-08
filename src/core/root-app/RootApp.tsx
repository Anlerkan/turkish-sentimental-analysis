import "../ui/style/_overrides.scss";

import React, {Suspense} from "react";
import { Route, Switch, HashRouter} from "react-router-dom";
import getPublicRouteComponents from "../route/publicRoutes";
import HomePage from "../../home/page/HomePage";
import getPublicFallbackRoutes from "../route/fallbackRoutes";


function RootApp() {
  return (
    <HashRouter basename={"/"}>
      <Route path={"/"} component={AppWithErrorBoundary} />
    </HashRouter>
  );
}

function AppWithErrorBoundary() {
  return (
    <React.StrictMode>
      <Suspense fallback={<HomePage />}>
        <Switch>{[...getPublicRouteComponents(), ...getPublicFallbackRoutes()]}</Switch>
      </Suspense>
    </React.StrictMode>
  );
}

// const hotRootApp = isDevelopmentEnv() ? hot(RootApp) : RootApp;

export default RootApp;
