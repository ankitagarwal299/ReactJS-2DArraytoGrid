import "./styles.css";

export default function App() {
  const data = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  return (
    <div className="App">
      <h1>Print 2D Array to Matrix or table or Row format</h1>

      <Table data={data} className="container" />
    </div>
  );
}

function Table(props) {
  return (
    <table>
      {props.data.map((val, index) => (
        <tr className="rows">
          <Row key={index} cols={val}></Row>
        </tr>
      ))}
    </table>
  );
}

function Row(props) {
  return props.cols.map((val, index) => (
    <td key={index} cols={val} className="cols">
      {val}
    </td>
  ));
}
