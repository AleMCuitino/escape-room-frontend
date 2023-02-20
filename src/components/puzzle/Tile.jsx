import React from "react";
import { motion } from "framer-motion";
import { getMatrixPosition, getVisualPosition } from "./helpers";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"

function Tile(props) {
  const { tile, index, width, height, handleTileClick, imgUrl } = props;
  console.log("img in tile", imgUrl)
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  
  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${(100 / (GRID_SIZE - 1)) * (Math.floor(tile / GRID_SIZE))}%`,
  };

  const transition = { type: "spring", stiffness: 250, damping: 20 };

  return (
    <motion.li
      style={tileStyle}
      initial={false}
      animate={{
        x: visualPos.x,
        y: visualPos.y,
      opacity: tile === TILE_COUNT - 1 ? 0 : 1,
      }}
      transition={transition}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {!imgUrl && `${tile + 1}`}
    </motion.li>
  );
}

export default Tile;