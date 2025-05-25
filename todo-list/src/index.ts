/*const myName: string = "luigi";
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

//esercizio 7 
import { Todo } from './types';

const todos: Todo[] = [];


function addTodo(title: string): Todo {
  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
}


function assignTodoToUser(todoId: number, userId: number): boolean {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    console.error(`Todo con id ${todoId} non trovato.`);
    return false;
  }
  todo.userId = userId;
  return true;
}

//esercizio 8
import { Todo } from './types';

const todos: Todo[] = [];

// Funzione per ottenere tutti i Todo di un utente specifico
function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}
*/

//esercizio 9
import { error } from './utils';

function checkValue(value: number) {
  if (value < 0) {
    error("Il valore non può essere negativo");
  }
}

