import { actionTypes } from "./action-types";

export const loadTasks = (tasks) => ({
  type: actionTypes.loadTasks,
  payload: tasks,
});

export const createTask = (task) => ({
  type: actionTypes.createTask,
  payload: task,
});
export const removeTask = (task) => ({
  type: actionTypes.removeTask,
  payload: task,
});

export const updateTask = (task) => ({
  type: actionTypes.updateTask,
  payload: task,
});
