import { useState } from "react";
import Page from "./Page";
import { getAllTasks } from "./data/tasks";
import { TaskContext } from "./context";

function App() {
  const [tasks, setTask] = useState(getAllTasks);
  return (
    <>
      <TaskContext.Provider value={{ tasks, setTask }}>
        <Page />
      </TaskContext.Provider>
    </>
  );
}

export default App;
