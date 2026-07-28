import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 500,
      isInStock: true,
    },
    {
      id: 2,
      name: "Phone",
      price: 300,
      isInStock: false,
    },
    {
      id: 3,
      name: "Headphones",
      price: 50,
      isInStock: true,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 120,
      isInStock: false,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product List</h1>

      <ProductCard products={products} />
    </>
  );
}

export default Products;
