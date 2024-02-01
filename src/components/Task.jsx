import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <textarea name="task">{title}</textarea>
      <textarea name="task">{description}</textarea>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
