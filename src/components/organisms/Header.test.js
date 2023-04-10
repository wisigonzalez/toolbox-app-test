import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

const testText = 'Header test';

describe('Header component', () => {
  it('renders footer component with props', () => {
    render(<Header text={testText} />);

    const header = screen.getByTestId('header');

    expect(header).toHaveTextContent(testText);
  });
});
