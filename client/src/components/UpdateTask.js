// client/src/components/UpdateTask.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateTask = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      title,
      description,
      completed,
    };

    axios.patch(`/api/tasks/${task._id}`, updatedTask).then((response) => {
      // Handle successful update (e.g., show a success message or refresh task list)
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Completed:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
