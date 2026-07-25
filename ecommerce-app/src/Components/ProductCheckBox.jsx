import { useState } from "react";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCourses((prev) => [...prev, value]);
      console.log([...selectedCourses, value]);
    } else {
      const updatedCourses = selectedCourses.filter(
        (course) => course !== value,
      );
      setSelectedCourses(updatedCourses);
      console.log(updatedCourses);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Popular items</h2>

      <label>
        <input type="checkbox" value="Salad" onChange={handleCheckboxChange} />
        Salad
      </label>

      <br />

      <label>
        <input type="checkbox" value="Burger" onChange={handleCheckboxChange} />
        Burger
      </label>

      <br />

      <label>
        <input type="checkbox" value="Pizza" onChange={handleCheckboxChange} />
        Pizza
      </label>
    </div>
  );
}

export default App;
