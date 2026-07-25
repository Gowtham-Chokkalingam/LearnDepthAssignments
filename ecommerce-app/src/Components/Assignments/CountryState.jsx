import { useState } from "react";

function CountryState() {
  const countryStateData = [
    {
      country: "India",
      states: [
        "Andhra Pradesh",
        "Karnataka",
        "Kerala",
        "Tamil Nadu",
        "Telangana",
        "Maharashtra",
        "Delhi",
        "Gujarat",
      ],
    },
    {
      country: "USA",
      states: [
        "California",
        "Texas",
        "Florida",
        "New York",
        "Washington",
        "Illinois",
        "Ohio",
        "Virginia",
      ],
    },
    {
      country: "Australia",
      states: [
        "New South Wales",
        "Victoria",
        "Queensland",
        "South Australia",
        "Western Australia",
        "Tasmania",
        "Northern Territory",
        "Australian Capital Territory",
      ],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    console.log(event.target.value);
  };
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    console.log(event.target.value);
  };
  const containerStyle = {
    display: "grid",
    gap: "20px",
    color: "black",
    justifyContent: "center",
  };
  const innerContainer = {
    display: "flex",
    gap: "20px",

    height: "24px",
    margin: "auto",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <div style={innerContainer}>
        <h4>Select Country</h4>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select Country --</option>

          {countryStateData.map((countryData, index) => (
            <option key={index} value={countryData.country}>
              {countryData.country}
            </option>
          ))}
        </select>
      </div>
      <div style={innerContainer}>
        <h4>Select State</h4>

        <select value={selectedState} onChange={handleStateChange}>
          <option value="">-- Select State --</option>

          {countryStateData
            .filter((countryData) => countryData.country === selectedCountry)[0]
            ?.states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
        </select>
      </div>{" "}
      <h3>
        Selected Country and State: {selectedCountry}- {selectedState}
      </h3>
    </div>
  );
}

export default CountryState;
