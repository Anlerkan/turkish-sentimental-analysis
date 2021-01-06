import "./_authors-page.scss";

import React from "react";

import Page from "../../main/page/Page";
import Header from "../../main/page/header/Header";
import Footer from "../../main/page/footer/Footer";
import AuthorsList from "../list/AuthorsList";

function AuthorsPage() {
  return (
    <Page metaTitle={"Authors"} customClassName="home gray-bg">
      <div className={"home"}>
          <Header/>
        <AuthorsList/>
        <Footer/>
      </div>
    </Page>
  );
}

export default AuthorsPage;
