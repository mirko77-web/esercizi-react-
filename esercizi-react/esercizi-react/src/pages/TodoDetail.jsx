import { Link } from 'react-router-dom';

const todos = [
  { id: 1, title: 'Fare la spesa', description: 'Comprare latte e pane' },
  { id: 2, title: 'Pulire casa', description: 'Passare lo straccio ' },
  { id: 3, title: 'Studiare ', description: 'Leggere libro ' },
];

function TodoList() {
  return (
    <div>
      <h1>Lista To-Do</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
