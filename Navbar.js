import React from 'react';
import reactDom from 'react-dom';

const Navbar = (props)=>{
    return (
        <div style={style.nav}>
            <div  style={style.cartIconContainer}>
                <img style={ style.cartIcon} src="https://img-premium.flaticon.com/png/128/2543/premium/2543369.png?token=exp=1627481427~hmac=c20e5140adea34c6254686fe695ae676" alt="cart-icon"/>
                <span  style={style.cartCount}>{props.count}</span>
            </div>
        </div>
    );
    
}
const style ={
    cartIcon:{
        height:45,
        marginRight:35
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'

    },
    cartIconContainer:{
        position:"relative"
    },
    cartCount:{
        width:22,
        background:'yellow',
        borderRadius:'50%',
        padding: 'center',
        position: 'absolute',
        right:0,
        top:-9,
        marginRight:30
    }
} ;


export default Navbar;



