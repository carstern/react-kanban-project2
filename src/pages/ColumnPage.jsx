import { useParams } from "react-router-dom";
import { useContext } from "react";
import TaskCard from "../components/TaskCard";
import { DataContext } from "../components/DataContext";

const ColumnPage = () => {
  const { columnTitle } = useParams();
  const { tasks } = useContext(DataContext);

  // Filter tasks based on columnTitle
  const filteredTasks = tasks.filter((task) => task.belongsTo === columnTitle);

  return (
    <div className="kanban-app">
      {columnTitle && (
        <>
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </>
      )}
    </div>
  );
};

export default ColumnPage;
