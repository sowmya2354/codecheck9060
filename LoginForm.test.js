import { render, screen } from '@testing-library/react';
import React from 'react';
import LoginForm from './index';

test('email input is in the DOM', () => {
  render(<LoginForm />);
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();
});

test('password input is in the DOM', () => {
  render(<LoginForm />);
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});
test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});
