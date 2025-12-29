import type { ReactNode } from 'react';
import { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg';
  /** Close on overlay click */
  closeOnOverlay?: boolean;
  /** Modal content */
  children: ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlay = true,
  children,
}: ModalProps) => {
  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="pixel-modal-overlay" 
      onClick={closeOnOverlay ? onClose : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div 
        className={`pixel-modal pixel-modal--${size}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="pixel-modal__header">
            <h2 id="modal-title" className="pixel-modal__title">{title}</h2>
            <button className="pixel-modal__close" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        )}
        <div className="pixel-modal__content">{children}</div>
      </div>
    </div>
  );
};
