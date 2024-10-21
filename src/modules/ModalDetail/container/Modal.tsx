import { useContext, useEffect, useState } from "react";
import { Modal, Box, Typography, Fade } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { EditModal } from "../interfaces/EditModalInterface";

import { ModalContext } from "../../../core/context/modalContext";
import { TaskContext } from "../../../core/context/taskContext";
import "../css/modal.css";

const ModalEdit: React.FC<EditModal> = ({ isOpen, handleClose }) => {
  const { tasks } = useContext(TaskContext)!;
  const { selectedElementId } = useContext(ModalContext)!;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("baja");
  const [completed, setCompleted] = useState(Boolean);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,  
  };

  useEffect(() => {
    if (selectedElementId !== null) {
      const foundTask = tasks.find(
        (t) => t.id === parseInt(selectedElementId.toString()!, 10)
      );
      if (foundTask) {
        setTitle(foundTask.title);
        setDescription(foundTask.description);
        setDueDate(foundTask.dueDate);
        setPriority(foundTask.priority);
        setCompleted(foundTask.completed);
      }
    }
  }, [selectedElementId, tasks]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              component="h2"
              sx={{ textAlign: "center", wordWrap: "break-word" }}
            >
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 , wordWrap: "break-word"}}>
              {description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {dueDate}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {priority}
            </Typography>
            {completed ? (
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Completado
              </Typography>
            ) : (
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Pendiente
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalEdit;
