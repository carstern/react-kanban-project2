import React, { useState } from "react";

function TaskAdd({ handleSubmit }) {
  const [userInputs, setUserInputs] = useState({
    taskTitle: "",
    content: "",
  });

  function handleTitleChange(e) {
    setUserInputs((prev) => ({ ...prev, taskTitle: e.target.value }));
  }

  function handleContentChange(e) {
    setUserInputs((prev) => ({ ...prev, content: e.target.value }));
  }

  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add Task Title"
            className="add-task-input"
            required
            value={userInputs.taskTitle}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Add Description"
            value={userInputs.content}
            onChange={handleContentChange}
            className="add-task-input"
            required
          />
          <label htmlFor="list"></label>
        </div>
        <button type="submit" className="add-task-btn">Add</button>
      </form>
    </div>
  );
}

export default TaskAdd;
