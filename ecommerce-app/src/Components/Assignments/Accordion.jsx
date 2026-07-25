import { useState } from "react";

function App() {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library used for building user interfaces.",
    },
    {
      id: 2,
      title: "What is JSX?",
      content:
        "JSX is a syntax extension that allows writing HTML-like code in JavaScript.",
    },
    {
      id: 3,
      title: "What is useState?",
      content:
        "useState is a React Hook used to manage state inside functional components.",
    },
    {
      id: 4,
      title: "What is Virtual DOM?",
      content:
        "Virtual DOM is a lightweight copy of the real DOM that improves rendering performance.",
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
