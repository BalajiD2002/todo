import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (task.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, task]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = task;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setTask('');
    }
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>
          {editIndex === -1 ? 'Add' : 'Update'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTodo}>Update</button>
              </div>
            ) : (
              <div>
                {todo} 
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
