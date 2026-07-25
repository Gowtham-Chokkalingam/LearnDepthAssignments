function App() {
  const isLoading = false;
  const isLoggedIn = false;

  const products = [
    { id: 1, name: "MacBook Pro" },
    { id: 2, name: "iPhone 15" },
  ];
  const containerStyle = {
    display: "grid",
    gap: "20px",
    color: "black",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <div style={containerStyle}>
      <h1>E-commerce Product Listing</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : products.length === 0 ? (
        <h2>No products available</h2>
      ) : isLoggedIn ? (
        <div>
          <h2>Products</h2>

          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Please login to view products</h2>
      )}
    </div>
  );
}

export default App;
