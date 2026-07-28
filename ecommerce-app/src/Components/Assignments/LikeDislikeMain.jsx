import { useState } from "react";
import LikeDislikeChild from "./LikeDislikeChild";

function LikeDislikeMain() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Product Review</h1>

      <LikeDislikeChild
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </div>
  );
}

export default LikeDislikeMain;
