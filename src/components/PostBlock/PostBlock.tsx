import React from "react";
import "./PostBlock.scss";
import { useNavigate } from "react-router";
import {Context} from "../../context/Context"
//data
import { postCategories } from "../../assets/data/Posts";
import { postViewers } from "../../assets/data/Posts";
//icons
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const PostBlock: React.FC = () => {
  const [category, setCategory] = React.useState<string>("Front-end");
  const [title, setTitle] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [visibility, setVisibility] = React.useState<string>("Everyone");
  const [state, setState] = React.useContext(Context);
  const navigate = useNavigate();

  const userAvatar = localStorage.getItem("avatar");
  const userLogin = localStorage.getItem("login");

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  };

  const handleText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };

  const handleCategories:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.target.value)
  };

  const handleVisibility:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setVisibility(e.target.value)
    console.log(visibility)
  };

  const submitPost = () => {
    if(title.length > 15 && text.length > 15) {
      let newPost = {
        date: new Date().toLocaleDateString(),
        avatar: userAvatar,
        login: userLogin,
        category: category,
        title: title,
        text: text,
        lmao: 0,
        loggedIn: true,
        visibility: visibility,
      }
      setState([newPost, ...state])
      localStorage.setItem("posts", JSON.stringify([newPost, ...state]))
      navigate("/")
    } else {
      alert("Fields must contains more than 15 letters")
    }
  };

  const userLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("avatar");
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  const clearData = () => {
    setTitle("")
    setText("")
  };

  const jumpToGithub = () => {
    window.open(`https://github.com/${userLogin}`);
  };

  return (
    <div className="post-block">
      <div className="post-block-userInfo">
        <div className="post-block-userInfo-avatar">
          {userAvatar ? (
            <img
              alt=""
              src={userAvatar}
              className="post-block-userInfo-avatar-item"
              onClick={jumpToGithub}
            />
          ) : (
            null 
          )}
        </div>
        <div className="post-block-userInfo-login">
          {userLogin ? (
            <p onClick={jumpToGithub}>
              {userLogin} <AiFillGithub />
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="post-block-userInfo-logout">
          <button
            onClick={userLogout}
            className="post-block-userInfo-logout-btn"
          >
            Logout <AiOutlineLogout />
          </button>
        </div>
      </div>
      <div className="post-block-form">
        <div className="post-block-form-field">
          <label>Category</label>
          <select defaultValue={category} onChange={handleCategories}>
            {postCategories.map((item, key) => (
              <option key={key} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="post-block-form-field">
          <label>Title</label>
          <input placeholder="" type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="post-block-form-field">
          <label>Text</label>
          <textarea value={text} onChange={handleText} />
        </div>
        <div className="post-block-form-field">
          <label>Who can see post</label>
          <select defaultValue={visibility} onChange={handleVisibility}>
            {postViewers.map((item, key) => (
              <option key={key} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="post-block-form-field">
          <div className="post-block-form-field-buttons">
            <button onClick={submitPost} className="post-block-form-field-buttons-submit">
              Submit Post
            </button>
            <button onClick={clearData} className="post-block-form-field-buttons-clear">
              Clear Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBlock;