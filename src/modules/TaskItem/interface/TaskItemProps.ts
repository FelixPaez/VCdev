import {TaskInterface} from '../../../core/interfaces/TaskInterface'

export interface TaskItemProps {
    task: TaskInterface;
    markAsComplete: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
  }
  