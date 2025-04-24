/* import { useState } from 'react';
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

//esercizio 3//

import { useState } from 'react';
import React from 'react';

const App = () => {
  const [counter, setCounter] = useState(0); 

  const handleClickButton = () => {
    setCounter((_counter) => _counter + 1); 
  };

  return (
    <div>
      <button onClick={handleClickButton}>Incrementa</button>
      <p>
        Counter: {counter} 
      </p>
    </div>
  );
};

export default App;


//esercizio 4//

import { useState } from 'react';
import React from 'react';

const App = () => {
  const [counter, setCounter] = useState(0); 

  const handleClickButton = () => {
    setCounter((_counter) => _counter + 1); 
  };

  const LessClickButton = () => {
    setCounter((_counter) => _counter - 1); 
  };

  return (
    <div>
      <button onClick={handleClickButton}>Incrementa</button>
      <button onClick={LessClickButton}>decrementa</button>
      
      <p>
        Counter: {counter} 
      </p>
    </div>
  );
};

export default App;*/

//esercizio 5//

import { useState } from 'react';
import React from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Scrivi qualcosa..."
      />
      <p>Valore dell'input: {inputValue}</p>
    </div>
  );
};

export default TextInput;
