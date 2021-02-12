const API = 'http://localhost:3002';

export const getTodosFromDB = async () => {
  const options = {
    method: 'GET',
  }
  const res = await fetch(`${API}/todos`, options);
  if (res.status !== 200) {
    console.log(`Status code: ${res.status}`);
  } else {
    return res.json();
  }
}

export const postTodoToDB = async (todo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json' }
  }
  const res = await fetch(`${API}/todos`, options);
  if (res.status !== 201) {
    console.log(`Status code: ${res.status}`);
  } else {
    return res.json();
  }
}

export const putTodoToDB = async (todo) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json' }
  }
  const res = await fetch(`${API}/todos/${todo.id}`, options);
  if (res.status !== 200) {
    console.log(`Status code: ${res.status}`);
  } else {
    return res.json();
  }
}

export const deleteTodoFromDB = async (id) => {
  const options = {
    method: 'DELETE'
  }
  const res = await fetch(`${API}/todos/${id}`, options);
  if (res.status !== 200) {
    console.log(`Status code: ${res.status}`);
  } else {
    return res;
  }
}