import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../../home/page/HomePage';

function getPublicFallbackRoutes() {
    return [
        <Route key={"*"} path={"*"} component={HomePage} />

        //  Error Page
    ];
}

export default getPublicFallbackRoutes;
