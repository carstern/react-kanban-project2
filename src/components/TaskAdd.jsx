import React, {useState, useEffect} from "react";

function TaskAdd({newTask, setNewTask, handleSubmit}) {
  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add Task Title"
            className="add-task-input"
            required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Description"
            // value={description}
            // onChange={handleDescriptionChange}
            className="add-task-input"
            required
          />
          <label htmlFor="list"></label>
        </div>
        <button className="add-task-btn">Add</button>
      </form>
    </div>
  );
}

export default TaskAdd;