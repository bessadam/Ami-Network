import React from "react";
import PostBlock from "../components/PostBlock/PostBlock";
import VerificationBlock from "../components/PostBlock/VerificationBlock";

const AdminPanel: React.FC = () => {
  const [login, setLogin] = React.useState<string>("");
  const userLogin = localStorage.getItem("login");

  return (
    <div className="admin-panel">
      <div className="postContainer">
        {userLogin ? (
          <PostBlock />
        ) : (
          <VerificationBlock login={login} setLogin={setLogin} />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
