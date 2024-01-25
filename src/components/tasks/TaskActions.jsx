/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../../context";
import { toast } from "react-toastify";

const TaskActions = ({ handleShow }) => {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleDeleteAll = () => {
    // Notify the user that there are no tasks to delete
    if (tasks.length === 0) {
      toast.warning("No tasks to delete");
      return;
    }

    // Display the confirmation alert
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );

    if (isConfirmed) {
      dispatch({ type: "deleteAllTasks" });
      toast.success("All tasks have been deleted");
    }
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
