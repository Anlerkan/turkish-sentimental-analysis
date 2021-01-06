import "../ui/style/_overrides.scss";

import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import getPublicRouteComponents from "../route/publicRoutes";
import HomePage from "../../home/page/HomePage";
import getPublicFallbackRoutes from "../route/fallbackRoutes";


function RootApp() {
  return (
    <BrowserRouter basename={"/"}>
      <Route path={"/"} component={AppWithErrorBoundary} />
    </BrowserRouter>
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
