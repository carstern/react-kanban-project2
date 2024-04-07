import React, {useState} from "react";

function TaskAdd({setTasks}) {
  const [userInputs, setUserInputs] = useState({
    taskTitle: "",
    content: "",
  });
  function getTimeStamp() {
    return new Date().toISOString();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prevTasks) => {
      let newTasks = prevTasks.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) => ({...task})),
      }));
      const newTask = {
        taskTitle: userInputs.taskTitle,
        content: userInputs.content,
        date: getTimeStamp(),
      };

      newTasks[0].tasks.push(newTask);
      return newTasks;
    });
  }

  function handleTitleChange(e) {
    setUserInputs((prev) => ({...prev, taskTitle: e.target.value}));
  }

  function handleContentChange(e) {
    const truncatedContent = e.target.value.slice(0, 10);
    setUserInputs((prev) => ({...prev, content:truncatedContent}));
  }


  return (
    <div className="form-container">
      <form className="add-task-form">
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
        <button type="submit" className="add-task-btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskAdd;
