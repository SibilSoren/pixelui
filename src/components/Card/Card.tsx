import type { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  /** Visual variant */
  variant?: 'elevated' | 'outlined' | 'filled';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Card content */
  children: ReactNode;
  /** Additional class */
  className?: string;
}

export const Card = ({
  variant = 'elevated',
  padding = 'md',
  children,
  className = '',
}: CardProps) => {
  const classes = [
    'pixel-card',
    `pixel-card--${variant}`,
    `pixel-card--p-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};
