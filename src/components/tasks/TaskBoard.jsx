import { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import { TaskContext } from "../../context";
import Addtask from "./Addtask";
import { toast } from "react-toastify";

const TaskBoard = () => {
  const { tasks, setTask } = useContext(TaskContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAdd = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTask(updatedTasks);
    }
    // Close the modal after adding or updating the task
    handleCloseClick();
  };

  // Set the task to be updated and open the modal for editing
  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  // delete a single task
  const handleDelete = (task) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      const tasksAfterDelete = tasks.filter((item) => item.id !== task.id);
      setTask(tasksAfterDelete);
      toast.success(`Task deleted successfully`);
    }
  };

  // add and remove favourite
  const handleFav = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTaskArray = [...tasks];
    newTaskArray[taskIndex].isFavorite = !newTaskArray[taskIndex].isFavorite;
    setTask(newTaskArray);
  };

  // Close the modal and reset the taskToUpdate state
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {showAddModal && (
          <Addtask
            handleCloseClick={handleCloseClick}
            handleAdd={handleAdd}
            taskToUpdate={taskToUpdate}
          />
        )}

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* task header start here  */}
          <TaskHeader
            handleShow={() => {
              setShowAddModal(true);
            }}
          />
          {/* task List start here  */}
          <TaskList
            tasks={tasks}
            handleDelete={handleDelete}
            handleFav={handleFav}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
