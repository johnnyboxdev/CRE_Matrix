import Table from './Table';
import React, { useState } from 'react';

const TableView = (props) => {

  const headers = [
    'EGI Δ',
    'NOI Δ',
    props.input + '%  Cap Avg',
    '+25 bps',
    '+50 bps',
    '+75 bps',
    '+100 bps',
    '+125 bps',
    '+150 bps'
  ];

  return (
    <div className="widget_container">
      <div className="col-1">
        <img src="https://www.ancregroup.com/wp-content/uploads/2018/05/ancre-logo-no-tagline-e1527112382642.png" /> <br />
        Change<br />in<br />Income 
      </div>
      <div className="col-9">
        <h1>Value Sensitivity Matrix</h1>
        <h2>Change in Cap Rate</h2>
        <Table headers={headers} data={props.tData} />
        <p>{props.input}% Cap Rate is the base cap rate used</p>
        <p>{props.expRatio}% Expense Ratio used to calculate the change in NOI</p>
        <p>{props.input}% Cap rate is the rounded average National Student Housing Cap Rate in 2021 Q4, down approximately 75 bps since 2017</p>    
      </div>
    </div>
  );
}

export default TableView;


