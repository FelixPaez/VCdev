import {TaskInterface} from '../../../core/interfaces/TaskInterface'

export interface TaskFormProps {
    onSubmit: (task: TaskInterface) => void; // Define el tipo de la función onSubmit
  }