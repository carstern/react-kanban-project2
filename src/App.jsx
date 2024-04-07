import "./App.css";
import {useState, createContext} from "react";
import {taskdata} from "./assets/taskdata"; 
import ColumnList from "./components/ColumnList";
import TaskAdd from "./components/TaskAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColumnRoute from "./components/ColumnRoute";
import Error from "./components/Error";

// Håller information om hur min data är/ska vara uppbyggd. Kolumnobjekt som har två properties. En property som är columnTitle och en property som är en array av 'tasks'. Varje objekt inuti task-arrayen har i sin tur properties som taskTitle, content, date och creator.
export const DataContext = createContext(); // 



function App() {
  const [tasks, setTasks] = useState(taskdata); // tasks variabeln håller data från taskdata (mitt initial state) och genom den kan jag komma åt de objekt jag har i den filen. Ex tasks, columner och deras properties. 


  
  

  return (
    
    <Router>
      <div>
        <header>
          <h1>React Kanban Board</h1>
        </header>
    
      {/* DataContex.provider tillhandahåller den data som variabeln DataContexts values innehåller, exempelvis via det som useState tar in från taskdata. Genom att sätta tasks så tar jag mig in i taskdata och kommer åt datan samt kan pass data till den med setTask.  */}
      
      <Routes>
          <Route
            path="/"
            element={
              <DataContext.Provider value={[tasks, setTasks]}>
                <TaskAdd setTasks={setTasks} />
                <ColumnList tasks={tasks} />
              </DataContext.Provider>
            }
          />
<Route
  path="/column"
  element={
    <DataContext.Provider value={[tasks, setTasks]}>
      <TaskAdd setTasks={setTasks} />
      
      {tasks.map((task, index) => (
        <ColumnRoute task={task} columnPosition={index} key={index} />
      ))}
    </DataContext.Provider>
  }
/>
          <Route path="*" element={<Error />} />
        </Routes>

        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    </Router>
  );
}


export default App;
