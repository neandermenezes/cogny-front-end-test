import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductsContext from "../context/ProductsContext";

function Checkout() {
  const { cart, setCart, setQuantity } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  function executeBuy() {
    setCart([])
    setQuantity(0)

    navigate('/')
  }

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc += (curr.quantity * curr.price), 0)
    
    setTotal(newTotal)
  }, [])

  return (
    <>
      <Header />
      <div className="checkout">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>PREÇO</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img className="img-shoe-checkout" src={product.image_url} alt={product.description} />
                </td>
                <td>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </td>
                <td>{product.quantity}</td>
                <td>${product.quantity * product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="checkout-footer">
            <button className="btn-checkout" onClick={executeBuy}>
                FINALIZAR PEDIDO
            </button>
            <p>TOTAL <span className="total-price">${total}</span></p>
        </div>
      </div>
    </>
  );
}

export default Checkout;
