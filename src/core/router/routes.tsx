import { createBrowserRouter, Navigate } from "react-router-dom";

import Container from "../components/container";
import TaskForm from "../../modules/TaskForm/containers/TaskForm";
import EditTaskForm from "../../modules/TaskForm/containers/EditTaskForm";
import TaskList from '../../modules/TaskList/containers/TaskList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "add",
        element: <TaskForm />,
      },
      {
        path: "edit/:id",
        element: <EditTaskForm />,
      },
      {
        path: "/", 
        element: <TaskList />, 
      },
      {
        path: "*", 
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
