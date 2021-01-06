import React from 'react'
import ROUTE_NAMES from './util/routeNames';
import { Route } from 'react-router-dom';
import HomePage from '../../home/page/HomePage';
import AuthorsPage from '../../authors/page/AuthorsPage';
import DocPage from '../../doc/page/DocPage';

function getPublicRouteComponents() {
    return [
        <Route
            key={`route:=${ROUTE_NAMES.HOME.ROOT}`}
            exact={true}
            path={ROUTE_NAMES.HOME.ROOT}>
            <HomePage />
        </Route>,

        <Route
            key={`route:=${ROUTE_NAMES.ABOUT.API_DOC}`}
            exact={true}
            path={ROUTE_NAMES.ABOUT.API_DOC}>
            <DocPage />
        </Route>,

        <Route
            key={`route:=${ROUTE_NAMES.ABOUT.AUTHORS}`}
            exact={true}
            path={ROUTE_NAMES.ABOUT.AUTHORS}>
            <AuthorsPage />
        </Route>,

        <Route
            key={`route:=${ROUTE_NAMES.ABOUT.ROOT}`}
            exact={true}
            path={ROUTE_NAMES.ABOUT.ROOT}>
            <HomePage />
        </Route>,
    ]
}

export default getPublicRouteComponents;
