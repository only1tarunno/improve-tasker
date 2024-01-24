import { useReducer } from "react";
import Page from "./Page";
import { getAllTasks } from "./data/tasks";
import { TaskContext } from "./context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, dispatch] = useReducer(getAllTasks);
  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <Page />
        <ToastContainer />
      </TaskContext.Provider>
    </>
  );
}

export default App;
