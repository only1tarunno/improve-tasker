import { useReducer } from "react";
import Page from "./Page";
import { initialTasks } from "./data/tasks";
import { TaskContext } from "./context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import taskReducer from "./reducers/TaskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
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
