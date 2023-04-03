import React from "react";
import InputLink from "./components/InputLink";
import UrlShortener from "./components/UrlShortener";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <InputLink setInputValue={setInputValue} />
      <UrlShortener inputValue={inputValue} />
    </div>
  );
}

export default App;
