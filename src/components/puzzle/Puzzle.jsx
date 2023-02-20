import React, { useState } from "react";
import Board from "./board/Board";
import imgURL from "./assets/puzzle-bg.png"

function Puzzle() {
  const [imgUrl, setImgUrl] = useState(imgURL)

  console.log("Puzzle is mounted");

  return (
    <div className="App">
      <h1>Ordena el retrato de la programadora</h1>
      <Board imgUrl={imgUrl} />
    </div>
  );
}

export default Puzzle
