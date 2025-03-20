import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA (e) {
    setA(e.target.value);
  }

  function onB (e) {
    setB(e.target.value);
  }

  function onCompute() {
    if (isNaN(a) || isNaN(b)) {
      setError(true);
      setResult ("A and B shall be numbers");
    }else {
      setError(false);
      setResult(parseInt(a) + parseInt(b));
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled type="text" value={result} className={error ? "error": ""}/>
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
