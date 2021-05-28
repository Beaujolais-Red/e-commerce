import React from "react"
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id, name, price, image}) {
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
            }
        })
    }

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
            <button onClick={addToBasket} className = "product_addtobasket">Ajouter au panier</button>
        </div>
    )
}

export default Product;