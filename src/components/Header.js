import React from "react"
import "./Header.css"
import webschoolfactory from "./images/webschoolfactory.jpg"

function Header() {
    return(
        <nav className = "header">
            <img className = "header_logo" alt="logo" src={webschoolfactory}/>
            <div className="header_option">
                <span className="header_option_one">Hello World !</span>
                <span className="header_option_two">Cart</span>
            </div>
        </nav>
    )
}

export default Header