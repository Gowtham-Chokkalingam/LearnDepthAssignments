import { useState } from "react";

function App() {
  const accordionData = [
    {
      id: 1,
      title: "Section 1",
      content: "content for section 1",
    },
    {
      id: 2,
      title: "Section 2",
      content: "content for section 2",
    },
    {
      id: 3,
      title: "Section 3",
      content: "content for section 3",
    },
    {
      id: 4,
      title: "Section 4",
      content: "content for section 4",
    },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [activeSectionMulti, setActiveSectionMulti] = useState([]);

  const handleAccordion = (id) => {
    if (activeSection === id) {
      setActiveSection(null); // Collapse if already open
    } else {
      setActiveSection(id); // Expand selected section
    }
    let checkActiveElement = activeSectionMulti.find((item) => item === id);
    console.log("checkActiveElement", checkActiveElement);
    if (checkActiveElement) {
      let filteredItem = activeSectionMulti.filter((item) => item !== id);

      setActiveSectionMulti(filteredItem);
      console.log(
        "filteredItem",
        filteredItem,
        "activeSectionMulti",
        activeSectionMulti,
      );
    } else {
      setActiveSectionMulti([...activeSectionMulti, id]);
      console.log("activeSectionMulti", activeSectionMulti);
    }
  };

  const outerContainerStyle = {
    border: "2px solid gray",

    marginBottom: "10px",
  };
  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Accordion Assignments</h1>

      {accordionData.map((section) => {
        return (
          <div style={outerContainerStyle} key={section.id}>
            <div
              style={{
                backgroundColor:
                  activeSection === section.id ? "#87CEEB" : "#f2f2f2",
                padding: "12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => handleAccordion(section.id)}
            >
              {section.title}
            </div>
            {activeSection === section.id && (
              <div
                style={{
                  backgroundColor: "white",
                  padding: activeSection === section.id ? "20px" : "0px",
                }}
              >
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
