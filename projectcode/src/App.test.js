import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('should check the presence of table', () => {
  render(<App />);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument(); 
});
