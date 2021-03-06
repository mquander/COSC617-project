import React, {useState} from "react";
import axios from 'axios';
import './Menu.css';
import CustomAppBar from "./CustomAppBar";
import { Button } from "@mui/material";
import baseUrl from "../baseUrl";
// declare array variables to hold the menu data, and variable to calculate total order price
var menu = [], appetizers = [], entrees = [], sides = [], deserts = [], beverages = [], order = [], totalPrice = 0;


// GET request to the server port
  axios.get(baseUrl + '/').then(function(res) {
    menu = res.data;
  });
  

// function to filter the menu item types
function filterMenu(){
  
  for(var i = 0; i < menu.length; i++){
    switch(menu[i].type){
      case "appetizer":
        appetizers.push(menu[i]);
        break;
      case "entree":
        entrees.push(menu[i]);
        break;
      case "side":
        sides.push(menu[i]);
        break;
      case "desert":
        deserts.push(menu[i]);
        break;
      case "beverage":
        beverages.push(menu[i]);
        break;
      default:        
    }
      
  };
}
// function to add menu item to order list
function addItemToOrder(item){
  totalPrice += parseFloat(item.price);
  order.push(item);
}
// function to remove menu item from order list
function removeItem(item){
  if(order.length > 0){
    totalPrice -= parseFloat(item.price);
    order.splice(order.indexOf(item), 1);
  }
}

/* class components for the menu item types */
class Appetizers extends React.Component{
  shouldComponentUpdate() {
    return false;
  }
  render(){
    return(<div>{appetizers.map(a => 
        <p key={a.id}>{a.name}.......................${a.price} <Button onClick={() => {addItemToOrder(a);  }}>Add</Button> </p>
      )}</div>);
  }
}

class Entrees extends React.Component{
  shouldComponentUpdate() {
    return false;
  }
  render(){
    return(<div>{entrees.map(b => 
        <p key={b.id}>{b.name}.......................${b.price} <Button onClick={() => {addItemToOrder(b);  }}>Add</Button> </p>
      )}</div>);
  }
}

class Sides extends React.Component{
  shouldComponentUpdate() {
    return false;
  }
  render(){
    return(<div>{sides.map(c => 
        <p key={c.id}>{c.name}.......................${c.price} <Button onClick={() => {addItemToOrder(c);  }}>Add</Button> </p>
      )}</div>);
  }
}

class Deserts extends React.Component{
  shouldComponentUpdate() {
    return false;
  }
  render(){
    return(<div>{deserts.map(d => 
        <p key={d.id}>{d.name}.......................${d.price} <Button onClick={() => {addItemToOrder(d);  }}>Add</Button> </p>
      )}</div>);
  }
}

class Beverages extends React.Component{
  shouldComponentUpdate() {
    return false;
  }
  render(){
    return(<div>{beverages.map(e => 
        <p key={e.id}>{e.name}.......................${e.price} <Button onClick={() => {addItemToOrder(e);  }}>Add</Button> </p>
      )}</div>);
  }
}
// functional component for Shopping Cart, re-renders on updates
function ShoppingCart(props){
  return(
    <div>
       {props.items.map(item => 
            <p key={item.id}><Button style={{float: "left"}} onClick={() => {removeItem(item); }} variant="contained">Remove</Button>{item.name} {item.price}</p>) }
    </div>
  );
}

// functional component to render the menu and shopping cart
function Menu() {      
  const [count, setCount] = useState(0);

  filterMenu();
  return (
    <>
    <CustomAppBar />
    <div className="menu">
        <div className="container">
                <h1>Menu</h1>
                <p> Select the menu items below to add to your cart </p>
                <h3>Appetizers</h3> {<Appetizers />}
                <h3>Entrees</h3> {<Entrees/>}
                <h3>Sides</h3> {<Sides />} 
                <h3>Deserts</h3> {<Deserts />}
                <h3>Beverages</h3> {<Beverages />}
                
        </div>
        <div className="shoppingCart">
            <p ><b>Shopping Cart</b></p>
            <div>
              <Button onClick={() => {order.length === 0? setCount(order.length) : setCount(count + order.length);  }} variant="contained">Update Cart</Button>
              <p><b>{order.length} Items</b></p>
              <div>{<ShoppingCart items={order} />}</div>
              <p style={{color:'red'}}>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <Button href="/checkout" variant="contained" onClick={() => axios.post(baseUrl, {order}).then(res => {console.log(res.data);})}>Checkout</Button>
        </div>
    </div>
    </>
  );
}

export default Menu;