import React from 'react';

import Form from './components/Form/Form';
import Counter from './components/Counter/Counter';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <Uncontrolled />
    </div>
  );
}

export default App;
