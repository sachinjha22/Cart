import React from 'react';
import reactDom from 'react-dom';
import CartItem from "./CartItem";

const Cart=(props)=>{
   

    const {products}=props;
    return (
        <div className="Cart">
            {products.map((product )=>{
                return(
                    <CartItem
                        product={product} 
                        key={products.id} 
                        onIncreaseQuantity = {props.onIncreaseQuantity} 
                        onDecreaseQuantity = {props. onDecreaseQuantity} 
                       onDeleteProduct = {props. onDeleteProduct}
                    />
                )
            })};
        </div>
    )

}
export default Cart;
