import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    category: "Air Purifying",
    name: "Snake Plant",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32c8b1a"
  },
  {
    id: 2,
    category: "Air Purifying",
    name: "Peace Lily",
    price: 25,
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
  },
  {
    id: 3,
    category: "Succulents",
    name: "Aloe Vera",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af9e4"
  },
  {
    id: 4,
    category: "Succulents",
    name: "Jade Plant",
    price: 18,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  },
  {
    id: 5,
    category: "Flowering",
    name: "Orchid",
    price: 30,
    image: "https://images.unsplash.com/photo-1524593166156-312f362cada0"
  },
  {
    id: 6,
    category: "Flowering",
    name: "Anthurium",
    price: 28,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  }
];

const categories = [...new Set(plants.map((plant) => plant.category))];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "30px" }}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "15px",
                    width: "200px",
                    textAlign: "center"
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button onClick={() => handleAddToCart(plant)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
