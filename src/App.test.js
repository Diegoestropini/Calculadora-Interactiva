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
