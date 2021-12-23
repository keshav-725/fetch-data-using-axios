import "./Menu.css";
import React from "react";
import { NavLink} from "react-router-dom"
import { FaHome, FaGraduationCap, FaIdBadge ,FaDotCircle} from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

function template() {
  return (
    <div className="menu">

      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      ><FaDotCircle size="1rem" /><div className="itemname">Workshop</div></NavLink>
      <NavLink
        to="/dashboard"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      ><FaDotCircle size="1rem" /><div className="itemname">Event</div></NavLink>
      <NavLink
        to="/home1"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      ><FaDotCircle size="1rem" /><div className="itemname">Shop</div></NavLink>
      <NavLink
        to="/home2"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      ><FaDotCircle size="1rem" /><div className="itemname">Young Leaders</div></NavLink>
      <NavLink
      className="noline"
        to="/home3"
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}
      ><FaDotCircle size="1rem"/><div className="itemname">Young Minds</div></NavLink>
    </div>
  );
};

export default template;
