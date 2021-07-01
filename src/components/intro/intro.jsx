import React from "react";
import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="../../../../assets/photo854.JPG" alt="headshot" className="headshot" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, My Name Is</h2>
                    <h1>Maynard Peralta</h1>
                    <h3>And I Am A Freelance Full Stack Developer</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eaque voluptatem, ipsam itaque autem magnam vel officiis saepe repellendus, quae praesentium nobis modi voluptates, natus ut molestias nemo minus dolor.</p>
                </div>
                <a href="#portfolio">
                    <img src="../../../../assets/down-arrow.png" alt="next" />
                </a>
            </div>


        </div>
    )
}