import React from 'react';
import { render, screen } from '@testing-library/react';

import { CustomTable } from './CustomTable';

const testData = [
  {
    fileName: 'test1.csv',
    text: 'foo',
    number: 42,
    hex: '#ABCDEF',
  },
  {
    fileName: 'test2.csv',
    text: 'bar',
    number: 1337,
    hex: '#012345',
  },
];

describe('CustomTable component', () => {
  test('renders custom table component with correct data', () => {
    render(<CustomTable data={testData} />);

    const tableCell = screen.getByTestId('table-cell-bar');

    expect(tableCell).toBeInTheDocument();
  });
});
