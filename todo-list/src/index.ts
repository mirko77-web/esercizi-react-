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


//esercizio 9
import { error } from './utils';

function checkValue(value: number) {
  if (value < 0) {
    error("Il valore non può essere negativo");
  }
}


//esercizio 11

import { Todo } from './types';

const todos: Todo[] = [];

function addTodo(title: string, metadata?: any): Todo {
  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false,
    metadata
  };
  todos.push(newTodo);
  return newTodo;
}


//esercizio 13

import { Todo } from './types';

const todos: Todo[] = [];

function addTodo(title: string, metadata?: string | object): Todo {
  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false,
    metadata
  };
  todos.push(newTodo);
  return newTodo;
}


//esercizio 14
import { Todo } from './types';

const todos: Todo[] = [];


function updateTodo(id: number, updates: Partial<Todo>): Todo | null {
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    console.error(`Todo con id ${id} non trovato.`);
    return null;
  }

  Object.assign(todo, updates);
  return todo;
}
*/


//esercizio 15
import { Todo } from './types';

function getTodoSummary(todo: Todo): [string, boolean] {
  return [todo.title, todo.completed];
}