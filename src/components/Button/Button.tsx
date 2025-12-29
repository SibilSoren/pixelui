import type { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Show loading spinner */
  loading?: boolean;
  /** Icon before text */
  leftIcon?: ReactNode;
  /** Icon after text */
  rightIcon?: ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** Button content */
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const classes = [
    'pixel-btn',
    `pixel-btn--${variant}`,
    `pixel-btn--${size}`,
    fullWidth && 'pixel-btn--full',
    loading && 'pixel-btn--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="pixel-btn__spinner" aria-hidden="true" />}
      {leftIcon && !loading && <span className="pixel-btn__icon">{leftIcon}</span>}
      <span className="pixel-btn__text">{children}</span>
      {rightIcon && <span className="pixel-btn__icon">{rightIcon}</span>}
    </button>
  );
};
