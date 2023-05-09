import React from 'react';

export const PlayerPosition = ({ playerCoord }) => {
  return (
    <div>
      X : {playerCoord.x}, Y : {playerCoord.y}
    </div>
  );
};
