import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState(['Estudar React', 'Fazer exercício', 'Caminhar']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <Task task={task} />
          <button onClick={() => handleRemoveTask(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default App;
