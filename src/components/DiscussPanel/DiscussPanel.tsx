import React from "react";
import "./DiscussPanel.scss";
import DiscussBlock from "./DiscussBlock";
import UserBlock from "./UserBlock";
// import {Context} from "../../context/Context"; bess
import {IPost} from "../../types/PostInterface";
import {useSelector} from "react-redux";
import { RootState } from "../../redux/store";

const DiscussPanel: React.FC = () => {
  // const [state, ] = React.useContext(Context); bess
  const loggedIn = localStorage.getItem("loggedIn");
  const posts = useSelector((state: RootState) => state.posts.posts)


  const filteredState = posts.filter((itemFilter: IPost, index: number) => {
    return index === posts.findIndex((item: IPost) => item.login === itemFilter.login);
  });

  let allVisibleState = posts.filter((item: IPost) => {
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
        posts.slice(0,4).map((post: IPost, key: number) => {
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
