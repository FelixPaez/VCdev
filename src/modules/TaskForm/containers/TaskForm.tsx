import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import SaveIcon from "@mui/icons-material/Save";
import  KeyboardReturnTwoTone from "@mui/icons-material/KeyboardReturnTwoTone";
import { TaskInterface } from "../../../core/interfaces/TaskInterface";
import { TaskContext } from "../../../core/context/taskContext";
import "../css/forms.css";


const TaskForm = () => {
  const context = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("baja");

  if (!context) {
    return <div>Error: El contexto no está disponible.</div>;
  }

  const { tasks, setTasks } = context;

  const addTask = (newTask: TaskInterface) => {
    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("baja");
    navigate("/");
  };

  const handleClickNavigate = () => {
    navigate("/");
  };

  return (
    
     
      <form onSubmit={handleSubmit} className="task-form">
      <h1 className="title">Insertar datos</h1>
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
            <SaveIcon style={{ marginRight: "0.5rem" }} />
            Guardar 
          </button>

          <button className="task-form-button back" onClick={handleClickNavigate}>
          <KeyboardReturnTwoTone style={{ }} />            
          </button>
        </div>
      </form>
   
  );
};

export default TaskForm;
