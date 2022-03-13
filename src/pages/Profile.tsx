import React from "react";
import { useParams } from "react-router";
import ContentBlock from "../components/ContentSide/ContentBlock";
import DiscussPanel from "../components/DiscussPanel/DiscussPanel";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../context/Context";
import { IPost } from "../types/PostInterface";

const Profile: React.FC = () => {
  const { login } = useParams();
  const [state] = React.useContext(Context);
  const loggedIn = localStorage.getItem("loggedIn");

  let allVisibleState = state.filter((item: IPost) => {
    if (item.visibility === "Everyone") {
      return item;
    }
  });

  return (
    <div className="Profile">
      <Sidebar />
      <div className="Profile-container">
        {login && <ProfileBlock login={login} state={state} />}
        {loggedIn
          ? state.map((item: IPost, key: number) => {
            return item.login === login ? 
              <ContentBlock post={item} key={key} />
            : null;
            })
          : allVisibleState.map((item: IPost, key: number) => {
            return item.login === login ? 
              <ContentBlock post={item} key={key} />
            : null;
          })}
      </div>
      <DiscussPanel />
    </div>
  );
};

export default Profile;
