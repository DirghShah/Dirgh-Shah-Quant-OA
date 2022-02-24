import React from "react";
import "./App.css";
import JsonDataDisplay from "./data";

function App() {
  return (
    <div className="App">
      <h1>Stock Ticker Information</h1>
      <h2>For Apple</h2>
      <JsonDataDisplay></JsonDataDisplay>
    </div>
  );
}

export default App;