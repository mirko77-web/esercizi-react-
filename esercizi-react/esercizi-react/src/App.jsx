import { useState } from 'react';
import React from 'react';

const App = () => {
 const [counter, setcounter] = useState (0);

 return (
  <div>
    <p>
      counter: {counter}
    </p>
  </div>
 )
}


export default App