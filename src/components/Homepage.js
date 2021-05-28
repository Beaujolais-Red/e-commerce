import React from "react"
import Product from "./Product"
import "./Homepage.css"
import omega from "./images/omega.png"
import audemars from "./images/audemars.png"



function Homepage() {
    return (
        <div className = "homepage">
            <div className = "homepage_row">
                <Product
                id = "111111"
                name = "Omega Seamaster Aqua Terra GMT Worldtimer"
                price = {7890}
                image = {omega}
            />
                <Product
                id = "222222"
                name = "Rolex Daytona Platinum"
                price = {116999}
                image = "https://lh3.googleusercontent.com/proxy/8qaGBuo7xqQW2wEwaljI4vPPe6juUKvHM6ve8war_Z8kASsHgqsPd7lwGdO6pS8XAOY6mSsLH4p_dZl8CM9YyuAETG8UBEiY0vgil9GtV5bq"
            />
            <Product
                id = "333333"
                name = "Audemars Piguet Royal Oak Skeleton Rose Gold"
                price = {139999}
                image = {audemars}
            />
            </div>

            <div className = "homepage_row">
                <Product
                id = "444444"
                name = "Rolex Day-Date Rose Gold"
                price = {37900}
                image = "https://chronexttime.imgix.net/V/1/V18135/V18135_1_det.png?w=570&auto=format&fm=png&q=55&usm=50&usmrad=1.5&dpr=1&fit=clamp&auto=compress&bg=FFFFFF"
            />
                <Product
                id = "555555"
                name = "Tag Heuer Carrera Skeleton"
                price = {4799}
                image = "https://chronexttime.imgix.net/V/3/V31497/V31497_1_det.png?w=570&auto=format&fm=png&q=55&usm=50&usmrad=1.5&dpr=1&fit=clamp&auto=compress&bg=FFFFFF"
            />
            <Product
                id = "666666"
                name = "Casio G-Shock"
                price = {99}
                image = "https://images-na.ssl-images-amazon.com/images/I/71oJoa5qm6L._AC_UL1500_.jpg"
            />
            </div>
        </div>
        
    )
}

export default Homepage