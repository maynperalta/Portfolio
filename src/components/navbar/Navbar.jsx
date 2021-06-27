import React from "react";
import "./navbar.scss";

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo">Logo</a>
                  <div className="container">
                      
                  </div>
              </div>
              <div className="right">
                  Right Side
              </div>
            </div>
            
        </div>
    )
}