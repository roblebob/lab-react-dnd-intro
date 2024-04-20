import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Knight from "./components/Knight";
import Square from "./components/Square";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board knightPosition={[7, 0] } />
    </>
  );
}

export default App;
