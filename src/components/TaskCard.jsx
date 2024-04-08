import React, {useState, useContext} from "react";
import {DataContext} from "../App";
import {
  RiCloseCircleLine,
  RiArrowRightLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import TaskModal from "./TaskModal";

const TaskCard = ({index, columnPosition, task}) => {
  const [tasks, setTasks] = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  // const [selectedTask, setSelectedTask] = useState(null); 

  const handleTaskClick = () => {
    // setSelectedTask(task);
    setShowModal(true);
  };

  const text_truncate = function (str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  const handleDelete = () => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) => ({...task})),
      }));
      newTasks[columnPosition].tasks.splice(index, 1);
      return newTasks;
    });
    setShowModal(false);
  };

  const moveTaskToRight = () => {
    if (columnPosition < 2) {
      setTasks((prevTasks) => {
        const taskToMove = tasks[columnPosition].tasks[index];
        const updatedTasks = prevTasks.map((column, columnIndex) => {
          if (columnIndex === columnPosition) {
            return {
              ...column,
              tasks: column.tasks.filter((_, taskIndex) => taskIndex !== index),
            };
          } else if (columnIndex === columnPosition + 1) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove],
            };
          } else {
            return column;
          }
        });
        return updatedTasks;
      });
    }
  };

  const moveTaskToLeft = () => {
    if (columnPosition > 0) {
      setTasks((prevTasks) => {
        const taskToMove = tasks[columnPosition].tasks[index];
        const updatedTasks = prevTasks.map((column, columnIndex) => {
          if (columnIndex === columnPosition) {
            return {
              ...column,
              tasks: column.tasks.filter((_, taskIndex) => taskIndex !== index),
            };
          } else if (columnIndex === columnPosition - 1) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove],
            };
          } else {
            return column;
          }
        });
        return updatedTasks;
      });
    }
  };

  return (
<div className="task-row" key={index}>
  <div>
    <div onClick={() =>handleTaskClick(task)} className="task-row-title">
      <h2>{text_truncate(tasks[columnPosition].tasks[index].taskTitle, 20)}</h2>
    </div>
    <div className="task-row-content">
      <h3>{text_truncate(tasks[columnPosition].tasks[index].content, 40)}</h3>
    </div>
  </div>
  <div className="icons">
    <RiCloseCircleLine className="delete-icon" onClick={handleDelete} />
    {columnPosition === 1 && <RiArrowLeftLine onClick={moveTaskToLeft} />}
    {columnPosition === 2 && <RiArrowLeftLine onClick={moveTaskToLeft} />}
    {columnPosition <= 1 && <RiArrowRightLine onClick={moveTaskToRight} />}
  </div>
  {showModal && (
  <TaskModal
    taskTitle={task.taskTitle}
    taskContent={task.content}
    onClose={() => setShowModal(false)}
    handleDelete={handleDelete}
    onSave={(title, content) => {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[columnPosition].tasks[index].taskTitle = title;
        updatedTasks[columnPosition].tasks[index].content = content;
        return updatedTasks;
      });
      setShowModal(true);
    }}
  />
)}
</div>

  );
};

export default TaskCard;
