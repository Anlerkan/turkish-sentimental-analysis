import {ReactComponent as CompanyIcon} from "../../../core/ui/icons/company.svg";
import {ReactComponent as TwitterIcon} from "../../../core/ui/icons/twitter.svg";
import {ReactComponent as BlogIcon} from "../../../core/ui/icons/blog.svg";
import {ReactComponent as LocationIcon} from "../../../core/ui/icons/location.svg";

import "./_authors-list-row.scss";

import React from "react";
import Avatar from "../../../components/avatar/Avatar";

interface AuthorListRowProps {
  author: any;
}

function AuthorsListRow({author}: AuthorListRowProps) {
  const avatarSize = {width: "120px", height: "120px"};
  return (
    <div className={"author-list-row"}>
      <Avatar
        size={avatarSize}
        alt={`${author.login}'s avatar`}
        customClassName={"author-list-row-item avatar"}
        src={author.avatar_url}
      />
      <div className={"author-list-row-info"}>
        <p className={"author-list-row-item username"}>{author.login}</p>
        {author.company && (
          <p
            onClick={() =>
              window.location.assign(
                `https://github.com/${author.company}`.replace("@", "")
              )
            }
            className={"author-list-row-item company"}>
            <CompanyIcon className={"author-list-item icon"} />
            {author.company}
          </p>
        )}
        {author.twitter_username && (
          <p
            onClick={() =>
              window.location.assign(`https://twitter.com/${author.twitter_username}`)
            }
            className={"author-list-row-item twitter"}>
            <TwitterIcon className={"author-list-item icon"} />
            {author.twitter_username}
          </p>
        )}
        {author.blog && (
          <p
            onClick={() => window.location.assign(`https://${author.blog}`)}
            className={"author-list-row-item blog"}>
            <BlogIcon className={"author-list-item icon"} />
            {author.blog}
          </p>
        )}
        {author.location && (
          <p className={"author-list-row-item location"}>
            <LocationIcon className={"author-list-item icon"} />
            {author.location}
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthorsListRow;
