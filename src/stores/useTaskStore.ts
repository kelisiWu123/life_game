import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStatus, TaskType } from '../types/task';

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (id: string, status: TaskStatus) => void;
  updateTaskProgress: (id: string, progress: number) => void;
  removeTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: crypto.randomUUID() }],
        })),
      updateTaskStatus: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id ? { ...task, status } : task)),
        })),
      updateTaskProgress: (id, progress) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id && task.progress
              ? { ...task, progress: { ...task.progress, current: progress } }
              : task
          ),
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: 'task-storage',
    }
  )
);
