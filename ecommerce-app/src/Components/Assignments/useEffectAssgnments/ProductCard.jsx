import styles from "../CSS/ProductCardUseEffect.module.css";

function ProductCard({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={`${styles.card}`}>
          <h2>{product.title}</h2>

          <h3>Category: {product.category}</h3>
          <h3>Price: ₹{product.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
