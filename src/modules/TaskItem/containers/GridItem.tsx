import { useState, useContext } from "react";

import { TaskItemProps } from "../interface/TaskItemProps";
import { ButtonsDiv } from "../components/buttonsDiv";
import ModalEdit from "../../ModalDetail/container/Modal";
import { ModalContext } from "../../../core/context/modalContext";

import "../css/griditem.css";

const TaskGridItem: React.FC<TaskItemProps> = ({
  task,
  markAsComplete,
  deleteTask,
}) => {
  const { setSelectedElementId } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (id: number) => {
    setSelectedElementId(id);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedElementId(null);
    setIsOpen(false);
  };

  const dueDate = new Date(task.dueDate);
  const isDueSoon =
    dueDate.getTime() - new Date().getTime() < 24 * 60 * 60 * 1000;

  return (
    <article
      className={`task-card ${
        isDueSoon && !task.completed
          ? "incompletegrid-task"
          : task.completed
          ? "completegrid-task"
          : ""
      }`}
    >
      <header className="modal-content-button">
        <a onClick={() => handleOpen(task.id)} style={{cursor:"pointer"}}>
          <strong className="title-grid">{task.title}</strong>
        </a>
        <ModalEdit isOpen={isOpen} handleClose={handleClose} />
      </header>
      <footer>
        <p>{`Descripción: ${task.description}`}</p>
        <p>{`Fecha Límite: ${task.dueDate} - Prioridad: ${task.priority}`}</p>

        <ButtonsDiv
          deleteTask={deleteTask}
          task={task}
          markAsComplete={markAsComplete}
        />
      </footer>
    </article>
  );
};

export default TaskGridItem;
