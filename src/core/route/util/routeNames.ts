const ROOT_ROUTE = "/";

const ROUTE_NAMES = {
    ROOT:ROOT_ROUTE,

    HOME:{
        ROOT : `${ROOT_ROUTE}home`
    },
    ABOUT:{
        ROOT :  `${ROOT_ROUTE}about`,
        API_DOC : `${ROOT_ROUTE}doc`,
        AUTHORS : `${ROOT_ROUTE}authors`
    }
};

export default ROUTE_NAMES;