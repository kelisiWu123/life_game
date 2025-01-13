import React from 'react';
import { CultivationPanel } from '@/components/features/CultivationPanel';
import { TechniqueList } from '@/components/features/TechniqueList';
import { EquipmentList } from '@/components/features/EquipmentList';
import { SkillList } from '@/components/features/SkillList';

export const CultivationPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-8">
        {/* 修炼境界面板 */}
        <section>
          <CultivationPanel />
        </section>

        {/* 功法列表 */}
        <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <TechniqueList />
        </section>

        {/* 装备列表 */}
        <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <EquipmentList />
        </section>

        {/* 技能列表 */}
        <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <SkillList />
        </section>
      </div>
    </div>
  );
};
