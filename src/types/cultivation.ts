export type RealmLevel = {
  id: number;
  name: string;
  title: string;
  description: string;
  requiredExp: number;
  unlockSkills: string[];
};

export type Attribute = {
  physical: number; // 炼体
  mental: number; // 神识
  spiritual: number; // 灵力
  enlightenment: number; // 悟性
};

export type Equipment = {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  level: number;
  description: string;
  attributes: Partial<Attribute>;
};

export type Technique = {
  id: string;
  name: string;
  description: string;
  level: number;
  type: 'physical' | 'mental' | 'spiritual';
  requirements: Partial<Attribute>;
  effects: Partial<Attribute>;
};

export type Skill = {
  id: string;
  name: string;
  description: string;
  level: number;
  type: 'active' | 'passive';
  cooldown?: number;
  effects: Partial<Attribute>;
};

export type CultivationState = {
  currentRealm: number;
  experience: number;
  attributes: Attribute;
  equipment: Equipment[];
  techniques: Technique[];
  skills: Skill[];
  activeSkills: string[];
};
