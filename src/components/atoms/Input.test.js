import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Input } from './Input';

const testValue = 'test0.csv';
const testText = 'Text of test';
const testPlaceholder = 'Placeholder of test';
const testHandle = jest.fn();
const testPending = false;
const testNewValue = 'test1.csv';

describe('Input component', () => {
  it('renders input component with props and not disabled', () => {
    render(
      <Input 
        valueOfInput={testValue}
        textOfInput={testText} 
        placeholderOfInput={testPlaceholder} 
        handleInput={testHandle} 
        isPending={testPending} 
      />
    );

    const inputLabel = screen.getByTestId('input-label');

    expect(inputLabel).toHaveTextContent(testText);
  });

  it('renders input component with props and disbabled', () => {
    render(
      <Input 
        valueOfInput={testValue}
        textOfInput={testText} 
        placeholderOfInput={testPlaceholder} 
        handleInput={testHandle} 
        isPending={true} 
      />
    );

    const inputControl = screen.getByTestId('input-control');

    expect(inputControl).toHaveAttribute('disabled');
  });

  it('updates input value and calls handleInput function', () => {
    render(
      <Input 
        valueOfInput={''}
        textOfInput={testText} 
        placeholderOfInput={testPlaceholder} 
        handleInput={testHandle} 
        isPending={testPending} 
      />
    );

    const inputControl = screen.getByTestId('input-control');

    fireEvent.change(inputControl, { target: { value: testNewValue } });

    expect(testHandle).toHaveBeenCalledTimes(1);
  });
});
