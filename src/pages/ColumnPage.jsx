import { useParams } from "react-router-dom";
import { useContext } from "react";
import TaskCard from "../components/TaskCard";
import { DataContext } from "../components/DataContext";

const ColumnPage = () => {
  const { columnTitle } = useParams();
  const { tasks } = useContext(DataContext);

  console.log("Column Title:", columnTitle);

  // Filter tasks based on columnTitle
  const filteredTasks = tasks.filter((task) => task.belongsTo === columnTitle);

  console.log("Filtered Tasks:", filteredTasks);

  return (
    <div className="kanban-app">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ColumnPage;
