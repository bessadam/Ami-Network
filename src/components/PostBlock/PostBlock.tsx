import React from "react";
import "./PostBlock.scss";
import { useNavigate } from "react-router";
import {Context} from "../../context/Context";
import {useDispatch} from "react-redux";

// import axios from "axios";
//data
import { postCategories } from "../../assets/data/Posts";
import { postViewers } from "../../assets/data/Posts";
import {addPost} from "../../redux/slices/rootSlice";

//icons
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";

const PostBlock: React.FC = () => {
  const [category, setCategory] = React.useState<string>("Front-end");
  const [categories, setCategories] = React.useState<string[]>(postCategories);
  const [title, setTitle] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [visibility, setVisibility] = React.useState<string>("Everyone");
  const [state, setState] = React.useContext(Context);
  const navigate = useNavigate();

  const userAvatar = localStorage.getItem("avatar");
  const userLogin = localStorage.getItem("login");

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/db.json').then(({data}: any) => {
  //     setCategories(data.postCategories)
  //   })
  // }, []);

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  };

  const handleText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };

  const handleCategories: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.target.value)
  };

  const handleVisibility: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setVisibility(e.target.value)
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
        loggedIn: true,
        visibility: visibility,
        like: 0,
        heart: 0,
      }
      dispatch(addPost(newPost));
      setState([newPost, ...state]);
      localStorage.setItem("posts", JSON.stringify([newPost, ...state]));
      navigate("/");
    } else {
      alert("Fields must contains more than 15 letters");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("avatar");
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  const clearData = () => {
    setTitle("");
    setText("");
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
            {categories.map((item: string, key: number) => (
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
          <label>Who can see the post<MdOutlinePrivacyTip className="privacy-icon"/></label>
          <select defaultValue={visibility} onChange={handleVisibility}>
            {postViewers.map((item: string, key: number) => (
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