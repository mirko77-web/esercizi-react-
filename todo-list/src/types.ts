

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/*
//esercizio 6 

export interface User {
  id: number;
  name: string;
  email?: string; 
}

//esercizio 7 

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;  
}

//esercizio 11

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
  metadata?: any;  
}

//esercizio 12

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export interface TodoWithMetadata extends Todo {
  metadata: any;
}



//esercizio 13
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
  metadata?: string | object;
}
*/

//esercizio 14


export interface User {
  id: number;
  name: string;
  email?: string;
  readonly todos: readonly Todo[];  
}
