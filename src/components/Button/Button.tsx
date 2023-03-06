import React from 'react';
import { ButtonProps } from './Button.types';

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;