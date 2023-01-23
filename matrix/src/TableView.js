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
    <div>
      <Table headers={headers} data={props.tData} />
    </div>
  );
}

export default TableView;


