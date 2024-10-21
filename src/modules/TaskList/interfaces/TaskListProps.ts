import {TaskInterface} from '../../../core/interfaces/TaskInterface'

export interface TaskListProps {
    tasks: TaskInterface[];
    filter: "all" | "completed" | "pending";
    markAsComplete: (taskId: number) => void;
    deleteTask: (id: number) => void;
    isListView: boolean; // Prop para determinar la vista
  }