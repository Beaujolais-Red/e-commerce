import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){

    const[{basket}] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">

                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout_name">Your shopping basket is empty</h2>
                             <p>You have no items in your basket. Buy one.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="shoppingbasketname">Items in the shopping basket</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                        id={item.id}
                                        title={item.name}
                                        image={item.image}
                                        price={item.price}
                                    />
                                ))
                            }
                        </div>
                    )
                }

                
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                     </div>
                )
            }
            
        </div>
    )
}

export default Checkout