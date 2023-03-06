import React, { useState } from 'react';
import Button from './Button/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseOption = () => setCount(count + 1);

  const decreaseOption = () => setCount(count - 1);

  return (
    <div>
      <Button title={"-"} onClick={increaseOption}/>

      <Button title={"+"} onClick={decreaseOption}/>
    </div>
  );
};

export default Counter;