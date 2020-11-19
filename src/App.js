import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  // we gonna pass in the data were getting from our dada.js file
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
