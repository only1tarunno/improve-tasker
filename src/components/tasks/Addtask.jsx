import { useState } from "react";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const Addtask = ({ handleCloseClick, taskToUpdate, handleAdd }) => {
  const [task] = useState(taskToUpdate);

  const [isAdd] = useState(Object.is(taskToUpdate, null));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const title = e.target.title.value;
    const description = e.target.description.value;
    const tags = e.target.tags.value;
    const priority = e.target.priority.value;

    // Validate form fields
    if (!title) {
      return toast.warn("Title cannot be empty");
    } else if (!description) {
      return toast.warn("Description cannot be empty");
    } else if (!tags) {
      return toast.warn("Tags cannot be empty");
    } else if (!priority) {
      return toast.warn("Please select a priority option");
    }

    // Determine whether it's an add or edit operation
    const isNewTask = isAdd || !taskToUpdate;

    // Set id based on the operation
    const id = isNewTask ? crypto.randomUUID() : taskToUpdate.id;

    // Create new task object
    const newTask = {
      id,
      title,
      description,
      tags: tags.split(","),
      priority,
      isFavorite: false,
    };

    // send data to the handle
    handleAdd(newTask, isAdd);

    toast.success(
      isNewTask ? "Task added successfully" : "Task updated successfully"
    );
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 min-h-[1300px] w-full z-10 absolute top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              defaultValue={task?.title}
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              defaultValue={task?.description}
            ></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                defaultValue={task?.tags}
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                defaultValue={task?.priority}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            onClick={handleCloseClick}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isAdd ? "Create new Task" : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Addtask;
