import React from 'react';
import "./ProfileBlock.scss";
import Banner from "../../assets/images/React_Banner1.png";
import { Navigate, useLocation } from 'react-router';

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
    let githubLogin = login.split(" ")[0];
    window.open(`https://github.com/${githubLogin}`);
  };

  const filteredState = state.filter((itemFilter: any, index: number) => {
    return index === state.findIndex((item: any) => item.login === itemFilter.login);
  });

  const postsCount = state.filter((item: any) => {
    if(item.login === login) {
      return item;
    } else return null
  })

  return (
    <div className="profile-block">
      <div className="profile-block-banner">
        <img src={ Banner } alt="" className="profile-block-banner-img" />
        {filteredState.map((item: any, key: number) => {
          return item.login === login ? 
            <div className="profile-block-banner-avatar" key={key}>
              <img src={ item.avatar } alt="" key={key} />
            </div> 
          : null
          })
        }
      </div>
      <div className="profile-block-info">
        <p className="profile-block-info-login">{login}</p>
        <p className="profile-block-info-github" onClick={() => jumpToGithub(login)}><i>@{login}</i></p>
        <div className="profile-block-info-activity">
          <p><b>{postsCount.length !== 0 ? postsCount.length : <Navigate to="*" />}</b> Posts</p>
          <p><b>{0}</b> Likes</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlock;
