const API = 'http://localhost:3001';

export const getTodosFromDB = async () => {
  const options = {
    method: 'GET'
  }
  try {
    const res = await fetch(`${API}/todos`, options)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const postTodoToDB = async (todo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json' }
  }
  try {
    const res = await fetch(`${API}/todos`, options)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const patchTodoToDB = async (todoId, todoPart) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(todoPart),
    headers: { 'Content-type': 'application/json' }
  }
  try {
    const res = await fetch(`${API}/todos/${todoId}`, options)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deleteTodoFromDB = async (todoId) => {
  const options = {
    method: 'DELETE'
  }
  try {
    const res = await fetch(`${API}/todos/${todoId}`, options)
    return res
  } catch (err) {
    console.log(err)
  }
}
