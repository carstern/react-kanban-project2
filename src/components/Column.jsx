import TaskCard from "./TaskCard";

const Column = ({task, columnPosition}) => {
  return (
    <>
      <div className="kanban-app">
      <h2 className="column-title">{task.columnTitle}</h2>
        {task.tasks.map((tempTask, index) => (
          <TaskCard
          task={tempTask}
            key={index}
            index={index}
            columnPosition={columnPosition}
            title={tempTask.taskTitle}
            content={tempTask.content}
            date={tempTask.date}
          />
        ))}
      </div>
    </>
  );
};

export default Column;
