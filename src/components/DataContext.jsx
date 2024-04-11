import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [
      { id: 1, title: "Example Task 1", content: "bla bla bla", date: "2024-04-11", belongsTo: "Todo" },
      { id: 2, title: "Example Task 2", content: "bla bla bla", date: "2024-04-12", belongsTo: "Doing"},
      { id: 3, title: "Example Task 3", content: "bla bla bla", date: "2024-04-13", belongsTo: "Done"}
    ];
  });

  const [columns, setColumns] = useState(() => {
    const storedColumns = localStorage.getItem('columns');
    return storedColumns ? JSON.parse(storedColumns) : [
      {id: 1, title: "Todo"},
      {id: 2, title: "Doing"},
      {id: 3, title: "Done"},
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  
  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: 1, title: "Example Task 1", content: "bla bla bla", date: "2024-04-11", belongsTo: "Todo" },
        { id: 2, title: "Example Task 2", content: "bla bla bla", date: "2024-04-12", belongsTo: "Doing"},
        { id: 3, title: "Example Task 3", content: "bla bla bla", date: "2024-04-13", belongsTo: "Done"}
      ]);
    }
  }, []);

  return (
    <DataContext.Provider value={{ tasks, setTasks, columns, setColumns }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
