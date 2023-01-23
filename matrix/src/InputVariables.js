import React, { useState } from 'react';
import TableView from './TableView';

const InputVariables = () => {
  const [inputValue, setInputValue] = useState(0);
  const [expenseRatio, setExpenseRatio] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    calculateData(e.target.value, expenseRatio);
  }

  const handleExpenseRatioChange = (e) => {
    setExpenseRatio(e.target.value);

    calculateData(inputValue, e.target.value);
  }  

  const calculateData = (capRate, ratio) => {
    let results = [];

    for (var i = 0; i <= 14; i++) {
      let EGI = 100;
      let B6 = 1;
      let e = 6 - i;
      let a = EGI + e;
      let b = EGI + (EGI * (e/100)) - (ratio * EGI);
      let f = e / ( 1 - ratio / 100);
      let g =  B6 + ( B6 * (f / 100 ));
      let I7 = capRate / 100;
      let J7 = I7 + 0.0025;
      let K7 = J7 + 0.0025;
      let L7 = K7 + 0.0025;
      let M7 = L7 + 0.0025;
      let N7 = M7 + 0.0025; 
      let O7 = N7 + 0.0025;  
      let j = ((g / J7) - (1 / I7)) / (1 / I7);
      let k = ((g / K7) - (1 / I7)) / (1 / I7);
      let l = ((g / L7) - (1 / I7)) / (1 / I7);
      let m = ((g / M7) - (1 / I7)) / (1 / I7);
      let n = ((g / N7) - (1 / I7)) / (1 / I7);
      let o = ((g / O7) - (1 / I7)) / (1 / I7);

      console.log(  e );
      results.push([
        e + "%", 
        f.toFixed(1) + "%",
        f.toFixed(1) + "%",
        ( j * 100 ).toFixed(1) + "%",
        ( k * 100 ).toFixed(1) + "%",
        ( l * 100 ).toFixed(1) + "%",
        ( m * 100 ).toFixed(1) + "%",
        ( n * 100 ).toFixed(1) + "%",
        ( o * 100 ).toFixed(1) + "%"
      ]);
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