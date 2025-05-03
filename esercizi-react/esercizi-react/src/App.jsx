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

export default App;

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


//esercizio 6 //

import { useState } from 'react';
import React from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`Username: ${username}, Password: ${password}`); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
            placeholder="Inserisci il tuo username" 
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Inserisci la tua password" 
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;


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

  const ResetClickButton = () => {
    setCounter(0); 
  };

  return (
    <div>
      <button onClick={handleClickButton}>Incrementa</button>
      <button onClick={LessClickButton}>Decrementa</button>
      <button onClick={ResetClickButton}>Reset</button>
      <p>
        Counter: {counter}
      </p>
    </div>
  );
};

export default App;


 //esercizio useEffect

import { useState, useEffect } from 'react';
import React from 'react';

const App = () => {
  const [counter, setCounter] = useState(0); 

  const handleClickButton = () => {
    setCounter((_counter) => _counter + 1); 
  };

  const LessClickButton = () => {
    setCounter((_counter) => _counter - 1); 
  };

  const ResetClickButton = () => {
    setCounter(0); 
  };

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  return (
    <div>
      <button onClick={handleClickButton}>Incrementa</button>
      <button onClick={LessClickButton}>Decrementa</button>
      <button onClick={ResetClickButton}>Reset</button>
      <p>
        Counter: {counter}
      </p>
    </div>
  );
};

export default App;



//esercizio 9//

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };

  const handleSubmit = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={handleUsernameChange} 
              placeholder="Inserisci il tuo username" 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Inserisci la tua password" 
            />
          </label>
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button> 
      </form>
    </div>
  );
};

export default LoginForm;


//esercizio 10 //

import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(); 

  const handleSubmit = () => {
    alert(`Valore dell'input: ${inputRef.current.value}`); 
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Inserisci qualcosa..." />
      <button onClick={handleSubmit}>Mostra Valore</button>
    </div>
  );
};

export default UncontrolledInput;


//esercizio 11//

import React, { useRef } from 'react';

const UncontrolledInput = () => {

  const inputRef = useRef();

  const handleButtonClick = () => {
    
    alert(`Il valore dell'input è: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="Scrivi qui..." 
      />
      <button onClick={handleButtonClick}>Mostra Valore</button>
    </div>
  );
};

export default UncontrolledInput;


//esercizio 12//

import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(); 

  const handleButtonClick = () => {
    alert(`Valore corrente dell'input: ${inputRef.current.value}`); 
  };

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="Scrivi qui..."
      />
      <button onClick={handleButtonClick}>Mostra Valore</button> 
    </div>
  );
};

export default UncontrolledInput;



//ersercizio 13//

import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
*/
import React from 'react';
import ItemList from './Components/ItemList';




const MainComponents = () => {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <div>
      <h2>Lista di elementi</h2>
      <ItemList items={items} />
    </div>
  );
};

export default MainComponents;
