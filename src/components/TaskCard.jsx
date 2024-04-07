import React, { useContext } from "react";
import { DataContext } from "../App";
import { RiCloseCircleLine, RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const TaskCard = ({ index, columnPosition }) => {
  const [tasks, setTasks] = useContext(DataContext);

  const handleDelete = () => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) => ({ ...task })),
      }));
      newTasks[columnPosition].tasks.splice(index, 1);
      return newTasks;
    });
  };

  const moveTaskToRight = () => {
    if (columnPosition < 2) {
      setTasks((prevTasks) => {
        const taskToMove = tasks[columnPosition].tasks[index];
        const updatedTasks = prevTasks.map((column, columnIndex) => {
          if (columnIndex === columnPosition) {
            return {
              ...column,
              tasks: column.tasks.filter((_, taskIndex) => taskIndex !== index)
            };
          } else if (columnIndex === columnPosition + 1) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove]
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
              tasks: column.tasks.filter((_, taskIndex) => taskIndex !== index)
            };
          } else if (columnIndex === columnPosition - 1) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove]
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
    <div>
    <div className="task-row" key={index}>
      <h3>{tasks[columnPosition].tasks[index].taskTitle}</h3>
      <h3>{tasks[columnPosition].tasks[index].content}</h3>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={handleDelete}
        />
        {columnPosition === 1 && <RiArrowLeftLine onClick={moveTaskToLeft} />}
        {columnPosition === 2 && <RiArrowLeftLine onClick={moveTaskToLeft} />}
        {columnPosition <= 1 && <RiArrowRightLine onClick={moveTaskToRight} />}
      </div>
    </div>
  </div>
  );
};

export default TaskCard;
