export function error(message: string): never {
  throw new Error(message);
}

//esercizio 10 


function parseInput(input: unknown): string {
  if (typeof input === 'string') {
    return input;
  }
  
  if (typeof input === 'number') {
    return input.toString();
  }
  
  return error('Input non valido: deve essere stringa o numero');
}


//esrcizio 21



import { Todo } from './types';

/**
 * Filtra un array di Todo in base a una funzione di filtro.
 * @param todos Array di Todo da filtrare
 * @param filterFn Funzione che riceve un Todo e restituisce true se va incluso
 * @returns Array di Todo filtrati
 */
export function filterTodos(
  todos: Todo[],
  filterFn: (todo: Todo) => boolean
): Todo[] {
  return todos.filter(filterFn);
}


//esrcizio 24

import { Todo, TodoRecord } from './types';

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
  return todos.reduce((acc, todo) => {
    acc[todo.id] = todo;
    return acc;
  }, {} as TodoRecord);
}
