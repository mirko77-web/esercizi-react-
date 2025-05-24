const myName: string = "luigi";
console.log(myName);

import { Todo } from './types';

const todos: Todo[] = [];

//esercizio 5 
function addTodo(title: string): Todo {
  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, 
    title,
    completed: false
  };

  todos.push(newTodo);
  return newTodo;
}