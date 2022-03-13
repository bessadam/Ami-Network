import React from "react";
import { NavLink } from "react-router-dom";
import { IPost } from "../../types/PostInterface";

interface UserProps {
  item: IPost;
}

const UserBlock: React.FC<UserProps> = (props) => {
  const {item} = props;
  const storageLogin = localStorage.getItem("login");
  
  return (
    <div className="posts-panel-users-block">
      <div className="posts-panel-users-block-avatar">
        <NavLink to={`/profile/${item.login}`}><img src={item.avatar} alt="" /></NavLink>
      </div>
      <div className="posts-panel-users-block-user">
        <NavLink to={`/profile/${item.login}`}><p className="posts-panel-users-block-user-login">{item.login}</p></NavLink>
        <p className={item.login === storageLogin ? "posts-panel-users-block-user-status-online" : "posts-panel-users-block-user-status"}>&middot;</p>
      </div>
    </div>
  );
}

export default UserBlock;
