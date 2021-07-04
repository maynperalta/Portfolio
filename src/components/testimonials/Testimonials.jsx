import React from "react";
import "./testimonials.scss";

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Mark Jacobs",
            title: "Athlete",
            img: "assets/avatar.png",
            icon: "assets/mountain.jpg",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, consequatur. Facilis, eligendi pariatur? Eos sit corrupti tempore laudantium, consequuntur, dolorem debitis deleniti aspernatur, dignissimos officiis vel eius tempora eaque beatae?"
        },
        {
            id: 2,
            name: "Glenn Calloway",
            title: "Senior Developer",
            img: "assets/avatar.png",
            icon: "assets/day.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos labore expedita quod eos enim, iure ea aliquid accusantium! Vero numquam nihil doloribus velit eum, incidunt natus odit molestias enim.",
            featured: true
        },
        {
            id: 3,
            name: "Charlotte Bailey",
            title: "Software Engineer",
            img: "assets/avatar.png",
            icon: "assets/night.jpg",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit quisquam rerum, fugiat consequuntur delectus sed distinctio deserunt. Ut voluptatibus sed veniam fugiat iure animi necessitatibus rerum temporibus, deserunt ex!"
        }
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">

                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/sidearrow.png" className="left" alt="" />
                            <img src={d.img} className="person" alt="" />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            <p>{d.desc}</p>
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}