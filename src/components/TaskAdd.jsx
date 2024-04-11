import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataContext";

function TaskAdd() {
  const { tasks, setTasks } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInputRef = useRef(null);

  useEffect(() => {
    // Set focus on the title input upon render
    titleInputRef.current.focus();
  }, []);

  function getTimeStamp() {
    return new Date().toISOString();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: tasks && tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: title,
      content: content,
      date: getTimeStamp(),
      belongsTo: "Todo",
    };
  
    setTasks((prevTasks) => [...prevTasks, newTask]);
  
    // Clear the form after submitting
    setTitle("");
    setContent("");
  
    // Set focus on the title input after submitting
    titleInputRef.current.focus();
  }

  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            ref={titleInputRef}
            type="text"
            placeholder="Add Task Title"
            className="add-task-input"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="add-task-input"
            required
          />
          <label htmlFor="list"></label>
        </div>
        <button type="submit" className="add-task-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskAdd;
