import styles from "./CSS/LikeDislike.module.css";
function LikeDislike({ likeCount, dislikeCount, handleLike, handleDislike }) {
  return (
    <div className={styles.container}>
      <button className={styles.likeBtn} onClick={handleLike}>
        👍 Like ({likeCount})
      </button>

      <button className={styles.dislikeBtn} onClick={handleDislike}>
        👎 Dislike ({dislikeCount})
      </button>
    </div>
  );
}

export default LikeDislike;
