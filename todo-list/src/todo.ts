
/*
import { Todo, TodoStatus } from './types';

const newTodo: Todo = {
  id: 1,
  title: "Scrivere documentazione",
  status: TodoStatus.Pending
};

*/

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

