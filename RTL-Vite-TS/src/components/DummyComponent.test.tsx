import { render, screen } from '@testing-library/react';
import DummyComponent from './DummyComponent';
import { expect, test } from 'vitest';

test('renders Hello, World!', () => {
  render(<DummyComponent />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
