import React, { useId } from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  isRequired = false,
  id,
  className = '',
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`input-group ${className}`.trim()}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          <span>{label}</span>
          {isRequired && <span className="input-required-star" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="input-wrapper">
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          required={isRequired}
          className={`input-control ${error ? 'input-control--error' : ''}`}
          {...props}
        />
      </div>

      {error ? (
        <p id={errorId} className="input-error-text" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="input-helper-text">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
