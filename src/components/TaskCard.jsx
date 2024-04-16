import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
import {
  RiCloseCircleLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiEditLine 
} from "react-icons/ri";
import TaskModal from "./TaskModal";

const TaskCard = ({ task }) => {
  const { tasks, setTasks, columns } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  const handleTaskClick = () => {
    setShowModal(true);
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const handleSave = (taskId, editedTitle, editedContent) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, title: editedTitle, content: editedContent };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  const moveTaskToRight = () => {
    const currentColumnIndex = columns.findIndex((column) => column.title === task.belongsTo);
  
    if (currentColumnIndex < columns.length - 1) {
      const nextColumnTitle = columns[currentColumnIndex + 1].title;
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((t) => {
          if (t.id === task.id) {
            return { ...t, belongsTo: nextColumnTitle };
          }
          return t;
        });
        return updatedTasks;
      });
    }
  };
  
  const moveTaskToLeft = () => {
    const currentColumnIndex = columns.findIndex((column) => column.title === task.belongsTo);
  
    if (currentColumnIndex > 0) {
      const prevColumnTitle = columns[currentColumnIndex - 1].title;
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((t) => {
          if (t.id === task.id) {
            return { ...t, belongsTo: prevColumnTitle };
          }
          return t;
        });
        return updatedTasks;
      });
    }
  };
  

  // Determine which arrows to display based on the index of the column title
  const renderArrowIcons = (index) => {
    if (index === 0) {
      return <RiArrowRightLine onClick={moveTaskToRight} />;
    } else if (index === 1) {
      return (
        <>
          <RiArrowLeftLine onClick={moveTaskToLeft} />
          <RiArrowRightLine onClick={moveTaskToRight} />
        </>
      );
    } else if (index === 2) {
      return <RiArrowLeftLine onClick={moveTaskToLeft} />;
    }
    return null; // Return null for default case
  };

  return (
    <>
      <div className="task-row">
        <div>
        <Link to={`/task/${task.id}`}><div className="task-row-title"  >
            <h2>{task.title}</h2>
          </div></ Link>
          <div className="task-row-content">
            <h3>{task.content}</h3>
          </div>
        </div>
        <div className="icons">
        <RiEditLine onClick={handleTaskClick}/><RiCloseCircleLine className="delete-icon" onClick={() => handleDelete(task.id)} />
          {renderArrowIcons(columns.findIndex((column) => column.title === task.belongsTo))}
        </div>
      </div>
      {showModal && (
        <TaskModal
          taskTitle={task.title}
          taskContent={task.content}
          taskId={task.id}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TaskCard;
