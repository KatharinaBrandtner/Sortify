import { createContext, ReactNode, useContext, useState } from "react";
import { initialTasks } from "../data/taskDummyData";

export type Task = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  createdAt: string;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string, category: string) => void;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string, category: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const toggleTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }

  return context;
}