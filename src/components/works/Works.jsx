import React from "react";
import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/placeholder.jpeg",
            title: "Web Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est culpa molestiae. Accusamus eligendi commodi, consequatur laborum, deleniti corrupti aliquid debitis sapiente dolores omnis error autem reiciendis officia soluta perspiciatis!",
            img: "https://via.placeholder.com/150/0000FF/808080?Text=Web_Design"
        },
        {
            id: "2",
            icon: "./assets/placeholder.jpeg",
            title: "Mobile Apps",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est culpa molestiae. Accusamus eligendi commodi, consequatur laborum, deleniti corrupti aliquid debitis sapiente dolores omnis error autem reiciendis officia soluta perspiciatis!",
            img: "https://via.placeholder.com/150/000000/808080?Text=Mobile_Apps"
        },
        {
            id: "3",
            icon: "./assets/placeholder.jpeg",
            title: "Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est culpa molestiae. Accusamus eligendi commodi, consequatur laborum, deleniti corrupti aliquid debitis sapiente dolores omnis error autem reiciendis officia soluta perspiciatis!",
            img: "https://via.placeholder.com/150/FFFFFF/000000?Text=Branding"
        }
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d, pos2) => (
                    <div className="container" key={pos2}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="office" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="placeholder" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <img src="assets/sidearrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
            <img src="assets/sidearrow.png" className="arrow right" alt="arrow" onClick={() => handleClick()} />
        </div>
    );
}