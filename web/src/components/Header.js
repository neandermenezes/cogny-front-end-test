import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

function Header() {
  const { cart, quantity } = useContext(ProductsContext)
  const navigate = useNavigate()

  return (
    <div class="container">
      <header class="header">
        <div class="logo-container">
          <h1>COGNYSHOES</h1>
        </div>
        <div class="cart">
          <h1 onClick={() => navigate('/checkout')}>Meu Carrinho</h1>
          <p>{quantity} itens</p>
        </div>
      </header>
    </div>
  );
}

export default Header;