import { useDemonStore } from '@/stores/useDemonStore';
import { DemonStatus } from '@/types/demon';

export default function DemonOverview() {
  const demons = useDemonStore((state) => state.demons);
  const activeDemons = demons.filter((demon) => demon.status === DemonStatus.ACTIVE);
  const challengingDemons = demons.filter((demon) => demon.status === DemonStatus.CHALLENGING);

  return (
    <div className="space-y-4">
      {activeDemons.length === 0 && challengingDemons.length === 0 ? (
        <p className="text-center text-slate-500">暂无活跃心魔</p>
      ) : (
        <div className="space-y-4">
          {activeDemons.map((demon) => (
            <div key={demon.id} className="rounded-lg border border-red-200 bg-red-50 p-3">
              <h4 className="font-medium text-red-900">{demon.name}</h4>
              <p className="text-sm text-red-700">{demon.description}</p>
            </div>
          ))}
          {challengingDemons.map((demon) => (
            <div key={demon.id} className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <h4 className="font-medium text-amber-900">{demon.name}</h4>
              <p className="text-sm text-amber-700">挑战进度: {demon.challenge?.progress || 0}天</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
