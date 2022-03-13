import React from "react";
import ContentBlock from "./ContentBlock";
import "./ContentSide.scss";
import {Context} from "../../context/Context";
import {IPost} from "../../types/PostInterface";

const ContentSide: React.FC = () => {
  const [state] = React.useContext(Context);
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="content">
      {state.map((post: IPost, key: number) => {
        if(post.visibility === "Everyone") {
          return <ContentBlock post={post} key={key} />
        } else if(loggedIn && post.visibility === "Only Authorized Users") {
          return <ContentBlock post={post} key={key} />
        }
      })}
    </div>
  );
};

export default ContentSide;
