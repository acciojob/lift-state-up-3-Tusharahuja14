import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle option selection
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ background: 'Green' }} id="main" className="parent">
      <h1 >Parent Component</h1>

      {/* Pass the handleSelectedOption function to child components */}
      <div style={{display:'flex',flexDirection:'column', gap:'0px'}}>
      <ChildComponent1 onSelectOption={handleSelectedOption} />
      <ChildComponent2 onSelectOption={handleSelectedOption} />
      </div>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

function ChildComponent1({ onSelectOption }) {
  return (
    <div style={{background:'brown'}}>
      <h1>Child Component 1</h1>
      <button onClick={() => onSelectOption('Option 1')}>Option 1</button>
    </div>
  );
}

function ChildComponent2({ onSelectOption }) {
  return (
    <div div style={{background:'yellow'}}>
      <h1>Child Component 2</h1>
      <button onClick={() => onSelectOption('Option 2')}>Option 2</button>
    </div>
  );
}

export default App;
