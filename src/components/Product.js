import React from "react"
import "./Product.css"

function Product({id, name, price, image}) {
    return (
        <div className = "product">
            <div className = "product_info">
                <p className = "title">{name}</p>
                <p className = "product_price">
                    <span className = "sign">€</span>
                    <span className = "price">{price}</span>
                </p>
            </div>
            <img  className = "product_illustration" src = {image} alt=""/>
            <button className = "product_addtobasket">Ajouter au panier</button>
        </div>
    )
}

export default Product;