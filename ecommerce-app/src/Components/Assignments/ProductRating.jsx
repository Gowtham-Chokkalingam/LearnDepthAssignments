import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  const handleRating = (star) => {
    setRating(star);
    console.log("Rating", rating);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Product Rating</h1>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}

      <h2>Selected Rating: {rating} / 5</h2>
    </div>
  );
}

export default App;
