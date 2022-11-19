import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { AiFillApi, AiFillDatabase, AiFillHome, AiFillInfoCircle, AiFillMail } from "react-icons/ai";


const Sidebar = () => {
    return (
        <>
<div className="sidebar">
  <Link to="/"><AiFillHome />Home</Link>
  <Link to="/contact"><AiFillMail />Contact</Link>
  <Link to="/about">< AiFillInfoCircle />About</Link>
  <Link to="/database"><AiFillDatabase />Database</Link>
</div>
</>
    )
}

export default Sidebar;