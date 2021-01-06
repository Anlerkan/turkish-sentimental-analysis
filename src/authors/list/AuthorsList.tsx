import "./_authors-list.scss";

import React, {useState, useEffect} from "react";
import axios from "axios";
import AuthorsListRow from "./row/AuthorsListRow";
import {Spinner} from "@hipo/react-ui-toolkit";

const authorsList = ["Anlerkan", "g3vxy"];
const rootUrl = "https://api.github.com";

function AuthorsList() {
  const [authors, setAuthors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className={"authors-list"}>
      <p className={"authors-list-title"}>{"Authors"}</p>
      {isLoading ? (
        <Spinner spinnerColor={`var(--ocean-blue)`} backgroundColor={"white"} />
      ) : (
        <div className={"authors-list-body"}>
          {authors.map((author) => {
            return <AuthorsListRow key={author.id} author={author} />;
          })}
        </div>
      )}

      <p className={"authors-list-title"}>{"Contributers"}</p>
      <p
        className={"authors-list-contribute"}
        onClick={() => window.location.assign("https://github.com/g3vxy/mnb_ml")}>
        {"No one contributed yet.Be first!"}
      </p>
    </div>
  );

  async function getAuthors() {
    let authorList: any[] = [];
    setIsLoading(true);

    for (let i = 0; i < authorsList.length; i++) {
      const response = await axios(`${rootUrl}/users/${authorsList[i]}`);
      authorList.push(response.data);
    }
    
    setAuthors(authorList);
    setIsLoading(false);

    return authorList;
  }
}

export default AuthorsList;
