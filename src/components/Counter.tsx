import React, { useCallback, useState } from 'react';
import Button from './Button/Button';
import Display from './Display/Display';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseOption = useCallback(() => setCount((prev) => prev + 1), []);

  const decreaseOption = () => setCount(count - 1);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: 20, margin: 'auto'}}>
      <Button title={"+"} onClick={increaseOption}/>
      <Display count={count}/>
      <Button title={"-"} onClick={decreaseOption}/>
    </div>
  );
};

export default Counter;