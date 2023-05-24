import classnames from 'classnames';
import React, { MouseEvent, ReactNode } from 'react';
import { ImSpinner2 } from 'react-icons/im';

// Button props
type ButtonVariant = 'primary' | 'outline' | 'light' | 'dark';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  text?: any;
  children?: ReactNode;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>, params?: any) => void;
  params?: any;
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled = false,
    text,
    children,
    clickHandler,
    variant,
    isLoading,
  } = props;

  const childComp: string | ReactNode | undefined =
    !isLoading && (text || children);

  const loadingComp = isLoading && (
    <div
      className={classnames(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        {
          'text-white': variant && ['primary', 'dark'].indexOf(variant) !== -1,
          'text-black': variant === 'light',
          'text-primary-dark': variant === 'outline',
        }
      )}
    >
      <ImSpinner2 className='animate-spin' />
    </div>
  );

  // default classes for buttons
  const defaultButtonClasses =
    'flex h-[58px] min-w-[20%] items-center justify-center rounded-lg px-4 py-2 focus-visible:ring-primary-500 focus:outline-none focus-visible:ring shadow-sm transition-colors duration-75 disabled:cursor-not-allowed';

  // conditional classes for buttons
  const buttonClass = classnames(
    {
      'bg-primary-solid text-white hover:bg-primary-dark active:bg-primary-solid':
        variant === 'primary',
    },
    {
      'text-primary-solid border border-primary-solid hover:bg-primary-solid hover:text-white active:bg-primary-solid':
        variant === 'outline',
    },
    {
      'bg-primary-light text-primary-solid hover:bg-primary-solid hover:text-white':
        variant === 'light',
    },
    {
      'bg-primary-dark text-white hover:bg-primary-solid': variant === 'dark',
    },
    {
      'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait':
        isLoading,
    },
    {
      [`${className}`]: className,
    }
  );

  return (
    <button
      onClick={clickHandler}
      className={`${defaultButtonClasses} ${buttonClass}`}
      disabled={disabled}
    >
      {loadingComp}
      {childComp}
    </button>
  );
};
