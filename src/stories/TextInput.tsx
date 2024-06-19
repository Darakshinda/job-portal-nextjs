"use client"

import React from 'react';



interface InputProps {
  cls?: string;
  placeholder?: string;
  req?:boolean;
  val?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
  cls?: string;
  req?:boolean;
  placeholder?: string;
  val?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} 
export const TextInput = (
  {
  cls = 'input w-full max-w-xs',
  placeholder = 'Type here',
  val,req=false,
  disabled = false,
  onChange,
}: InputProps) => {

  return (
    <input
      type="text"
      required={req}
      className={cls}
      placeholder={placeholder}
      value={val}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export const TextArea = ({
  cls = 'textarea w-full max-w-xs',
  placeholder = 'Description',
  val,req=false,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea style={{height:"250px"}}
      required={req}
      className={cls}
      placeholder={placeholder}
      value={val}
      onChange={onChange}
    />
  );
};