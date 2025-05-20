import { Link } from 'react-router-dom';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const todos = [
  { id: 1, title: 'Fare la spesa', description: 'Comprare latte e pane' },
  { id: 2, title: 'Pulire casa', description: 'Passare lo straccio ' },
  { id: 3, title: 'Studiare ', description: 'Leggere libro ' },
];

function TodoList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');


  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  // Funzione chiamata quando l’utente scrive nella barra di ricerca
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

  
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  // Filtra i to-do in base al termine di ricerca 
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista To-Do</h1>

      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <li key={todo.id}>
              <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            </li>
          ))
        ) : (
          <li>Nessun to-do trovato</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
