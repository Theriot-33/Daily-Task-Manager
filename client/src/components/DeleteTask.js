// client/src/components/DeleteTask.js
import React from 'react';
import axios from 'axios';

const DeleteTask = ({ task }) => {
  const handleDelete = () => {
    axios.delete(`/api/tasks/${task._id}`).then((response) => {
      // Handle successful deletion (e.g., show a success message or refresh task list)
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default DeleteTask;
