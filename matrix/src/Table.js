import React from 'react';

const Table = (props) => {

  const minValue = Math.min(...props.data.flat());
  const maxValue = Math.max(...props.data.flat());
  console.log(props.data.flat());
  console.log(minValue + " < " + maxValue);

  const getCellColor = (value) => {
    
    const ratio = (value - minValue) / (maxValue - minValue);
    const hue = 131 * ratio; // hue for green and red colors
    return `hsl(${hue}, 89%, 41%)`;
  };

  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index} style={{ backgroundColor: getCellColor(cell) }}>{cell}%</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;