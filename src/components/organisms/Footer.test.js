import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

const testText = 'Footer test';

describe('Footer component', () => {
  test('renders footer component with props', () => {
    render(<Footer text={testText} />);

    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent(testText);
  });
});
