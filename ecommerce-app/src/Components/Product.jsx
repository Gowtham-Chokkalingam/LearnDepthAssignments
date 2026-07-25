function ProductList() {
  const products = [
    {
      name: "Laptop",
      price: 500,
      isInStock: true,
    },
    {
      name: "Phone",
      price: 300,
      isInStock: false,
    },
    {
      name: "Headphones",
      price: 50,
      isInStock: true,
    },
  ];

  // Reusable card style
  const cardStyle = {
    width: "180px",
    color: "black",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",

    textAlign: "center",
    boxShadow: "2px 2px 5px gray",
  };

  // Grid(Container) Style
  const containerStyle = {
    display: "flex",
    gap: "20px",
    color: "black",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            ...cardStyle,
            backgroundColor: product.isInStock ? "white" : "lightgray",
          }}
        >
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <p>{product.isInStock ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
