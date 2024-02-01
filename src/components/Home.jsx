import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArr = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        description,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const deleteTask = (index) => {
    const filterdArr = task.filter((val, i) => {
      return i !== index;
    });

    setTask(filterdArr);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="form">
        <h2>Daily Tasks</h2>

        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        ></textarea>
        <button>Add</button>
      </form>

      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
