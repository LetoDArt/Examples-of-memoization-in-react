import React, { memo } from 'react';

import { InputProps } from './Input.types';

const Input = memo(({ value, setValue }: InputProps) => {
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
});

export default Input;