import React from "react";
import "./ContentSide.scss";
import CommentBlock from "./CommentBlock";
import { IPost } from "../../types/PostInterface";
import { IComment } from "../../types/PostInterface";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {addComment} from "../../redux/slices/commentSlice";

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
  post: IPost;
}

const ContentBlock: React.FC<PostProps> = (props) => {
  let { post } = props;
  const commentsRedux = useSelector((state: RootState) => state.comments.comments);
  const dispatch = useDispatch();
  
  const [like, setLike] = React.useState<number>(post.like);
  const [heart, setHeart] = React.useState<number>(post.heart);
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [comments, setComments] = React.useState<IComment[]>([]);
  const commentRef = React.useRef<HTMLTextAreaElement>(null);
  const loggedIn = localStorage.getItem("loggedIn");
  const avatar = localStorage.getItem("avatar");

  const addLike = () => {
    setLike((prev) => prev + 1);
  };

  const addHeart = () => {
    setHeart((prev) => prev + 1);
  };

  const shareTelegramm = () => {
    let url = window.location.href;
    window.open(`https://t.me/share/url?url=${url}&text=${post.title}`);
  };

  const handleComment: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCommentValue(e.target.value);
  };

  const addComments = () => {
    if (commentValue.trim()) {
      let date = new Date();
      let newPost = {
        avatar: post.avatar,
        text: commentValue,
        date:
          date.toDateString() +
          " at " +
          String(date.getHours()) +
          ":" +
          String(date.getMinutes()),
      };
      dispatch(addComment(newPost));
      setComments([...comments, newPost]);
      localStorage.setItem("comments", JSON.stringify([...comments, newPost]));
      setCommentValue("");
      if(commentRef.current) commentRef.current.blur()
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      addComments();
    }
  };

  return (
    <div className="content-block">
      <div className="content-block-header">
        <ul className="content-block-header-list">
          <NavLink to={`/theme/${post.category}`}>
            <li className="content-block-header-list-theme">
              {post.category}
            </li>
          </NavLink>
          <li className="content-block-header-list-date">{post.date}</li>
          <li className="content-block-header-list-privacy">{post.visibility === "Only Authorized Users" ? <MdOutlinePrivacyTip/> : ""}</li>
        </ul>
        <div className="content-block-header-title">
          <h1>{post.title}</h1>
        </div>
        <div className="content-block-header-autor">
          <div className="content-block-header-autor-img">
            <NavLink to={`/profile/${post.login}`}>
              <img
                className="content-block-header-autor-img-item"
                src={post.avatar}
                alt=""
              />
            </NavLink>
          </div>
          <div className="content-block-header-autor-info">
            <NavLink to={`/profile/${post.login}`}>
              <p className="content-block-header-autor-info-name">
                {post.login}
              </p>
            </NavLink>
            <p className="content-block-header-autor-info-dignity">
              {post.login === "bessadam"
                ? "Admin of Posts Network"
                : "GitHub User of Posts Network"}
            </p>
          </div>
        </div>
      </div>
      <div className="content-block-text">
        <p>{post.text}</p>
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
            <FaLaughSquint className="media-item" onClick={addLike} />
            <b>{like > 999 ? String(like)[0] + "k" : like}</b>
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
        {commentsRedux.map((item: { text: string; date: string }, key: number) => {
          return <CommentBlock item={item} key={key} />;
        })}
        {loggedIn ? (
          <div className="content-block-comments-createPost">
            <div className="content-block-comments-createPost-avatar">
              <img alt="" src={avatar ? avatar : post.avatar} />
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
              onClick={addComments}
            >
              <BsArrowUpRightCircle className="submit-icon" />
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
