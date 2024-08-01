// src/components/DummyComponent.test.jsx
import { render, screen } from '@testing-library/react';
import DummyComponent from './DummyComponent';

test('renders Hello, World!', () => {
  render(<DummyComponent />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
