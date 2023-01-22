import Table from './Table';

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
const data = [
  ['Data 1', 'Data 2', 'Data 3'],
  ['Data 4', 'Data 5', 'Data 6'],
  ['Data 7', 'Data 8', 'Data 9']
];

  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
}

export default TableView;


