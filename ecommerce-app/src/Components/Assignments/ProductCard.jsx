import styles from "./CSS/ProductCard.module.css";
import LikeDislikeMain from "./LikeDislikeMain";
function ProductCard({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${styles.card} ${
            !product.isInStock ? styles.outOfStock : ""
          }`}
        >
          <h2>{product.name}</h2>

          <h3>₹{product.price}</h3>

          <p>{product.isInStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
          <LikeDislikeMain></LikeDislikeMain>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
