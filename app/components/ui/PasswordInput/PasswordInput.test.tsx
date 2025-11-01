
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  it('renders an input element with type "password" by default', () => {
    render(<PasswordInput label="Password" id="password-input" />);
    const inputElement = screen.getByLabelText(/password/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('displays the correct label', () => {
    render(<PasswordInput label="Password" id="password-input" />);
    const labelElement = screen.getByText(/password/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('toggles the input type between "password" and "text" when the eye icon button is clicked', () => {
    render(<PasswordInput label="Password" id="password-input" />);
    const inputElement = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole('button');

    expect(inputElement).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('forwards the props to the input element', () => {
    render(
      <PasswordInput
        label="Password"
        id="password-input"
        name="password"
        placeholder="Enter your password"
      />,
    );
    const inputElement = screen.getByLabelText(/password/i);
    expect(inputElement).toHaveAttribute('id', 'password-input');
    expect(inputElement).toHaveAttribute('name', 'password');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your password');
  });
});
