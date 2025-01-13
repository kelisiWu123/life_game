export enum TaskType {
  DAILY = 'daily',
  BREAKTHROUGH = 'breakthrough',
  ACHIEVEMENT = 'achievement',
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export interface Task {
  id: string;
  type: TaskType;
  title: string;
  description: string;
  status: TaskStatus;
  reward: {
    experience: number;
    attributes?: Partial<Attributes>;
  };
  deadline?: Date;
  progress?: {
    current: number;
    total: number;
  };
}
