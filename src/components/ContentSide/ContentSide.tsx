import React from "react";
import ContentBlock from "./ContentBlock";
import "./ContentSide.scss";
// import {Context} from "../../context/Context"; ebss
import {IPost} from "../../types/PostInterface";
import {useSelector} from "react-redux";
import { RootState } from "../../redux/store";

const ContentSide: React.FC = () => {
  // const [state] = React.useContext(Context); ebss
  const loggedIn = localStorage.getItem("loggedIn");
  const posts = useSelector((state: RootState) => state.posts.posts)

  return (
    <div className="content">
      {posts.map((post: IPost, key: number) => {
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
