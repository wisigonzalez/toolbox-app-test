import React from "react";

import Table from 'react-bootstrap/Table';

const CustomTable = ({data}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((file) => {
          const {fileName, text, number, hex} = file;

          return (
            <tr key={`table-cell-${number}`}>
              <td>{fileName}</td>
              <td>{text}</td>
              <td>{number}</td>
              <td>{hex}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export { CustomTable };
