import "./App.css";
import ColumnList from "./components/ColumnList";
import {Routes, Route} from "react-router-dom";
import Error from "./components/Error";
import ColumnPage from "./pages/ColumnPage";
import TaskPage from "./pages/TaskPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DataProvider } from "./components/DataContext";
import Column from "./components/Column";

// To Do \\
// Prio 1 - Se till så du kan routa till att kolla på EN column
// Prio 2 - Kommentera kod så du förstår vad du gjort. Strukturera upp mer?
// Fixa header/footer styling
// Local storage
// Definiera eller ta bort de hårdkodade tasksen eventuellt?
//
// presentera date/timestamp i modalvy ? - om du hinner - annars Byeeee!

//VG
// Varje kort egen routing (url)
// Kodkvaliteten av din routing och din applikation som helhet. I enlighet med kurskriterier.

// Håller information om hur min data är/ska vara uppbyggd. Kolumnobjekt som har två properties. En property som är columnTitle och en property som är en array av 'tasks'. Varje objekt inuti task-arrayen har i sin tur properties som taskTitle, content, date och creator.

function App() {
  
  // tasks variabeln håller data från taskdata (mitt initial state) och genom den kan jag komma åt de objekt jag har i den filen. Ex tasks, columner och deras properties.


    return (
      <>
        <Header />
        <DataProvider>
          <Routes>
            <Route path="/" element={<ColumnList />} />
            <Route path="/columns/:columnTitle" element={<ColumnPage />} />
            <Route path="/column" element={<Column />} />
            <Route path="/task/:id" element={<TaskPage/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </DataProvider>
        <Footer />
      </>
    );
  }
  
  export default App;

{
  /* DataContex.provider tillhandahåller den data som variabeln DataContexts values innehåller, exempelvis via det som useState tar in från taskdata. Genom att sätta tasks så tar jag mig in i taskdata och kommer åt datan samt kan pass data till den med setTask.  */
}
