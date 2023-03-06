import React, { memo } from 'react';
import { ButtonProps } from './Button.types';

const Button = memo(({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
});

export default Button;