type ButtonVariant = "primary" | "outline" | "light" | "dark";
import classnames from "classnames";

import React, { ReactNode, MouseEvent } from "react";
interface ButtonProps {
  className?: string;
  disabled?: boolean;
  text?: any;
  children?: ReactNode;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>, params?: any) => void;
  params?: any;
  variant?: ButtonVariant;
  loader?: boolean;
  loadingText?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled = false,
    text,
    children,
    clickHandler,
    params,
    variant,
    loader,
    loadingText = "Loading...",
  } = props;

  const childComp: string | ReactNode | undefined = text || children;

  const buttonClass = classnames(
    "flex h-[58px] min-w-[20%] items-center justify-center rounded-lg px-4 py-2 focus-visible:ring-primary-500 focus:outline-none focus-visible:ring shadow-sm transition-colors duration-75 disabled:cursor-not-allowed",
    {
      "bg-primary-solid text-white hover:bg-primary-dark active:bg-primary-solid":
        variant === "primary",
    },
    {
      "text-primary-solid border border-primary-solid hover:bg-primary-solid hover:text-white active:bg-primary-solid":
        variant === "outline",
    },
    {
      "bg-primary-light text-primary-solid hover:bg-primary-solid hover:text-white":
        variant === "light",
    },
    {
      "bg-primary-dark text-white hover:bg-primary-solid": variant === "dark",
    },
    {
      [`${className}`]: className,
    }
  );

  return (
    <button onClick={clickHandler} className={buttonClass} disabled={disabled}>
      {childComp}
    </button>
  );
};
