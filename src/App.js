import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import Typography from "@material-ui/core/Typography";

import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Typography component="h4" variant="h4">
        Todos App

     </Typography>

      < TodoForm saveTodo={(todoText) => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
      }} />
      <TodoList todos={todos}
        deleteTodo={(index) => {
          const newTodo = todos.filter((_, idx) => idx !== index)
          setTodos(newTodo)
        }} />
    </div>
  );
}

export default App;
