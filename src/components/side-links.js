
import React, { Component } from "react";
import Profile from "./profile"; 

const TopLinks = () => {
  return (
    <div className="side-links-wrapper">
      <div className="image-wrapper">
        <img src={require("../finlogo.png")} />
        
      </div>
      
      
       <div class="column">
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
     <div className="copyright">
        <img src={require("../copyright.png")} />
        
      </div>
     <div className="profile-wrapper"><Profile /></div>
    </div>
  </div>
    
    
     
    
        
 

 );
};

export default TopLinks;