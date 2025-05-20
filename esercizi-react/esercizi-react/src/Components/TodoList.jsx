/*import { useState } from "react";
import useFetch from "../Hooks/UseFetch";
import useFilteredTodos from "../Hooks/useFilteredTodos"; 

const TodoList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  const [search, setSearch] = useState ("");
  const filteredTodos = useFilteredTodos ( data, search )

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <input onChange={(e) => setSearch (e.target.value) } type="text"  />
      <ul>
        {filteredTodos && filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


import { useState, useCallback } from "react";
import useFetch from "../Hooks/UseFetch";
import useFilteredTodos from "../Hooks/useFilteredTodos"; 

const TodoList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filteredTodos = useFilteredTodos(data, search);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <input onChange={handleSearchChange} type="text" value={search} placeholder="Cerca..." />
      <ul>
        {filteredTodos && filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


import { useState, useCallback } from "react";
import useFetch from "../Hooks/UseFetch";
import useFilteredTodos from "../Hooks/useFilteredTodos"; 

const TodoList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filteredTodos = useMemo(() => useFilteredTodos(data, search), [data, search]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <input onChange={handleSearchChange} type="text" value={search} placeholder="Cerca..." />
      <ul>
        {filteredTodos && filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


import React from 'react';
import { useTodos } from '../contexts/TodoContext';

function TodoList() {
  const { todos, setTodos } = useTodos();

  
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: 'Nuovo ToDo' }]);
  };

  return (
    <div>
      <button onClick={addTodo}>Aggiungi ToDo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import React, { useContext, useState } from 'react';
import { TodoContext  } from "./TodoList";

const TodoList = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Aggiungi un nuovo to-do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Aggiungi</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
*/