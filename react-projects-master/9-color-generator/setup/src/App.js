import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);

  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form>
        <input type="text" className="null" placeholder="#f15025" value />
        <button className="btn">Submit</button>
      </form>
    </section>
  );
}

export default App;
