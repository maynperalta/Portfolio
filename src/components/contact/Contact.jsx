import { useState } from "react";
import React from "react";
import "./contact.scss";

export default function Contact() {

    const [ message, setMessage ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="top">
            <h1>Contact Me!</h1>
                <form>
                    <label>Name</label>
                        <input type="text" name="name" />

                    <label>Email</label>
                        <input type="email" name="email" />

                    <label>Message</label>
                        <textarea name="message" rows="4" />

                    <button type="submit">Send!</button>
                </form>
            </div>
            {/* <div className="left">
                <img src="assets/email.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact me!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email address" />
                    <textarea placeholder="Send me a message!"></textarea>
                    <button type="submit">Send!</button>
                    {message && <span>Thank you for your message!</span>}
                </form>
            </div> */}
        <div className="bottom">
        <div className="social">d</div>
        </div>
        </div>
        
    )
}