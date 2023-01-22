import React, { useState } from 'react';
import TableView from './TableView';

const InputVariables = () => {
  const [inputValue, setInputValue] = useState(6);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <div className="InputVariables">
        <div className="container">
          <div className="col-1">
            Cap Rate Start <br />
            <input type="text" value={inputValue} onChange={handleChange} /> Cap Avg
          </div>
          <div className="col-2">
            Expense Ratio <br />
            <input type="number" min="1" max="100" step="1" /> %
          </div>
        </div>
      </div>

      <br />

      <TableView input={inputValue} />
    </div>
  );
}

export default InputVariables;