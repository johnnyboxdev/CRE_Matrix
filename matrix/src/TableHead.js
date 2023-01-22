import React from 'react';

const TableHead = (props) => {
  return (
      <thead>
        <tr>
          {props.headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
  );
}

export default TableHead;