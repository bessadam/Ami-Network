import React from "react";
import "./DiscussPanel.scss";
import DiscussBlock from "./DiscussBlock";
import UserBlock from "./UserBlock";
import {Context} from "../../context/Context"
import {IPost} from "../../types/PostInterface"

const DiscussPanel: React.FC = () => {
  const [state, ] = React.useContext(Context);
  const loggedIn = localStorage.getItem("loggedIn");

  const filteredState = state.filter((itemFilter: IPost, index: number) => {
    return index === state.findIndex((item: IPost) => item.login === itemFilter.login);
  });

  let allVisibleState = state.filter((item: IPost) => {
    if(item.visibility === "Everyone") {
      return item;
    };
  });

  return (
    <div className="posts-panel">
      <div className="posts-panel-title">
        <p>Most Relevant Posts</p>
      </div>
      {loggedIn ?
        state.slice(0,4).map((post: IPost, key: number) => {
          return <DiscussBlock posts={post} key={key} />
        })
      : allVisibleState.slice(0,4).map((post: IPost, key: number) => {
          return <DiscussBlock posts={post} key={key} />
        })
      }
      <div className="posts-panel-users">
        <p className="posts-panel-users-title">Our Users</p>
        {filteredState.map((item: IPost, key: number) => {
          return <UserBlock item={item} key={key} />
        })}
      </div>
    </div>
  );
}

export default DiscussPanel;
