import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'

function ProductCart({id,name,image,price}){

    const [{basket}, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="productcart">
            <img className="productcart_image" src={image} alt="" />
            <div className="productcart_info">
                <p className="productcart_name">{name}</p>
                <p className="productcart_price">€{price}</p>
            <button onClick={removeItem}>Retirer du panier</button>
            </div>
        </div>
    )
}

export default ProductCart