import { useUserStore } from '@/stores/useUserStore';
import { Progress } from '@/components/ui/Progress';

export default function CultivationOverview() {
  const { cultivation } = useUserStore();
  const { realm, experience, nextLevelExperience, attributes } = cultivation;

  const progress = (experience / nextLevelExperience) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-500">当前境界</h3>
          <p className="text-xl font-semibold text-slate-900">{realm}</p>
        </div>
        <div className="text-right">
          <h3 className="text-sm font-medium text-slate-500">修为进度</h3>
          <p className="text-xl font-semibold text-slate-900">
            {experience} / {nextLevelExperience}
          </p>
        </div>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className="rounded-lg bg-slate-50 p-3">
            <h4 className="text-sm font-medium text-slate-500">{getAttributeLabel(key)}</h4>
            <p className="text-lg font-semibold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getAttributeLabel(key: string): string {
  const labels: Record<string, string> = {
    spirit: '灵力',
    body: '体魄',
    mind: '神识',
    dao: '道韵',
  };
  return labels[key] || key;
}
