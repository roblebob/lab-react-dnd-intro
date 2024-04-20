import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Knight from "./components/Knight";
import Square from "./components/Square";
import Board from "./components/Board";

function App({ knightPosition }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board knightPosition={knightPosition} />
    </>
  );
}

export default App;
