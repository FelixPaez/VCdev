import {TaskInterface} from '../interfaces/TaskInterface'

export interface TaskContextInterface {
    tasks: TaskInterface[];
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
  }