import React, { createContext, useState, useContext } from 'react';

// Creazione del contesto
const TodoContext = createContext();

// Provider che gestisce lo stato globale dei to-do
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}


export function useTodos() {
  return useContext(TodoContext);
}
