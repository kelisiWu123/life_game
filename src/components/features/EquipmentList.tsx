import React from 'react';
import { useCultivationStore } from '@/stores/cultivation';
import { Equipment } from '@/types/cultivation';

const RARITY_COLORS = {
  common: 'text-gray-500',
  uncommon: 'text-green-500',
  rare: 'text-blue-500',
  epic: 'text-purple-500',
  legendary: 'text-yellow-500',
};

export const EquipmentList: React.FC = () => {
  const { equipment, unequipItem } = useCultivationStore();

  const handleUnequip = (itemId: string) => {
    unequipItem(itemId);
  };

  const renderEquipment = (item: Equipment) => {
    return (
      <div
        key={item.id}
        className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
      >
        <div className="flex items-center justify-between">
          <h3 className={`font-medium ${RARITY_COLORS[item.rarity]}`}>
            {item.name}
            <span className="ml-2 text-sm text-gray-500">Lv.{item.level}</span>
          </h3>
          <button onClick={() => handleUnequip(item.id)} className="btn btn-secondary">
            卸下
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(item.attributes).map(([key, value]) => (
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
            {item.type === 'weapon' && '法器'}
            {item.type === 'armor' && '法衣'}
            {item.type === 'accessory' && '法宝'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">装备</h2>
      </div>

      <div className="grid gap-4">
        {equipment.length > 0 ? (
          equipment.map(renderEquipment)
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">未装备任何法器</p>
        )}
      </div>
    </div>
  );
};
