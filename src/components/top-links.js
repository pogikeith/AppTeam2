<<<<<<< HEAD
import React from "react";
=======

import React, { Component } from "react";
import Profile from "./profile"; 
>>>>>>> origin/keithmatt

const TopLinks = () => {
  return (
    <div className="top-links-wrapper">
      <div className="image-wrapper">
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/keithmatt
