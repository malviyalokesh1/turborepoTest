import { render } from '@testing-library/react';
import React from 'react';

import { Button, ButtonProps } from './button';

describe('Button contains correct text', () => {
  const defaultProps: ButtonProps = {
    text: 'Click me',
    clickHandler: jest.fn(),
    isLoading: false,
    variant: 'primary',
  };

  it('renders button text', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  // it('fires click event', () => {
  //   const { getByText } = render(<Button text='Click me' />);
  //   const buttonElement = getByText('Click me');
  //   fireEvent.click(buttonElement);
  //   expect(defaultProps.clickHandler).toHaveBeenCalled();
  // });

  // it('renders loading spinner when isLoading is true', () => {
  //   const { getByTestId } = render(<Button {...defaultProps} isLoading />);
  //   const loadingSpinner = getByTestId('loading-spinner');
  //   expect(loadingSpinner).toBeInTheDocument();
  // });

  // it('applies additional class name', () => {
  //   const { container } = render(
  //     <Button {...defaultProps} className='custom-class' />
  //   );
  //   const buttonElement = container.querySelector('.custom-class');
  //   expect(buttonElement).toBeInTheDocument();
  // });
});
