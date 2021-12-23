import "./Header.css";
import React from "react";

function template() {
  return (
    <div className="header">
      <div className="headerf">
        <div >
          <button className="btn btn-primary">Login</button>
        </div>
        <div >
          <button className="btn btn-success">Register</button>
        </div>
      </div>
    </div>
  );
};

export default template;
