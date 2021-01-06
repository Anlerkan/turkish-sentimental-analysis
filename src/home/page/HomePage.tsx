import "./_home-page.scss";

import React from "react";

import Page from "../../main/page/Page";
import PredictSentenceForm from "./form/PredictSentenceForm";
import Header from "../../main/page/header/Header";
import Footer from "../../main/page/footer/Footer";

function HomePage() {
  return (
    <Page metaTitle={"Home"} customClassName="home gray-bg">
      <div className={"home"}>
          <Header/>
        <PredictSentenceForm />
        <Footer/>
      </div>
    </Page>
  );
}

export default HomePage;
