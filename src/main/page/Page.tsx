import "./_page.scss";

import React, {useEffect} from "react";
import classNames from "classnames";

interface PageProps {
  children: React.ReactNode;
  metaTitle?: string;
  customClassName?: string;
  fixedFooterContent?: React.ReactNode;
}

function Page({children, metaTitle, customClassName}: PageProps) {
  const containerClassName = classNames("page-container", customClassName);

  useEffect(() => {
    document.title = `Turkish Sentimental Analysis - ${metaTitle}`;
  }, [metaTitle]);

  return (
    <div className={containerClassName}>
      <div className={"main-body"}>
        <div className={"main-body-content"}>{children}</div>
      </div>
    </div>
  );
}

export default Page;
