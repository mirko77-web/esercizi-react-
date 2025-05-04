import useFetch from "../hooks/useFetch";

const TodoList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
