import React, { useId } from 'react';
import './Textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  isRequired = false,
  id,
  className = '',
  ...props
}, ref) => {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const errorId = `${textareaId}-error`;
  const helperId = `${textareaId}-helper`;

  return (
    <div className={`textarea-group ${className}`.trim()}>
      {label && (
        <label htmlFor={textareaId} className="textarea-label">
          <span>{label}</span>
          {isRequired && <span className="textarea-required-star" aria-hidden="true">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        required={isRequired}
        className={`textarea-control ${error ? 'textarea-control--error' : ''}`}
        {...props}
      />

      {error ? (
        <p id={errorId} className="textarea-error-text" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="textarea-helper-text">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

Textarea.displayName = 'Textarea';
