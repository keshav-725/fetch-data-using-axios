import "./Menu.css";
import React, { lazy, Suspense } from "react";
import { NavLink, Link } from "react-router-dom"
import { FaHome, FaGraduationCap, FaIdBadge } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

function template() {
  return (
    <div className="menu">

      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          backgroundColor: "rgb(240, 252, 252)"
        }}
      ><FaHome size="2rem" /></NavLink>
      <NavLink
        to="/dashboard"
        activeStyle={{
          fontWeight: "bold",
          backgroundColor: "rgb(240, 252, 252)"
        }}
      ><FaIdBadge size="2rem" /></NavLink>
      <NavLink
        to="/home1"
        activeStyle={{
          fontWeight: "bold",
          backgroundColor: "rgb(240, 252, 252)"
        }}
      ><FaGraduationCap size="2rem" /></NavLink>
      <NavLink
        to="/home2"
        activeStyle={{
          fontWeight: "bold",
          backgroundColor: "rgb(240, 252, 252)"
        }}
      ><CgProfile size="2rem" /></NavLink>
      <NavLink
        to="/home3"
        activeStyle={{
          fontWeight: "bold",
          backgroundColor: "rgb(240, 252, 252)"
        }}
      ><FaIdBadge size="2rem" /></NavLink>
    </div>
  );
};

export default template;
