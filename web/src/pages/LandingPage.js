import React, { useContext, useEffect, useState } from "react";

import Header from "../components/Header";
import ProductsContext from "../context/ProductsContext";

import { db } from "../services/firestore";
import { collection, getDocs } from "firebase/firestore";

function LandingPage() {
  const [data, setData] = useState([]);
  const { cart, addCartItem } = useContext(ProductsContext);

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "produtos"));

    const products = querySnapshot.docs.map((doc) => doc.data());

    setData(products);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {data.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img
              className="img-shoe"
              src={shoe.image_url}
              alt={shoe.description}
            />
            <h3 className="shoe-info">{shoe.description}</h3>
            <p className="price">{shoe.price}</p>
            <button
              className="btn-add"
              onClick={() => addCartItem({ ...shoe, id: index + 1 })}
            >
              <span>1</span>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export default LandingPage;
