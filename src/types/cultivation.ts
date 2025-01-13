// 修炼境界
export enum RealmLevel {
  MORTAL = '凡人',
  QI_REFINING = '练气',
  FOUNDATION = '筑基',
  GOLDEN_CORE = '金丹',
  NASCENT_SOUL = '元婴',
  ASCENSION = '化神',
}

// 修炼属性
export interface Attributes {
  spirit: number; // 灵力
  body: number; // 体魄
  mind: number; // 神识
  dao: number; // 道韵
}

// 功法
export interface Technique {
  id: string;
  name: string;
  level: number;
  description: string;
  attributes: Partial<Attributes>;
  requirements?: Partial<Attributes>;
}

// 装备
export interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  level: number;
  description: string;
  attributes: Partial<Attributes>;
}

// 修炼状态
export interface CultivationState {
  realm: RealmLevel;
  experience: number;
  nextLevelExperience: number;
  attributes: Attributes;
  techniques: Technique[];
  equipment: Equipment[];
}
