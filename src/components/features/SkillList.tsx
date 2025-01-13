import React from 'react';
import { useCultivationStore } from '@/stores/cultivation';
import { Skill } from '@/types/cultivation';

export const SkillList: React.FC = () => {
  const { skills, upgradeSkill, activeSkills, setActiveSkills } = useCultivationStore();

  const handleUpgrade = (skillId: string) => {
    upgradeSkill(skillId);
  };

  const handleToggleActive = (skillId: string) => {
    const isActive = activeSkills.includes(skillId);
    if (isActive) {
      setActiveSkills(activeSkills.filter((id) => id !== skillId));
    } else {
      if (activeSkills.length < 4) {
        setActiveSkills([...activeSkills, skillId]);
      }
    }
  };

  const renderSkill = (skill: Skill) => {
    const isActive = activeSkills.includes(skill.id);

    return (
      <div
        key={skill.id}
        className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-white">
            {skill.name}
            <span className="ml-2 text-sm text-gray-500">Lv.{skill.level}</span>
          </h3>
          <div className="flex items-center space-x-2">
            <button onClick={() => handleUpgrade(skill.id)} className="btn btn-secondary">
              升级
            </button>
            <button
              onClick={() => handleToggleActive(skill.id)}
              className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
              disabled={!isActive && activeSkills.length >= 4}
            >
              {isActive ? '已装备' : '装备'}
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(skill.effects).map(([key, value]) => (
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

        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">类型:</span>
          <span className="capitalize text-gray-900 dark:text-white">
            {skill.type === 'active' ? '主动技能' : '被动技能'}
          </span>
          {skill.cooldown && (
            <>
              <span className="text-gray-500 dark:text-gray-400">冷却时间:</span>
              <span className="text-gray-900 dark:text-white">{skill.cooldown}秒</span>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">技能</h2>
        <span className="text-sm text-gray-500">已装备 {activeSkills.length}/4</span>
      </div>

      <div className="grid gap-4">
        {skills.length > 0 ? (
          skills.map(renderSkill)
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">尚未习得任何技能</p>
        )}
      </div>
    </div>
  );
};
