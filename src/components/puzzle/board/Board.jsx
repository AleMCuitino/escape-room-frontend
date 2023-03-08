import React, { useState, useEffect } from "react";
import Tile from "../tile/Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "../constants"
import { canSwap, shuffle, swap, isSolved } from "../helpers"

function Board({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      setImageLoaded(true);
    };
    image.onerror = () => {
      console.error(`Failed to load image from URL: ${imgUrl}`);
    };
  }, [imgUrl]);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  if (!imageLoaded) {
    return <div>Cargando imagen...</div>;
  }

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Has ordenado el retrato de Hedy Lamarr, pionera de las telecomunicaciones. Ingresa su apellido para continuar.</div>}
      {!isStarted ?
        (<button onClick={() => handleStartClick()}>Comenzar</button>) :
        (<button onClick={() => handleShuffleClick()}>Reiniciar</button>)}
    </>
  );
}

export default Board;