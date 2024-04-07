import React, { useContext} from "react";
import { DataContext } from "../App";
import {RiCloseCircleLine, RiArrowRightLine} from 'react-icons/ri'


const TaskCard = ({index, columnPosition}) => {
  const [tasks, setTasks] = useContext(DataContext);
  

  return (
    <div>
      <div className="task-row">
        <h3>{tasks[columnPosition].tasks[index].taskTitle}</h3>
        <h3>{tasks[columnPosition].tasks[index].content}</h3>
        <div className='icons'>
            <RiCloseCircleLine className='delete-icon' />
            <RiArrowRightLine />
          </div>
      </div>

    </div>
  );
};

export default TaskCard;


      {/* {tasks.map((task, index) => (
        <div className='task-row' key={index}>
          <div onClick={() => openModal(task)} key={task.id}>
            {task.text}
          </div>
          <div className='icons'>Ikoner
            <RiCloseCircleLine onClick={() => removeTask(task.id)} className='delete-icon' />
            <RiArrowRightLine onClick={() => handleMoveToNextColumn(task.id)} />
          </div>
        </div>
      ))}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={closeModal}
          updateTask={updateTask}
        />
      )} */}