import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight, canMoveKnight } from "../data/Game";

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = knightX === x && knightY === y;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      onClick={() => handleSquareClick(x, y)}
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) moveKnight(toX, toY);
}



export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <div
      className="Board"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
}
