import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ContentSide from "../components/ContentSide/ContentSide";
import DiscussPanel from "../components/DiscussPanel/DiscussPanel";

const Posts: React.FC = () => {
  return (
    <div className="posts">
      <Sidebar />
      <ContentSide />
      <DiscussPanel />
    </div>
  );
};

export default Posts;
