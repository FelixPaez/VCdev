import { TaskItemProps } from "../interface/TaskItemProps";
import { useNavigate } from "react-router-dom";
import DeleteForever from "@mui/icons-material/DeleteForever";
import EditNote from "@mui/icons-material/EditNote";
import CheckBoxRounded from "@mui/icons-material/CheckBoxRounded";
import "../css/buttons.css";
export const ButtonsDiv: React.FC<TaskItemProps> = ({
  deleteTask,
  markAsComplete,
  task,
}) => {
  const navigate = useNavigate();

  const handleEditNavigate = () => {
    navigate(`/edit/${task.id}`);
  };
  return (
    <div className="button-container">
      {!task.completed && (
        <button className="task-button complete" title="Completar" onClick={() => markAsComplete(task.id)}>
          <CheckBoxRounded style={{}} />
        </button>
      )}

      <button className="task-button delete" title="Eliminar" onClick={() => deleteTask(task.id)}>
        <DeleteForever style={{}} />
      </button>

      <button className="task-button edit" title="Editar" onClick={handleEditNavigate}>
        {" "}
        <EditNote style={{}} />
      </button>
    </div>
  );
};
