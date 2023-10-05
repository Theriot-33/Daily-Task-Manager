// client/src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - Completed: {task.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
