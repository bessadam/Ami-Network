import React from "react";
import "./DiscussPanel.scss";
import { IPost } from "../../types/PostInterface";
import { NavLink } from "react-router-dom";

interface DiscussBlockProps {
  posts: IPost;
}

const DiscussBlock: React.FC<DiscussBlockProps> = (props) => {
  let { posts } = props;


  return (
    <div className="posts-block">
      <div className="posts-block-image">
        <NavLink to={`/profile/${posts.login}`}>
          <img alt="" src={posts.avatar} className="posts-block-image-item" />
        </NavLink>
      </div>
      <div className="posts-block-info">
        <p className="posts-block-info-title">{posts.title}</p>
        <p className="posts-block-info-date">{posts.date}</p>
      </div>
    </div>
  );
};

export default DiscussBlock;
