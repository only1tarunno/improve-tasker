/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../../context";

const TaskActions = ({ handleShow }) => {
  const { setTask } = useContext(TaskContext);

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Add Task
      </button>
      <button
        onClick={handleDeleteAll}
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Delete All
      </button>
    </>
  );
};

export default TaskActions;
