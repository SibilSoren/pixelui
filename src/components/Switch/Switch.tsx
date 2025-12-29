import './Switch.css';

export interface SwitchProps {
  /** Current checked state */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Size of the switch */
  size?: 'sm' | 'md';
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
}

export const Switch = ({
  checked = false,
  label,
  size = 'md',
  disabled = false,
  onChange,
}: SwitchProps) => {
  const handleClick = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <label className={`pixel-switch ${disabled ? 'pixel-switch--disabled' : ''}`}>
      <div
        className={`pixel-switch__track pixel-switch__track--${size} ${checked ? 'pixel-switch__track--checked' : ''}`}
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div className="pixel-switch__thumb" />
      </div>
      {label && <span className="pixel-switch__label">{label}</span>}
    </label>
  );
};
