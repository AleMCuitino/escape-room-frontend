import React, { useState } from "react";
import Board from "./board/Board";
import imgURL from "./assets/puzzle-bg.png"
import '@/components/puzzle/index.css'

function Puzzle() {
  const [imgUrl, setImgUrl] = useState(imgURL)


  return (
    <div className="App">
      <Board imgUrl={imgUrl} />
    </div>
  );
}

export default Puzzle
