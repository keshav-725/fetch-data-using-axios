import "./Header.css";
import React from "react";
import profile from "../image/men_3.jpg"

function template() {
  return (
    <div className="header">
      <div>
        <h3>Skrate</h3>
      </div>
      <div className="profile">
        <img src={profile} width="30px" height="30px"/>
        <p>Keshav kumar</p>
      </div>
    </div>
  );
};

export default template;
