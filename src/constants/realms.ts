import { RealmLevel } from '@/types/cultivation';

export const REALM_LEVELS: RealmLevel[] = [
  {
    id: 0,
    name: 'mortal',
    title: '凡人',
    description: '未入修仙之道，一切从零开始。',
    requiredExp: 0,
    unlockSkills: ['basic_meditation'],
  },
  {
    id: 1,
    name: 'qi_condensation',
    title: '练气期',
    description: '开始感知天地灵气，凝聚体内灵力。',
    requiredExp: 100,
    unlockSkills: ['qi_gathering', 'basic_cultivation'],
  },
  {
    id: 2,
    name: 'foundation_establishment',
    title: '筑基期',
    description: '筑下修仙基础，体内经脉初步贯通。',
    requiredExp: 500,
    unlockSkills: ['foundation_reinforcement', 'meridian_cultivation'],
  },
  {
    id: 3,
    name: 'core_formation',
    title: '金丹期',
    description: '凝结金丹，灵力质变，寿元大增。',
    requiredExp: 2000,
    unlockSkills: ['golden_core_cultivation', 'essence_absorption'],
  },
  {
    id: 4,
    name: 'nascent_soul',
    title: '元婴期',
    description: '元婴出窍，神识扩张，法力大增。',
    requiredExp: 8000,
    unlockSkills: ['soul_projection', 'spiritual_sense'],
  },
  {
    id: 5,
    name: 'soul_formation',
    title: '化神期',
    description: '元神初成，超凡入圣。',
    requiredExp: 20000,
    unlockSkills: ['divine_sense', 'law_comprehension'],
  },
];

export const getRealmInfo = (realmId: number): RealmLevel => {
  return REALM_LEVELS[realmId];
};

export const getNextRealmInfo = (realmId: number): RealmLevel | null => {
  return realmId < REALM_LEVELS.length - 1 ? REALM_LEVELS[realmId + 1] : null;
};

export const calculateExpProgress = (currentExp: number, currentRealm: number): number => {
  const currentRealmInfo = getRealmInfo(currentRealm);
  const nextRealmInfo = getNextRealmInfo(currentRealm);

  if (!nextRealmInfo) return 100;

  const expNeeded = nextRealmInfo.requiredExp - currentRealmInfo.requiredExp;
  const expGained = currentExp - currentRealmInfo.requiredExp;

  return Math.min(Math.floor((expGained / expNeeded) * 100), 100);
};
