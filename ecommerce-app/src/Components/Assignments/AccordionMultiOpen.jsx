import { useState } from "react";

function AccordionMultiOpen() {
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

  const [openSections, setOpenSections] = useState([]);

  const handleAccordion = (id) => {
    if (openSections.includes(id)) {
      // Close the section
      setOpenSections(openSections.filter((item) => item !== id));
    } else {
      // Open the section
      setOpenSections([...openSections, id]);
    }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Multiple Accordion</h1>

      {accordionData.map((section) => (
        <div
          key={section.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
          }}
        >
          <div
            onClick={() => handleAccordion(section.id)}
            style={{
              padding: "15px",
              cursor: "pointer",
              backgroundColor: openSections.includes(section.id)
                ? "#87CEEB"
                : "#f2f2f2",
              fontWeight: "bold",
            }}
          >
            {section.title}
          </div>

          {openSections.includes(section.id) && (
            <div
              style={{
                padding: "15px",
                backgroundColor: "white",
              }}
            >
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionMultiOpen;
