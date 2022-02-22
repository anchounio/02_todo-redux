import "./todo.css";
import { Add } from "./add";
import { Task } from "./task";

export function ToDo() {
  const tasks = [];

  /* const aTasks = tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
    }); */
  return (
    <>
      <Add />
      {tasks.length ? <h2>Lista de tareas</h2> : ""}
      <ul className="task-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}
