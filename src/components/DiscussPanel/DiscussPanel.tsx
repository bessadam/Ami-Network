import React from "react";
import DiscussBlock from "./DiscussBlock";
import UserBlock from "./UserBlock";
import "./DiscussPanel.scss";
import {Context} from "../../context/Context"
import {IPost} from "../../types/PostInterface"

const DiscussPanel: React.FC = () => {
  const [state, ] = React.useContext(Context);
  const loggedIn = localStorage.getItem("loggedIn");

  const filteredState = state.filter((itemFilter: any, index: number) => {
    return index === state.findIndex((item: any) => item.login === itemFilter.login)
  });

  return (
    <div className="posts-panel">
      <div className="posts-panel-title">
        <p>Most Relevant Posts</p>
      </div>
      {state.slice(0,4).map((post: IPost, key: number) => {
        if(post.visibility === "Everyone") {
          return <DiscussBlock posts={post} key={key} />
        } else if(loggedIn && post.visibility === "Only Authorized Users") {
          return <DiscussBlock posts={post} key={key} />
        }
      })}
      <div className="posts-panel-users">
        <p className="posts-panel-users-title">Our Users</p>
        {filteredState.map((item: {}, key: number) => {
          return <UserBlock item={item} key={key} />
        })}
      </div>
    </div>
  );
}

export default DiscussPanel;
