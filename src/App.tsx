import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/style.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AdminPanel, Posts, PostTheme, Profile, NotFoundPage } from "./pages";
import { Context } from "./context/Context";
import { IPost } from "./types/PostInterface";
import { MockPosts } from "./assets/data/Posts";

const App: React.FC = () => {
  const [postState, setPostState] = React.useState<IPost[]>(MockPosts);
  
  React.useEffect(() => {
    let postsStorage = localStorage.getItem("posts");
    if (postsStorage) {
      setPostState(JSON.parse(postsStorage));
    }
  }, []);

  return (
    <div className="App">
      <Context.Provider value={[postState, setPostState]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/theme/:category" element={<PostTheme />} />
          <Route path="/profile/:login" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default App;
