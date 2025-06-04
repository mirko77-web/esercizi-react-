
/*
import { Todo, TodoStatus } from './types';

const newTodo: Todo = {
  id: 1,
  title: "Scrivere documentazione",
  status: TodoStatus.Pending
};



//esrcizio 18

import { Todo, TodoStatus } from './types';

let todos: Todo[] = [];

function addTodo(title: string, description?: string): Todo {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    description,
    status: TodoStatus.Pending
  };
  todos.push(newTodo);
  return newTodo;
}

//esercizio 19 
// todos.ts

import { Todo, TodoStatus } from './types';

let todos: Todo[] = [
  { id: 1, title: "Scrivere documentazione", status: TodoStatus.Pending },
  { id: 2, title: "Fare il refactoring", status: TodoStatus.InProgress },
  { id: 3, title: "Testare l'app", status: TodoStatus.Completed }
];

function updateTodoStatus(todoId: number, status: TodoStatus): Todo | undefined {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.status = status;
    return todo;
  }
  return undefined;
}

*/
//esercizio 21

import { filterTodos } from './utils';
import { TodoStatus } from './types';

const todos = [
  { id: 1, title: "Task 1", status: TodoStatus.Pending },
  { id: 2, title: "Task 2", status: TodoStatus.Completed }
];

// Filtra i todo con status Pending
const pending = filterTodos(todos, todo => todo.status === TodoStatus.Pending);
