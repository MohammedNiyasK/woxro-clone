import "./Sidebar.css";
import { useState, useEffect } from "react";

const Sidebar = ({ isSidebarOpen,setIsSidebarOpen }) => {
  const onClickHandler = () => {
    console.log('clicked')
setIsSidebarOpen(false)
  }
  return (
    <div className="sidebar">
      <div className={isSidebarOpen ? "navbar__menu" : "navbar__hide"}>
        <ul>
          <li className="sidebar__text"><i className='bx bx-x-circle close_icon' onClick={onClickHandler}></i></li>
          
          <li className="sidebar__text">Home</li>
          <li className="sidebar__text">About Us</li>
          <li className="sidebar__text">Services</li>
          <li className="sidebar__text">Technology</li>
          <li className="sidebar__text">Careers</li>
          <li className="sidebar__text">Blog</li>
          <li className="sidebar__text">Contact Us</li>
          <li className="sidebar__text">Our Works</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
