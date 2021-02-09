import './style.scss';

const TodoItem = ({ todo, handleChangeTodo, handleDeleteTodo }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => handleChangeTodo(todo)} checked={todo.isCompleted ? true : false} />
      <span className={todo.isCompleted ? 'is-completed' : null}>{todo.title}</span>
      <button onClick={() => handleDeleteTodo(todo.id)}>Del</button>
    </li>
  );
}

export default TodoItem;