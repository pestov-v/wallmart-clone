
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input label="Test Label" id="test-input" />);
    const inputElement = screen.getByLabelText(/test label/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('displays the correct label', () => {
    render(<Input label="Test Label" id="test-input" />);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('forwards the props to the input element', () => {
    render(<Input label="Test Label" id="test-input" name="test-input" type="text" />);
    const inputElement = screen.getByLabelText(/test label/i);
    expect(inputElement).toHaveAttribute('id', 'test-input');
    expect(inputElement).toHaveAttribute('name', 'test-input');
    expect(inputElement).toHaveAttribute('type', 'text');
  });
});
