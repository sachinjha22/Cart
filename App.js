import React from "react";

import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
            {
                price:999,
                title:'watch',
                qty:1,
                img:'https://4.imimg.com/data4/DS/XS/MY-26510561/casio-539-full-black-watch-for-men-500x500.jpg',
                id:1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhlYT8noa2mL0onvxcB6RDWOLt9FIetxcoQ&usqp=CAU ',
                id:2
            },
            {
                price:999,
                title:'laptop',
                qty:1,
                img:'data:image/jpeg;base64,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',
                id:3
            }
        ]

    }
    
}
handleIncreaseQuantity=(product)=>{
    const{products}=this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products:products
    })
} 
handleDecreaseQuantity=(product)=>{
    const{products}=this.state;
    const index = products.indexOf(product);

    if(products[index].qty==0){
        return;
    }

    products[index].qty -=1;

    this.setState({
        products:products
    })
} 
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const item = products.filter((item)=> item.id !==id);
    this.setState({
        products:item
    })
}
getCartCount=()=>{
  const{products}=this.state;
  let count = 0;
  products.forEach((product)=>{
    count +=product.qty;
  })
  return count; 
} 
getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty * product.price
  })
  return cartTotal;  
}
 
  render() {
    const{products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity} 
          onDecreaseQuantity = {this.handleDecreaseQuantity} 
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{ padding:10,fontSize:30,marginLeft:20,textAlign:customElements}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
