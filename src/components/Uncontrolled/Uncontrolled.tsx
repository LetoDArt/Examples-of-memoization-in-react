import React, { useRef } from 'react';

const Uncontrolled = () => {
  const input = useRef(null);

  const handler = () => {
    console.log(input.current?.target)
  }

  return (
    <div>
      <input ref={input}/>
      <button onClick={handler}>send</button>
    </div>
  );
};

export default Uncontrolled;