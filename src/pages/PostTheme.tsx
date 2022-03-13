import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ContentBlock from "../components/ContentSide/ContentBlock";
import DiscussPanel from "../components/DiscussPanel/DiscussPanel";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../context/Context";
import { postCategories } from "../assets/data/Posts";
import { IPost } from "../types/PostInterface";

const PostTheme: React.FC = () => {
  const { category } = useParams<string>();
  const [state, ] = React.useContext(Context);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (category) {
      if (postCategories.includes(category)) {
        return;
      } else {
        navigate("*");
      }
    }
  }, [category]);

  return (
    <div className="PostTheme">
      <Sidebar />
      <div className="PostTheme-container">
        {state.map((item: IPost, key: number) => {
          return item.category === category ? (
            <ContentBlock post={item} key={key} />
          ) : "";
        })}
      </div>
      <DiscussPanel />
    </div>
  );
};

export default PostTheme;
