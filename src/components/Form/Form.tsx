import React, { useState } from 'react';
import Input from './Input/Input';

const Form = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  return (
    <div>
      <Input  value={value1} setValue={setValue1}/>
      <Input  value={value2} setValue={setValue2}/>
      <Input  value={value3} setValue={setValue3}/>
    </div>
  );
};

export default Form;