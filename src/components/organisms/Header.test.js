import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

const testText = 'header test';

describe('Header component', () => {
  test('renders footer component with props', () => {
    render(<Header text={testText} />);

    const header = screen.getByTestId('header');

    expect(header).toHaveTextContent(testText);
  });
});
