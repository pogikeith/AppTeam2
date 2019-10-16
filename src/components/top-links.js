import React, { Component } from "react";

const TopLinks = () => {
  return (
    <div className="top-links-wrapper">
      <div className="image-wrapper">
        <img className="top-logo" src={require("../newWhiteLogo.png")} />
      </div>
      <div className="links-wrapper">
        <div>
          <a href className="link">
            Home
          </a>
        </div>

        <div>
          <a href className="link">
            Join
          </a>
        </div>

        <div>
          <a href className="link">
            About
          </a>
        </div>

        <div>
          <a href className="link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLinks;
