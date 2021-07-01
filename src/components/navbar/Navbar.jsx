import "./navbar.scss";
import React from "react";


export default function Navbar({ menuOpen, setMenuOpen }) {
    return(
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo">Logo</a>
                  
                  
              </div>
              <div className="right">
                  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                      <span className="item1"></span>
                      <span className="item2"></span>
                      <span className="item3"></span>
                  </div>
              </div>
            </div>
            
        </div>
    )
}