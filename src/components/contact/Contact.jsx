import React from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm("gmail", "template_oyghhj2", event.target, "user_R0NeMUigbM7hlnj2kZ1KG").then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div className="contact" id="contact">
            <div className="top">
                <h1>Contact Me!</h1>
                <form id="contact-form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" maxLength="30" required />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" maxLength="50" required />
                    <label>Message</label>
                    <textarea name="message" placeholder="Send me a message!" rows="6" maxLength="500" required />
                    <button type="submit">Send!</button>
                </form>
            </div>
            <div className="bottom">
                <div className="social">d</div>
            </div>
        </div>

    )
}