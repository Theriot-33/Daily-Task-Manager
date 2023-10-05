import './App.css';
import React from 'react';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

const App = () => {
  return (
    <div>
      <h1>Daily Task Manager</h1>
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
