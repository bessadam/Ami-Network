import React from 'react';
import { NavLink } from 'react-router-dom';

interface CommentBlockProps {
  item: {
    text: string;
    date: string;
  };
}

const CommentBlock: React.FC<CommentBlockProps> = (props) => {
  let { item } = props;
  const [avatar, setAvatar] = React.useState<string>("")
  const [login, setLogin] = React.useState<string>("")


  React.useEffect(() => {
    let userAvatar = localStorage.getItem("avatar")
    let userLogin = localStorage.getItem("login")

    if(userAvatar && userLogin) {
      setAvatar(userAvatar)
      setLogin(userLogin)
    }
  }, [])

  return (
    <div className="content-block-comments-item">
      <div className="content-block-comments-item-avatar">
        <NavLink to={`/profile/${login}`}>
          <img alt="" src={avatar ? avatar : ""} />
        </NavLink>
      </div>
      <div className="content-block-comments-item-info">
        <p className="content-block-comments-item-info-name">
          <NavLink to={`/profile/${login}`}>
            {login ? login : "User"}
          </NavLink>
        </p>
        <p className="content-block-comments-item-info-text">
          {item.text}
        </p>
        <p className="content-block-comments-item-info-date">
          {item.date}
        </p>
      </div>
    </div>
  )
}

export default CommentBlock;
