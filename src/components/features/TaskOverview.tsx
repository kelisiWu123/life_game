import { useTaskStore } from '@/stores/useTaskStore';
import { TaskStatus, TaskType } from '@/types/task';

export default function TaskOverview() {
  const tasks = useTaskStore((state) => state.tasks);
  const todayTasks = tasks.filter((task) => {
    if (task.type !== TaskType.DAILY) return false;
    if (task.status === TaskStatus.COMPLETED || task.status === TaskStatus.FAILED) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {todayTasks.length === 0 ? (
        <p className="text-center text-slate-500">今日暂无待完成任务</p>
      ) : (
        <ul className="space-y-2">
          {todayTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div>
                <h4 className="font-medium text-slate-900">{task.title}</h4>
                <p className="text-sm text-slate-500">{task.description}</p>
              </div>
              {task.progress && (
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">
                    {task.progress.current} / {task.progress.total}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
