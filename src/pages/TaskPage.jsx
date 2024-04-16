import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../components/DataContext";

const TaskPage = () => {
  const { id } = useParams();
  const { tasks } = useContext(DataContext);

  // Find the task with the matching id
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <main className="task-page-container">
        <div className="text-container">
      <h2 className="task-title">{task.title}</h2>
      <p className="task-content">{task.content}</p>
      </div>
      <div className="info-container">
      <p className="task-date">Created: {task.date}</p>
      <p className="task-belongs">Belongs to Column: {task.belongsTo}</p>
      </div>
    </main>
  );
};

export default TaskPage;