import "./_doc-page.scss";

import React from "react";
import Page from "../../main/page/Page";
import Header from "../../main/page/header/Header";
import Footer from "../../main/page/footer/Footer";

function DocPage() {
  return (
    <Page metaTitle={"Doc"} customClassName="home gray-bg">
      <div className={"doc-page"}>
        <Header />
        <div className={"doc-page-body"}>
          <a href="https://github.com/g3vxy/mnb_ml/blob/main/markdown_files/Rapor.pdf">
            <img
              src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png"
              alt="pdf"
              width="120"
              height="130"
            />
          </a>
        </div>
        <Footer />
      </div>
    </Page>
  );
}

export default DocPage;
