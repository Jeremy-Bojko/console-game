import React from 'react';

export const Board = ({ board }) => {
  return (
    <table>
      <tbody>
        {board.map((x, indexX) => {
          return (
            <tr key={`tr-${indexX}`}>
              {x.map((y, indexY) => (
                <td key={`td-${indexX}-${indexY}`}>{y}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
