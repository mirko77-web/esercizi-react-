import { useParams } from 'react-router-dom';
const todos = [
  { id: 1, title: 'Fare la spesa', description: 'Comprare latte e pane' },
  { id: 2, title: 'Pulire casa', description: 'Passare lo straccio ' },
  { id: 3, title: 'Studiare ', description: 'Leggere libro ' },
];

function TodoDetail() {
 
  const { id } = useParams();

  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return <h2>To-Do non trovato</h2>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default TodoDetail;
