import { RouterProvider } from "react-router-dom";
import router from "./core/router/routes";
import { TaskProvider } from "./core/context/taskContext";
import { ModalProvider } from "./core/context/modalContext";
const App = () => {
  return (
    <TaskProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </TaskProvider>
  );
};

export default App;
