import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
import { useContext } from "react";
import TaskAdd from "./TaskAdd";

const Column = ({ title }) => {
  const { tasks, columns } = useContext(DataContext);

  // Filter tasks based on the title
  const filteredTasks = tasks.filter((task) => task.belongsTo === title);

  // Check if the column is the first column (index 0)
  const isFirstColumn = columns.findIndex((column) => column.title === title) === 0;

  return (
    <div className="kanban-app">
      <Link to={`/column/${title}`}>
        <h2 className="column-title">{title}</h2>
      </Link>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {isFirstColumn && <TaskAdd />}
    </div>
  );
};

export default Column;
