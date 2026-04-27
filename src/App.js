import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    setResult("Recipe for: " + input);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Generator (Hamza Shakur)</h1>

      <input
        type="text"
        placeholder="Enter ingredients..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Generate Recipe</button>

      <p>{result}</p>
    </div>
  );
}

export default App;