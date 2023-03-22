import { useState } from "react";
import ExampleUnmount from "./Components/ExampleUnmount";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {show && <ExampleUnmount />}
      <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
    </div>
  );
}
