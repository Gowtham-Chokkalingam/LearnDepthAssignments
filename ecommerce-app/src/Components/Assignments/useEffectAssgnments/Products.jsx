import ProductCard from "./ProductCard";

import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([
    "All",
    "jewelery",
    "electronics",
    "men's clothing",
    "women's clothing",
  ]);

  useEffect(() => {
    console.log("Products component mounted");

    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log("Fetched products:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product List</h1>

      {category.map((cat) => (
        <button
          style={{
            margin: "5px",
            padding: "10px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={cat}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}

      <ProductCard products={products} />
    </>
  );
}

export default Products;
