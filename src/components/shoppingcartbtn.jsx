import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ShoppingCartBtn = () => {
  const[selectedCart, setselectedCart] = useState([]);
  const [cartCount, setcartCount] = useState(0);

  const handleCartUpdate = (value) => {
    const copy =[...selectedCart];
    copy.push(value);
    setselectedCart(copy);
    localStorageCartSave();
    console.log("Cart Updated:", copy);
  };
  const handleDisplayCartCount = () => {
    let count = localStorageCartRetrieve();
    console.log(`Current Cart Count: ${count}`);
  }

  function addToCart() {
    console.log("Added to cart");
    setcartCount(cartCount + 1);
    handleCartUpdate("New Item");
  }

  function removeFromCart() {
    console.log("Removed from cart");
    setcartCount(cartCount - 1);
    handleCartUpdate("Remove Item");
  }
  
  const localStorageCartRetrieve = () =>{
    ;
    setcartCount(localStorage.getItem("cartCount"));
    setselectedCart(localStorage.getItem("selectedCart"));
    handleDisplayCartCount();
  };

  const localStorageCartSave = () =>{
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("selectedCart", selectedCart);
  };

  return (
    <>
      <span><Button onClick={removeFromCart}>Remove from Cart</Button></span>
      <span><Button onClick={addToCart}>Add to Cart</Button></span>
      <span><p>#Cart: {cartCount}</p></span>
      <span><p>Items in Cart: {selectedCart}</p></span>
    </>
  );
};
export default ShoppingCartBtn;
//create localStorage of cart
//method of adding methods to cart
//method of removing methods to cart
//update quantity of items in cart

//add all functions within cart Context

//in view import context, check currentCount and display
