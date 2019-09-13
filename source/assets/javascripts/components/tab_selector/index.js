import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';

import './styles.scss';


function App() {
  return (
    <div>
     <Tabs>
       <a href="hola" label="hola">
       </a>
       <a href="hola" label="hola2">
       </a>
       <a href="hola" label="hola3">
       </a>
     </Tabs>
    </div>
  );
}

render(<App />,  document.getElementById('root'));
