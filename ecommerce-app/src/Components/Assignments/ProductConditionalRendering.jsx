function ProductList() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
    },
    {
      id: 2,
      name: "Samsung S24",
    },
  ];
  const containerStyle = {
    display: "grid",
    gap: "20px",
    color: "black",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <>
      {products.length > 0 ? (
        <div style={containerStyle}>
          {products.map((product) => (
            <div key={product.id}>
              <h2>
                {product.id} {product.name}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div style={containerStyle}>
          <h2>No products available.</h2>
        </div>
      )}
    </>
  );
}

export default ProductList;
