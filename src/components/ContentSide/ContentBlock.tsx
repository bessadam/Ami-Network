import React from "react";
import "./ContentSide.scss";
import CommentBlock from "./CommentBlock";
import { IPost } from "../../types/PostInterface";
import { NavLink } from "react-router-dom";

//icons
import { BsTelegram } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLaughSquint } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";

interface PostProps {
  posts: IPost;
}

const ContentBlock: React.FC<PostProps> = (props) => {
  let { posts } = props;
  const [lmao, setLmao] = React.useState<number>(0);
  const [heart, setHeart] = React.useState<number>(0);
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [comments, setComments] = React.useState<any>([]);
  const loggedIn = localStorage.getItem("loggedIn");
  const avatar = localStorage.getItem("avatar");
  const commentRef = React.useRef<HTMLTextAreaElement>(null);

  const addLmao = () => {
    setLmao((prev) => prev + 1);
  };

  const addHeart = () => {
    setHeart((prev) => prev + 1);
  };

  const shareTelegramm = () => {
    let url = window.location.href;
    window.open(`https://t.me/share/url?url=${url}&text=${posts.title}`);
  };

  const handleComment: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCommentValue(e.target.value);
  };

  const addComment = () => {
    if (commentValue.trim()) {
      let date = new Date();
      let newPost = {
        avatar: posts.avatar,
        text: commentValue,
        date:
          date.toDateString() +
          " at " +
          String(date.getHours()) +
          ":" +
          String(date.getMinutes()),
      };
      setComments([...comments, newPost]);
      localStorage.setItem("comments", JSON.stringify([...comments, newPost]));
      setCommentValue("");
      if(commentRef.current) commentRef.current.blur()
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      addComment();
    }
  };

  return (
    <div className="content-block">
      <div className="content-block-header">
        <ul className="content-block-header-list">
          <NavLink to={`/theme/${posts.category}`}>
            <li className="content-block-header-list-theme">
              {posts.category}
            </li>
          </NavLink>
          <li className="content-block-header-list-date">{posts.date}</li>
          <li className="content-block-header-list-privacy">{posts.visibility === "Only Authorized Users" ? <MdOutlinePrivacyTip/> : ""}</li>
        </ul>
        <div className="content-block-header-title">
          <h1>{posts.title}</h1>
        </div>
        <div className="content-block-header-autor">
          <div className="content-block-header-autor-img">
            <NavLink to={`/profile/${posts.login}`}>
              <img
                className="content-block-header-autor-img-item"
                src={posts.avatar}
                alt=""
              />
            </NavLink>
          </div>
          <div className="content-block-header-autor-info">
            <NavLink to={`/profile/${posts.login}`}>
              <p className="content-block-header-autor-info-name">
                {posts.login}
              </p>
            </NavLink>
            <p className="content-block-header-autor-info-dignity">
              {posts.login === "bessadam"
                ? "Admin of Posts Network"
                : "GitHub User of Posts Network"}
            </p>
          </div>
        </div>
      </div>
      <div className="content-block-text">
        <p>{posts.text}</p>
      </div>
      <div className="content-block-media">
        <div className="content-block-media-share">
          <span>
            <BsTelegram className="media-item" onClick={shareTelegramm} />
          </span>
          <span>
            <BsFacebook className="media-item" />
          </span>
          <span>
            <AiFillGoogleCircle className="media-item google-icon" />
          </span>
        </div>
        <div className="content-block-media-rating">
          <span>
            <FaLaughSquint className="media-item" onClick={addLmao} />
            <b>{lmao > 999 ? String(lmao)[0] + "k" : lmao}</b>
          </span>
          <span>
            <FcLike className="media-item" onClick={addHeart} />
            <b>{heart > 999 ? String(heart)[0] + "k" : heart}</b>
          </span>
          <span>
            <FaRegCommentDots className="media-item" />
            <b>{comments.length}</b>
          </span>
        </div>
      </div>
      <div className="content-block-comments">
        {comments.map((item: { text: string; date: string }, key: number) => {
          return <CommentBlock item={item} key={key} />;
        })}
        {loggedIn ? (
          <div className="content-block-comments-createPost">
            <div className="content-block-comments-createPost-avatar">
              <img alt="" src={avatar ? avatar : posts.avatar} />
            </div>
            <div className="content-block-comments-createPost-field">
              <textarea
                ref={commentRef}
                value={commentValue}
                onChange={handleComment}
                placeholder="Write a new comment"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div
              className="content-block-comments-createPost-submit"
              onClick={addComment}
            >
              <BsArrowUpRightCircle className="submit-icon" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
