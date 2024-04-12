import { useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <img src={logo} alt="" />
    </>
  );
}

export default App;
