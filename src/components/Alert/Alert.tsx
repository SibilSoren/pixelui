import type { ReactNode } from 'react';
import './Alert.css';

export interface AlertProps {
  /** Alert type */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Optional title */
  title?: string;
  /** Whether alert can be dismissed */
  dismissible?: boolean;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Alert content */
  children: ReactNode;
}

const icons: Record<string, string> = {
  info: 'ℹ️',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

export const Alert = ({
  type = 'info',
  title,
  dismissible = false,
  onDismiss,
  children,
}: AlertProps) => {
  return (
    <div className={`pixel-alert pixel-alert--${type}`} role="alert">
      <span className="pixel-alert__icon">{icons[type]}</span>
      <div className="pixel-alert__content">
        {title && <div className="pixel-alert__title">{title}</div>}
        <div className="pixel-alert__message">{children}</div>
      </div>
      {dismissible && (
        <button 
          className="pixel-alert__dismiss" 
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};
