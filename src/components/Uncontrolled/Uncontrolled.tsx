import React, { useRef } from 'react';

const Uncontrolled = () => {
  const input = useRef<HTMLInputElement | null>(null);

  const handler = () => {
    console.log(input.current?.value)
  }

  return (
    <div>
      <input type={'text'} ref={input}/>
      <button onClick={handler}>send</button>
    </div>
  );
};

export default Uncontrolled;