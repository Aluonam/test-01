// src/components/Counter.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('renders Counter component', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  });

  test('renders increment and decrement buttons', () => {
    render(<Counter />);
    expect(screen.getByText(/Increment/i)).toBeInTheDocument();
    expect(screen.getByText(/Decrement/i)).toBeInTheDocument();
  });

  test('increments the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test('decrements the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/Decrement/i));
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });
});
