import React, { useState } from "react";
import Board from "./board/Board";
import imgURL from "./assets/puzzle-bg.png"

function Puzzle() {
  const [imgUrl, setImgUrl] = useState(imgURL)

  return (
    <div className="Puzzle">
      <h1>Meet an important programmer</h1>
      <Board imgUrl={imgUrl} />
    </div>
  );
}

export default Puzzle
