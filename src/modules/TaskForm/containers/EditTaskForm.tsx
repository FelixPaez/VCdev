import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../../core/context/taskContext";
import { TaskInterface } from "../../../core/interfaces/TaskInterface";
import  KeyboardReturnTwoTone from "@mui/icons-material/KeyboardReturnTwoTone";
import Update from "@mui/icons-material/Update";
import "../css/forms.css";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, setTasks } = useContext(TaskContext)!;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("baja");

  useEffect(() => {
    const foundTask = tasks.find((t) => t.id === parseInt(id!, 10));
    if (foundTask) {
      setTitle(foundTask.title);
      setDescription(foundTask.description);
      setDueDate(foundTask.dueDate);
      setPriority(foundTask.priority);
    }
  }, [id, tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: TaskInterface = {
      id: parseInt(id!, 10),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    const updatedTasks: TaskInterface[] = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedTasks);

    navigate("/");
  };

  const handleClickNavigate = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h1 className="title">Editar datos</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>

      <div className="button-form-container">
          <button type="submit" className="task-form-button save">
            <Update style={{ marginRight: "0.5rem" }} />
            Guardar 
          </button>

          <button className="task-form-button back" onClick={handleClickNavigate}>
          <KeyboardReturnTwoTone style={{ }} />            
          </button>
        </div>
    </form>
  );
};

export default EditTask;
