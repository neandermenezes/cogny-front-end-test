import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../services/firestore';
import { collection, getDocs} from "firebase/firestore";

function LandingPage() {
  const [data, setData] = useState([]);

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "produtos"));

    const products = querySnapshot.docs.map((doc) => doc.data());

    setData(products)
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Shoe Store</h1>
      </header>
      <main>
        <section>
          <h2>Featured Shoes</h2>
          <div className="shoes-container">
            {data.map((shoe, index) => (
              <div className="shoe-card" key={index}>
                <img src={shoe.image_url} alt={shoe.description} />
                <h3>{shoe.description}</h3>
                <p>{shoe.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Shoe Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
