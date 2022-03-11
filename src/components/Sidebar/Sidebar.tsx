import React from "react";
import "./Sidebar.scss";
import { postCategories } from "../../assets/data/Posts";
import { NavLink, useLocation } from "react-router-dom";
import {  } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation(); 

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="sidebar">
      <p>Post Themes</p>
      <div className="sidebar-list">
        <ul>
          {postCategories.map((item, key) => (
            <NavLink to={`/theme/${item}`} key={key}><li key={key}>{item}</li></NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
