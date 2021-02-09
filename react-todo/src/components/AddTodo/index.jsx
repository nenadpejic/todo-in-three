import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ handleAddTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: newTodoTitle,
      isCompleted: false
    }
    handleAddTodo(newTodo);
    setNewTodoTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} placeholder='Add Todo...' />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddTodo;