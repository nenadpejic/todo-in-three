import TodoItem from './TodoItem';

const Todos = ({ todos, handleChangeTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleChangeTodo={handleChangeTodo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </ul>
  );
}

export default Todos;