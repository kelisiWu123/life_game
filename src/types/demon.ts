export enum DemonType {
  SLOTH = 'sloth', // 懒惰
  ANXIETY = 'anxiety', // 焦虑
  ANGER = 'anger', // 嗔怒
  GREED = 'greed', // 贪婪
  PRIDE = 'pride', // 傲慢
}

export enum DemonStatus {
  DORMANT = 'dormant', // 潜伏
  ACTIVE = 'active', // 活跃
  CHALLENGING = 'challenging', // 挑战中
  CONQUERED = 'conquered', // 已降服
}

export interface Demon {
  id: string;
  type: DemonType;
  name: string;
  description: string;
  status: DemonStatus;
  challenge?: {
    description: string;
    duration: number; // 以天为单位
    progress: number;
    reward: {
      experience: number;
      attributes: Partial<Attributes>;
    };
  };
}
