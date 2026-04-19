import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {!showProductList ? (
        <div>
          <h1>Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery, your one-stop shop for beautiful house plants.</p>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
