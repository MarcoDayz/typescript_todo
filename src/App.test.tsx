import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const greeting = screen.getByText(/Hello World/i);
  expect(greeting).toBeInTheDocument();
});
