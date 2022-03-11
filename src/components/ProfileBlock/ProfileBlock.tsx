import React from 'react';
import "./ProfileBlock.scss"
import Banner from "../../assets/images/React_Banner1.png"
import { useLocation } from 'react-router';

interface LoginProps {
  login: any;
  state: any;
}

const ProfileBlock: React.FC<LoginProps> = (props) => {
  let { login, state } = props;
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const jumpToGithub = (login: any) => {
    let githubLogin = login.split(" ")[0]
    window.open(`https://github.com/${githubLogin}`);
  };

  const filteredTestState = state.filter((itemFilter: any, index: number) => {
    return index === state.findIndex((item: any) => item.login === itemFilter.login)
  });

  return (
    <div className="profile-block">
      <div className="profile-block-banner">
        <img src={ Banner } alt="" className="profile-block-banner-img" />
        {filteredTestState.map((item: any, key: number) => {
          return item.login === login ? <div className="profile-block-banner-avatar" key={key}><img src={ item.avatar } alt="" key={key} /></div> : null
        })}
      </div>
      <div className="profile-block-info">
        <p className="profile-block-info-login">{login}</p>
        <p className="profile-block-info-github" onClick={() => jumpToGithub(login)}><i>@{login}</i></p>
        <div className="profile-block-info-activity">
          <p><b>2</b> Posts</p>
          <p><b>15</b> Likes</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlock;
