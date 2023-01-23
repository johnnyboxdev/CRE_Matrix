import React, { useState } from 'react';
import TableView from './TableView';

const InputVariables = () => {
  const [inputValue, setInputValue] = useState(6);
  const [expenseRatio, setExpenseRatio] = useState(45);
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleExpenseRatioChange = (e) => {
    setExpenseRatio(e.target.value);

    calculateData(inputValue, e.target.value);
  }  

  const calculateData = (capRate, ratio) => {
    let results = [];

    for (var i = 0; i <= 14; i++) {
      let e = 6 - i;
      let f = e / ( 1 - ratio / 100); 

      console.log(  e );
      results.push([e + "%", f.toFixed(1) + "%"]);
    }

    setTableData(results);
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
            <input type="text" value={expenseRatio} onChange={handleExpenseRatioChange} /> %
          </div>
        </div>
      </div>

      <br />

      <TableView input={inputValue} expRatio={expenseRatio} tData={tableData} />
    </div>
  );
}

export default InputVariables;