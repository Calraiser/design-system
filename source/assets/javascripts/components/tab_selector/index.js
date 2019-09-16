import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';

import './styles.scss';


function App() {
  return (
    <div>
     <Tabs>
       <a href="hola" label="Externa">
       </a>
       <a href="hola" label="Interna">
       </a>
     </Tabs>
    </div>
  );
}

render(<App />,  document.getElementById('root'));
