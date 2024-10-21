import { useState, useContext } from "react";
import { TaskContext } from "../../../core/context/taskContext";
import { useNavigate } from "react-router-dom";

import TopTable from "../components/toptable";
import Checkbox from "../components/checkbox";
import Filter from "../components/filter";

import TaskGridItem from "../../TaskItem/containers/GridItem";
import TaskTableItem from "../../TaskItem/containers/TableItem";
import InsertInvitation from "@mui/icons-material/InsertInvitation";

import "../css/tasklist.css";

const TaskList = () => {
  const { tasks, setTasks } = useContext(TaskContext)!;
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [isListView, setIsListView] = useState(false);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleClickNavigate = () => {
    navigate("/add");
  };

  return (
    <>
      <div className="task-view">
        <TopTable totalTasks={totalTasks} completedTasks={completedTasks} />

        <div className="task-functions">
          <div className="elements">
            <Checkbox isListView={isListView} setIsListView={setIsListView} />
            <Filter filter={filter} setFilter={setFilter} />
          </div>

          <button className="task-title-button" onClick={handleClickNavigate}>
            <InsertInvitation style={{ marginRight: "0.5rem" }} />
            Insertar Tarea
          </button>
        </div>

        <div
          className={`tasks-container ${
            isListView ? "grid-view" : "list-view"
          }`}
        >
          {isListView ? (
            filteredTasks.map((task) => (
              <TaskGridItem
                key={task.id}
                task={task}
                markAsComplete={markAsComplete}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Ver</th>
                  <th>Tarea</th>
                  <th>Descripción</th>
                  <th>Fecha Límite</th>
                  <th>Prioridad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <TaskTableItem
                    key={task.id}
                    task={task}
                    markAsComplete={markAsComplete}
                    deleteTask={deleteTask}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <hr className='spacer' />
      </div>
    </>
  );
};

export default TaskList;
