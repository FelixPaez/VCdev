import { useState, useContext } from "react";

import { TaskItemProps } from "../interface/TaskItemProps";
import { ButtonsTd } from "../components/buttonsTd";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import ModalEdit from "../../ModalDetail/container/Modal";
import "../css/tableitem.css";

import { ModalContext } from "../../../core/context/modalContext";

const TaskTableItem: React.FC<TaskItemProps> = ({
  task,
  markAsComplete,
  deleteTask,
}) => {
  const { setSelectedElementId } = useContext(ModalContext)!;

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
    <>
      <tr
        key={task.id}
        className={
          isDueSoon && !task.completed
            ? "incomplete-task"
            : task.completed
            ? "complete-task"
            : ""
        }
      >
        <td>
          <a onClick={() => handleOpen(task.id)}>
            <RemoveRedEye className="modal-button" />
          </a>
          <ModalEdit isOpen={isOpen} handleClose={handleClose} />
        </td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.dueDate}</td>
        <td>{task.priority}</td>
        <ButtonsTd
          deleteTask={deleteTask}
          task={task}
          markAsComplete={markAsComplete}
        />
      </tr>
    </>
  );
};

export default TaskTableItem;
