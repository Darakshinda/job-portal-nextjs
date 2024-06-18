import React from 'react';

interface InputProps {
  cls?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
  cls?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} 
export const TextInput = ({
  cls = 'input w-full max-w-xs',
  placeholder = 'Type here',
  value,
  disabled = false,
  onChange,
}: InputProps) => {
  return (
    <input
      type="text"
      className={cls}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export const TextArea = ({
  cls = 'textarea w-full max-w-xs',
  placeholder = 'Description',
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      className={cls}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};