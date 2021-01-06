import {ReactComponent as Logo} from "../../../core/ui/icons/logo.svg";
import {ReactComponent as HeartIcon} from "../../../core/ui/icons/heart.svg";

import "./_footer.scss";

import React from "react";

function Footer() {
  return (
    <footer className={"footer"}>
      <div className="container">
        <div className="page-footer-body">
          <Logo className={"page-footer-logo"} />
          <div className="authors">
            <p>
              {"Made with"} <HeartIcon /> {"by "}
              <span
                className={"page-footer-link"}
                onClick={() => (window.location.href = "https://github.com/Anlerkan")}>
                {"Anlerkan"}
              </span>{" "}
              and{" "}
              <span
                className={"page-footer-link"}
                onClick={() => (window.location.href = "https://github.com/g3vxy")}>
                {"g3vxy"}
              </span>{" "}
            </p>
          </div>
          <small className={"page-footer-year"}>{"2021"}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
