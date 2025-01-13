import React from 'react';
import { useCultivationStore } from '@/stores/cultivation';
import { Technique } from '@/types/cultivation';

export const TechniqueList: React.FC = () => {
  const { techniques, upgradeTechnique } = useCultivationStore();

  const handleUpgrade = (techniqueId: string) => {
    upgradeTechnique(techniqueId);
  };

  const renderTechnique = (technique: Technique) => {
    return (
      <div
        key={technique.id}
        className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-white">
            {technique.name}
            <span className="ml-2 text-sm text-gray-500">Lv.{technique.level}</span>
          </h3>
          <button onClick={() => handleUpgrade(technique.id)} className="btn btn-secondary">
            升级
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{technique.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(technique.effects).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400">
                {key === 'physical' && '炼体'}
                {key === 'mental' && '神识'}
                {key === 'spiritual' && '灵力'}
                {key === 'enlightenment' && '悟性'}
              </span>
              <span className="font-medium text-primary-600">+{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">功法</h2>
      </div>

      <div className="grid gap-4">
        {techniques.length > 0 ? (
          techniques.map(renderTechnique)
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">尚未习得任何功法</p>
        )}
      </div>
    </div>
  );
};
