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
