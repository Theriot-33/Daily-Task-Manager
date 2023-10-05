// client/src/components/CreateTask.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
    };

    axios.post('/api/tasks', newTask).then((response) => {
      // Handle successful creation (e.g., show a success message or refresh task list)
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
