import React from "react";
import "./PostBlock.scss";
import { AiFillGithub } from "react-icons/ai";
import GitHub from "../../assets/images/GitHub.jpg"

interface IUserProps {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
}

const VerificationBlock: React.FC<IUserProps> = ({ login, setLogin, }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleUserLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.target.value.trim());
  };

  const submitUserForm = () => {
    let passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (inputRef.current) {
      let userPassword = inputRef.current.value;
      login && userPassword.match(passwordCheck)
        ? fetch(`https://api.github.com/users/${login}`)
            .then((response) => {
              if (response.status === 200) {
                return response.json();
              } else {
                alert("Enter correct GitHub Login");
                setLogin("");
              }
            })
            .then(
              (json) => (
                localStorage.setItem("login", json.login),
                localStorage.setItem("avatar", json.avatar_url),
                localStorage.setItem("loggedIn", "true"),
                window.location.reload() 
              )
            )
        : alert("Enter correct password with more than 8 characters, one or more capital latin Letter and one or more Number");
      inputRef.current.value = "";
    }
  };

  const handleSumbitKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === "Enter") {
      submitUserForm()
    }
  }

  return (
    <div className="verification-block">
      <div className="verification-block-signIn">
        <h1>Sign in</h1>
        <span>
          <p>
            to sign-in use your GitHub <AiFillGithub /> Nickname 
          </p>
          <p>
            and mock password
          </p>
        </span>
        <div className="verification-block-signIn-form">
          <input
            value={login}
            onChange={handleUserLogin}
            type="text"
            className="verification-block-signIn-form-login"
            placeholder="Name"
          />
          <input
            ref={inputRef}
            type="password"
            className="verification-block-signIn-form-password"
            placeholder="Password"
            onKeyDown={handleSumbitKeyDown}
          />
          <button
            className="verification-block-signIn-submitBtn"
            onClick={submitUserForm}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="verification-block-wallpaper">
        <img
          alt=""
          src={GitHub}
          className="verification-block-wallpaper-item"
        />
      </div>
    </div>
  );
};

export default VerificationBlock;
