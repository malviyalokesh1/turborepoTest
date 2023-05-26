import { render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './button';

describe('Button contains correct text', () => {
  it('renders a button', () => {
    render(<Button text='hi' variant='primary' />);

    const heading = screen.getByText('hi');

    expect(heading).toBeInTheDocument();
  });
});
