export default function taskReducer(tasks, action) {
  switch (action.type) {
    // add
    case "addTask":
      return [...tasks, action.newTask];
    // update
    case "updateTask":
      return tasks.map((task) =>
        task.id === action.newTask.id ? action.newTask : task
      );
    // make fav
    case "isFav": {
      const taskIndex = tasks.findIndex((task) => task.id === action.task.id);
      const newTaskArray = [...tasks];
      const modifiedTask = {
        ...newTaskArray[taskIndex],
        isFavorite: !newTaskArray[taskIndex].isFavorite,
      };
      newTaskArray[taskIndex] = modifiedTask;
      return newTaskArray;
    }
    // delete single task
    case "singleDelete":
      return tasks.filter((item) => item.id !== action.task.id);

    // delete all
    case "deleteAllTasks":
      return [];

    // search
    case "filterTasks":
      return action.filteredTasks;

    default:
      throw new Error(`No action matched with ${action.type}`);
  }
}
