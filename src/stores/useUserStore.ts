import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CultivationState, RealmLevel, Attributes } from '../types/cultivation';

interface UserState {
  name: string;
  avatar?: string;
  cultivation: CultivationState;
  setName: (name: string) => void;
  setAvatar: (avatar: string) => void;
  updateAttributes: (attributes: Partial<Attributes>) => void;
  gainExperience: (amount: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: '无名修士',
      cultivation: {
        realm: RealmLevel.MORTAL,
        experience: 0,
        nextLevelExperience: 1000,
        attributes: {
          spirit: 10,
          body: 10,
          mind: 10,
          dao: 0,
        },
        techniques: [],
        equipment: [],
      },
      setName: (name) => set({ name }),
      setAvatar: (avatar) => set({ avatar }),
      updateAttributes: (attributes) =>
        set((state) => ({
          cultivation: {
            ...state.cultivation,
            attributes: {
              ...state.cultivation.attributes,
              ...attributes,
            },
          },
        })),
      gainExperience: (amount) =>
        set((state) => {
          const newExperience = state.cultivation.experience + amount;
          // TODO: 处理升级逻辑
          return {
            cultivation: {
              ...state.cultivation,
              experience: newExperience,
            },
          };
        }),
    }),
    {
      name: 'user-storage',
    }
  )
);
