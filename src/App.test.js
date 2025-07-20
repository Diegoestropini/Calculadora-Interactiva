import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Clear button resets the display', () => {
  const { container } = render(<App />);
  const display = container.querySelector('.input');

  userEvent.click(screen.getByText('1'));
  expect(display.textContent).toBe('1');

  userEvent.click(screen.getByText(/Clear/i));
  expect(display.textContent).toBe('');
});

test('addition works', () => {
  const { container } = render(<App />);
  const display = container.querySelector('.input');

  userEvent.click(screen.getByText('2'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('3'));
  userEvent.click(screen.getByText('='));

  expect(display.textContent).toBe('5');
});

test('subtraction works', () => {
  const { container } = render(<App />);
  const display = container.querySelector('.input');

  userEvent.click(screen.getByText('9'));
  userEvent.click(screen.getByText('-'));
  userEvent.click(screen.getByText('4'));
  userEvent.click(screen.getByText('='));

  expect(display.textContent).toBe('5');
});

test('multiplication works', () => {
  const { container } = render(<App />);
  const display = container.querySelector('.input');

  userEvent.click(screen.getByText('5'));
  userEvent.click(screen.getByText('*'));
  userEvent.click(screen.getByText('6'));
  userEvent.click(screen.getByText('='));

  expect(display.textContent).toBe('30');
});

test('division works', () => {
  const { container } = render(<App />);
  const display = container.querySelector('.input');

  userEvent.click(screen.getByText('8'));
  userEvent.click(screen.getByText('/'));
  userEvent.click(screen.getByText('2'));
  userEvent.click(screen.getByText('='));

  expect(display.textContent).toBe('4');
});
