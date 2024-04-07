import TaskCard from "./TaskCard";

const Column = ({task, columnPosition}) => {
  return (
    <>
      <div className="kanban-app">
        {task.columnTitle}
        {task.tasks.map((tempTask, index) => (
          <TaskCard
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
