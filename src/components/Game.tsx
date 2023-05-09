import React from 'react';
import { Board } from './Board';
import { useEffect, useState } from 'react';
import { Direction } from '../types/utils';
import { PlayerPosition } from './PlayerPosition';

export const Game = () => {
  const [board, setBoard] = useState([]);
  const [playerCoord, setPlayerCoord] = useState({ x: 3, y: 2 });
  const DIMENSION = 6;

  const handleKeyBoardEvent = (e) => {
    const direction = e.key;
    const currentPosition = playerCoord;
    if (!canPlayerMove(currentPosition, direction)) return;
    switch (direction) {
      case Direction.up:
        currentPosition.y--;
        break;
      case Direction.down:
        currentPosition.y++;
        break;
      case Direction.left:
        currentPosition.x--;
        break;
      case Direction.right:
        currentPosition.x++;
        break;
    }

    setPlayerCoord({ ...currentPosition });
  };

  const canPlayerMove = (playerCoord, movement): boolean => {
    if (
      (movement === Direction.up && playerCoord.y > 0) ||
      (movement === Direction.down && playerCoord.y < DIMENSION - 1) ||
      (movement === Direction.right && playerCoord.x < DIMENSION - 1) ||
      (movement === Direction.left && playerCoord.x > 0)
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyBoardEvent);
    // return window.removeEventListener('keydown', handleKeyBoardEvent);
  }, []);

  useEffect(() => {
    const initBoard = new Array(DIMENSION);
    for (let index = 0; index < initBoard.length; index++) {
      initBoard[index] = new Array(DIMENSION).fill('#');
    }
    initBoard[playerCoord.y][playerCoord.x] = 'J';

    setBoard(initBoard);
  }, [playerCoord]);

  return (
    <div>
      <PlayerPosition playerCoord={playerCoord} />
      <Board board={board} />
    </div>
  );
};
