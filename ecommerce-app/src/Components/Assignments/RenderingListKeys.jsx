function App() {
  const menuList = [
    {
      id: 1,
      name: "Vegetables",
      items: ["Onion", "Carrot", "Beans"],
    },
    {
      id: 2,
      name: "Fruits",
      items: ["Apple", "Orange"],
    },
  ];

  // Menu button click
  const handleMenuClick = (menuName) => {
    console.log("Menu:", menuName);
  };

  // Item button click
  const handleItemClick = (menuName, itemName) => {
    console.log("Menu:", menuName);
    console.log("Item:", itemName);
  };
  const containerStyle = {
    display: "grid",
    gap: "20px",
    color: "black",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <section style={containerStyle}>
      <h1>Food Menu</h1>

      {menuList.map((menu) => (
        <div key={menu.id}>
          <button onClick={() => handleMenuClick(menu.name)}>
            {menu.name}
          </button>

          <br />
          <br />

          {menu.items.map((item, index) => {
            return (
              <button
                style={{ marginRight: "10px" }}
                key={index}
                onClick={() => handleItemClick(menu.name, item)}
              >
                {menu.name}-{item}
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default App;
