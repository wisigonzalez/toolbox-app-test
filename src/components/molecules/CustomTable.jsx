import React from "react";
import Table from 'react-bootstrap/Table';

/**
 * Componente header que muestra un texto.
 * @param {string} text Texto a mostrar.
 * @returns {jsx} Retorna un elemento JSX (CustomTable) con la clase header y el texto enviado como parametro.
 */
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
        {data.length > 0 && data.map((file) => {
          const {fileName, text, number, hex} = file;

          return (
            <tr data-testid={`table-cell-${text}`} key={`table-cell-${text}`}>
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