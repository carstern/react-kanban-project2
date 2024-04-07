import Column from "./Column";
import Error from "./Error";
import { useContext } from "react";
import { DataContext } from "../App";
import { Routes, Route } from "react-router-dom";

export default function ColumnRoute() {
  const [tasks, setTasks] = useContext(DataContext);

  return (
    <>
      <section className="kanban-app">
        <Routes>
          {tasks.map((task, index) => {
            return (
              <Route
                key={index}
                path={`/${task.columnTitle}`}
                element={<Column task={task} key={index} columnPosition={index} routed={true} />}
              />
            );
          })}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}