import React from "react";
import { useParams } from "react-router";
import ContentBlock from "../components/ContentSide/ContentBlock";
import DiscussPanel from "../components/DiscussPanel/DiscussPanel";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../context/Context";

const Profile: React.FC = () => {
  const { login } = useParams();
  const [state] = React.useContext(Context);
  const loggedIn = localStorage.getItem("loggedIn");

  let allVisibleState = state.filter((item: any) => {
    if (item.visibility === "Everyone") {
      return item;
    }
  });

  return (
    <div className="Profile">
      <Sidebar />
      <div className="Profile-container">
        <ProfileBlock login={login} state={state} />
        {loggedIn
          ? state.map((item: any, key: number) => {
            return item.login === login ? 
              <ContentBlock posts={item} key={key} />
            : null;
            })
          : allVisibleState.map((item: any, key: number) => {
            return item.login === login ? 
              <ContentBlock posts={item} key={key} />
            : null;
          })}
      </div>
      <DiscussPanel />
    </div>
  );
};

export default Profile;
