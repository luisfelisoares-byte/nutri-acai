import React, { useId } from 'react';
import { ChevronDown } from 'lucide-react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  options,
  error,
  helperText,
  isRequired = false,
  placeholder,
  id,
  className = '',
  ...props
}, ref) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const errorId = `${selectId}-error`;
  const helperId = `${selectId}-helper`;

  return (
    <div className={`select-group ${className}`.trim()}>
      {label && (
        <label htmlFor={selectId} className="select-label">
          <span>{label}</span>
          {isRequired && <span className="select-required-star" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="select-wrapper">
        <select
          ref={ref}
          id={selectId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          required={isRequired}
          className={`select-control ${error ? 'select-control--error' : ''}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="select-icon" aria-hidden="true">
          <ChevronDown size={18} />
        </span>
      </div>

      {error ? (
        <p id={errorId} className="select-error-text" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="select-helper-text">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Select.displayName = 'Select';
