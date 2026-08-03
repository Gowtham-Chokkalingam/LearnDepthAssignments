import { useEffect, useState } from "react";
import "../CSS/ProductsFakeStore.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
        setFilteredProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        uniqueCategories.push("All");
        console.log("uniqueCategories", uniqueCategories);
        setCategories(uniqueCategories);
        console.log("categories", categories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  function handleCategory(category) {
    // Do nothing if same category is clicked
    if (activeCategory === category) {
      return;
    } else if (category === "All") {
      setActiveCategory(category);
      return setFilteredProducts(products);
    } else {
      setActiveCategory(category);

      const filtered = products.filter(
        (product) => product.category === category,
      );

      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="buttonContainer">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategory(category)}
            className={activeCategory === category ? "activeButton" : "button"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="productContainer">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            {/* <img src={product.image} alt={product.title} /> */}

            <h3>{product.title}</h3>

            <h4>₹ {product.price}</h4>

            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
