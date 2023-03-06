import React from 'react';

import { DisplayProps } from './Display.types';

const Display = ({ count }: DisplayProps) => {
  return (
    <div>
      {count}
    </div>
  );
};

export default Display;