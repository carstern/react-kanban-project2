import Column from "./Column";
import Error from "./Error";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Routes, Route } from "react-router-dom";

export default function ColumnRoute() {
  const { tasks } = useContext(DataContext);

  return (
    <>
      <section className="kanban-app">
        <Routes>
          {/* Iterate through unique column titles */}
          {[...new Set(tasks.map((task) => task.belongsTo))].map((title, index) => {
            return (
              <Route
                key={index}
                path={`/${title}`}
                element={<Column title={title} />}
              />
            );
          })}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}
