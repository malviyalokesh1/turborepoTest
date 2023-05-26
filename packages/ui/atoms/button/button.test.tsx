import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './button';

test('Header contains correct text', () => {
  render(<Button text='hi' variant='primary' />);
  const text = screen.getByText('hi');
  expect(text).toBeInTheDocument();
});
