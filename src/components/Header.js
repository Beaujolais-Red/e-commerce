import React from "react"
import "./Header.css"
import riverish from "./images/riverish.png"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom"

function Header() {
    return(
        <nav className = "header">
            <img className = "header_logo" alt="logo" src={riverish}/>
            <div className="header_option">
                <Link to ="/checkout" className = "header_link">
                    <span className="header_cart">
                        <ShoppingBasketIcon fontSize = "40" color = "action" />
                        <span className = "header_basket_count">2</span>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Header