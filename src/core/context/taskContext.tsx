
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {TaskInterface} from '../interfaces/TaskInterface'
import {TaskContextInterface} from '../interfaces/TaskContextInterface'


export const TaskContext = createContext<TaskContextInterface | undefined>(undefined);


export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
 
  const [tasks, setTasks] = useState<TaskInterface[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};


