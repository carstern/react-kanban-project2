import "./App.css";
import {useState, createContext} from "react";
import {taskdata} from "./assets/taskdata"; 
import ColumnList from "./components/ColumnList";
import TaskAdd from "./components/TaskAdd";

// Håller information om hur min data är/ska vara uppbyggd. Kolumnobjekt som har två properties. En property som är columnTitle och en property som är en array av 'tasks'. Varje objekt inuti task-arrayen har i sin tur properties som taskTitle, content, date och creator.
export const DataContext = createContext(); // 



function App() {
  const [tasks, setTasks] = useState(taskdata); // tasks variabeln håller data från taskdata (mitt initial state) och genom den kan jag komma åt de objekt jag har i den filen. Ex tasks, columner och deras properties. 


  
  

  return (
    <>
      <header>
        <h1>React Kanban Board</h1>
      </header>
    
      {/* DataContex.provider tillhandahåller den data som variabeln DataContexts values innehåller, exempelvis via det som useState tar in från taskdata. Genom att sätta tasks så tar jag mig in i taskdata och kommer åt datan samt kan pass data till den med setTask.  */}
      <DataContext.Provider value={[tasks, setTasks]}>
      <TaskAdd setTasks={setTasks}/>

 <ColumnList tasks={tasks}/>
 </DataContext.Provider>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
