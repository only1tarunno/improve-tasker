import { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import { TaskContext } from "../../context";
import Addtask from "./Addtask";

const TaskBoard = () => {
  const { tasks, setTask } = useContext(TaskContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAdd = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      const updateTask = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTask(updateTask);
    }
    handleCloseClick();
  };

  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== id);
    setTask(tasksAfterDelete);
  };

  const handleFav = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTaskArray = [...tasks];
    newTaskArray[taskIndex].isFavorite = !newTaskArray[taskIndex].isFavorite;
    setTask(newTaskArray);
  };

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
