import React from "react";
import "./MenuBar.css";
import userimage from "./userimage.png";

const MenuBar = (props) => (
    <section className="bar">
        {props.children}
        <header className="title" id="title">
            {props.title}
        </header>
        <ul className="menu">
            <li className="menuitem"><img className="menuimage" alt="userimage" src={userimage}></img></li>
        </ul>
    </section>
)
export default MenuBar;