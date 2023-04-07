import React from "react";

import Table from 'react-bootstrap/Table';

const CustomTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
        <tr>
          <td>file0.csv</td>
          <td>Rgtya</td>
          <td>64075909</td>
          <td>70ad29aacf0b6</td>
        </tr>
      </tbody>
    </Table>
  );
}

export { CustomTable };