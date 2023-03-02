import React, { useState } from "react";
import ProductsContext from "./ProductsContext";

function RecipesProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  function addCartItem(product) { 
    const existingCartItemIndex = cart.findIndex((cartItem) => cartItem.id === product.id)

    if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...cart]
        updatedCartItems[existingCartItemIndex].quantity += 1;
        setCart(updatedCartItems)
    } else {
        setCart([...cart, { ...product, quantity: 1}])
    }
    setQuantity(quantity + 1)
  }

  const contextValue = {
    cart,
    addCartItem,
    quantity,
    setCart,
    setQuantity
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export default RecipesProvider;
