import {ReactComponent as InfoIcon} from "../../../core/ui/icons/info.svg";
import {ReactComponent as Logo} from "../../../core/ui/icons/logo.svg";
import {ReactComponent as DocIcon} from "../../../core/ui/icons/doc.svg";
import {ReactComponent as UserIcon} from "../../../core/ui/icons/user.svg";

import "./_header.scss";

import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import ROUTE_NAMES from "../../../core/route/util/routeNames";
import {Button} from "@hipo/react-ui-toolkit";

function Header() {
  const history = useHistory();
  const navigation = [
  
    {
      id: "authors",
      to: ROUTE_NAMES.ABOUT.AUTHORS,
      content: (
        <>
          <UserIcon className={"page-header-navigation-list-item-anchor-icon"} />

          {"Authors"}
        </>
      )
    },
    {
      id: "doc",
      to: ROUTE_NAMES.ABOUT.API_DOC,
      content: (
        <>
          <DocIcon className={"page-header-navigation-list-item-anchor-icon"} />

          {"Doc"}
         
        </>
      )
    }
  ];

  return (
    <>
      <header className={"page-header authenticated"}>
        <div className={"page-header-body container"}>
          {renderNavigation()}
          <Logo className={"page-header-logo"} />
          <div className={"page-header-side-navigation"}>
         
            <InfoIcon />
            <Button customClassName={"blue"} onClick={handleGoToHome}>
              {"Compute"}
            </Button>
          </div>
        </div>
      </header>
      <div className={"page-bottom-navigation-bar"}>{renderNavigation()}</div>
    </>
  );

  function renderNavigation() {
    return (
      <ul className={"page-header-navigation"}>
        {navigation.map((url) => (
          <li key={url.id} className={"page-header-navigation-list-item"}>
            <NavLink
              to={url.to}
              className={"page-header-navigation-list-item-anchor"}
              activeClassName={"active"}>
              {url.content}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
  function handleGoToHome() {
    history.push(ROUTE_NAMES.HOME.ROOT);
  }
}

export default Header;
