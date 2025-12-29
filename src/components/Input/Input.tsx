import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Icon on the left */
  leftIcon?: ReactNode;
  /** Icon on the right */
  rightIcon?: ReactNode;
  /** Full width input */
  fullWidth?: boolean;
  /** Change handler with value */
  onChange?: (value: string) => void;
}

export const Input = ({
  size = 'md',
  label,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className = '',
  onChange,
  ...props
}: InputProps) => {
  const wrapperClasses = [
    'pixel-input-wrapper',
    fullWidth && 'pixel-input-wrapper--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'pixel-input',
    `pixel-input--${size}`,
    error && 'pixel-input--error',
    leftIcon && 'pixel-input--has-left',
    rightIcon && 'pixel-input--has-right',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="pixel-input__label">{label}</label>
      )}
      <div className="pixel-input__container">
        {leftIcon && <span className="pixel-input__icon pixel-input__icon--left">{leftIcon}</span>}
        <input
          className={inputClasses}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {rightIcon && <span className="pixel-input__icon pixel-input__icon--right">{rightIcon}</span>}
      </div>
      {error && (
        <span className="pixel-input__error" id={`${props.id}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
