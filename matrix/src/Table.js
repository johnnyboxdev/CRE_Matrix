import React from 'react';

const Table = (props) => {
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
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;