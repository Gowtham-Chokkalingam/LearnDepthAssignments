import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
        setCategories(uniqueCategories);
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
  console.log("products", products);
  function handleFilter(category, min, max) {
    let filtered = [...products];

    // Category Filter
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Min Price Filter
    if (min !== "") {
      filtered = filtered.filter((product) => product.price >= Number(min));
    }

    // Max Price Filter
    if (max !== "") {
      filtered = filtered.filter((product) => product.price <= Number(max));
    }

    setFilteredProducts(filtered);

    console.log("filtered", filtered);
  }

  function handleCategoryChange(e) {
    const category = e.target.value;

    setSelectedCategory(category);

    handleFilter(category, minPrice, maxPrice);
  }

  function handleMinPrice(e) {
    const value = e.target.value;

    setMinPrice(value);

    handleFilter(selectedCategory, value, maxPrice);
  }

  function handleMaxPrice(e) {
    const value = e.target.value;

    setMaxPrice(value);

    handleFilter(selectedCategory, minPrice, value);
  }

  return (
    <div style={{ width: "90%", margin: "20px auto" }}>
      <h1>Product Filter</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPrice}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPrice}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: "820px",
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              {/* <img
                src={product.image}
                alt={product.title}
                width="100"
                height="120"
              /> */}

              <h4>{product.title}</h4>

              <h3>${product.price}</h3>

              <p>{product.category}</p>
              <p>Rating ★ {product.rating.rate}</p>
              <p>Popularity {product.rating.count}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
