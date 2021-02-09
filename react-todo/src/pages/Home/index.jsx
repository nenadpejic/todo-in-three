import './style.scss';
import { useEffect, useState } from 'react';
import { AddTodo, Todos } from '../../components';
import { getTodosFromDB, postTodoToDB, deleteTodoFromDB, patchTodoToDB } from '../../services';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodosFromDB()
      .then(res => {
        setTodos(res)
      })
  }, [])

  const handleAddTodo = (todo) => {
    postTodoToDB(todo)
      .then(res => {
        const newTodos = [...todos, res];
        setTodos(newTodos)
      })
  }

  const handleChangeTodo = (todo) => {
    const todoPart = { isCompleted: !todo.isCompleted }
    patchTodoToDB(todo.id, todoPart)
      .then(res => {
        const newTodos = [...todos].map(elem => {
          if (elem.id === todo.id) {
            return res
          }
          return elem
        })
        setTodos(newTodos)
      })
  }

  const handleDeleteTodo = (todoId) => {
    deleteTodoFromDB(todoId)
      .then(() => {
        const newTodos = [...todos].filter(elem => elem.id !== todoId)
        setTodos(newTodos)
      })
  }

  return (
    <main className='home'>
      <AddTodo handleAddTodo={handleAddTodo} />
      <Todos todos={todos} handleChangeTodo={handleChangeTodo} handleDeleteTodo={handleDeleteTodo} />
    </main>
  );
}

export default Home;