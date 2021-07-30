import React from 'react';
import reactDom from 'react-dom';

const CartItem=(props)=>{
    const {price,title,qty} = props.product;
    const{
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct

    }=props;
        return (
         <div className="cart-item">
            <div className="left-block">
                <img style={style.image}  src={product.img} />
            </div> 
            <div className="right-block">
                <div style={{ marginLeft:25, fontSize:25  }}>{title}</div>
                <div style={{ marginLeft:25, fontSize:25, color:'#777' }}>Rs{price}</div>
                <div style={{ marginLeft:25,fontSize:25 }}>Qlty:{qty}</div>
                <div className="cart-item-action" style={{ marginLeft:25 , marginTop:25 }}>
                  {/*Button*/}
                  <img 
                     alt="increase" 
                     className="action-icon" 
                     src="https://image.flaticon.com/icons/png/128/992/992651.png"
                     onClick={()=> props.onIncreaseQuantity(props.product)}
                     /> 
                  <img 
                     alt="decrease" 
                     className="action-icon"
                     src="https://image.flaticon.com/icons/png/128/262/262039.png"
                     onClick={()=> props.onDecreaseQuantity(props.product)}
                     />   
                  <img 
                     alt="delete"
                      className="action-icon"
                      style={{ fontSize:15 }}
                       src="https://image.flaticon.com/icons/png/128/3096/3096687.png"
                       onClick={()=> props. onDeleteProduct(props.product.id)}
                       />
                </div>
               
            </div>

         </div>
        );
    
}
const style ={
    image:{
        height:250,
        width:250,
        borderRadius:4
    }
} ;


export default CartItem;



