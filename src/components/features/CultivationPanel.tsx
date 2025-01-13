import React from 'react';
import { useCultivationStore } from '@/stores/cultivation';
import { calculateExpProgress, getRealmInfo, getNextRealmInfo } from '@/constants/realms';

export const CultivationPanel: React.FC = () => {
  const { currentRealm, experience, attributes } = useCultivationStore();

  const currentRealmInfo = getRealmInfo(currentRealm);
  const nextRealmInfo = getNextRealmInfo(currentRealm);
  const progress = calculateExpProgress(experience, currentRealm);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <div className="space-y-6">
        {/* 境界信息 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentRealmInfo.title}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {currentRealmInfo.description}
          </p>
        </div>

        {/* 经验进度 */}
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">修为进度</span>
            <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-primary-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {nextRealmInfo && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              距离 {nextRealmInfo.title} 还需 {nextRealmInfo.requiredExp - experience} 点修为
            </p>
          )}
        </div>

        {/* 属性面板 */}
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">修炼属性</h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">炼体</span>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {attributes.physical}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">神识</span>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {attributes.mental}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">灵力</span>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {attributes.spiritual}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">悟性</span>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {attributes.enlightenment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
