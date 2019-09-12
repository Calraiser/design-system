import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
     <Tabs/>
    </div>
  );
}

render(<App />,  document.getElementById('root'));
