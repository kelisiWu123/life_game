import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CultivationState, Attribute, Equipment, Technique, Skill } from '@/types/cultivation';
import { REALM_LEVELS, getRealmInfo, getNextRealmInfo } from '@/constants/realms';

interface CultivationStore extends CultivationState {
  gainExperience: (amount: number) => void;
  equipItem: (item: Equipment) => void;
  unequipItem: (itemId: string) => void;
  learnTechnique: (technique: Technique) => void;
  upgradeTechnique: (techniqueId: string) => void;
  learnSkill: (skill: Skill) => void;
  upgradeSkill: (skillId: string) => void;
  setActiveSkills: (skillIds: string[]) => void;
}

const INITIAL_STATE: CultivationState = {
  currentRealm: 0,
  experience: 0,
  attributes: {
    physical: 10,
    mental: 10,
    spiritual: 10,
    enlightenment: 10,
  },
  equipment: [],
  techniques: [],
  skills: [],
  activeSkills: [],
};

export const useCultivationStore = create<CultivationStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      gainExperience: (amount: number) => {
        set((state) => {
          const newExp = state.experience + amount;
          const nextRealm = getNextRealmInfo(state.currentRealm);

          if (nextRealm && newExp >= nextRealm.requiredExp) {
            return {
              experience: newExp,
              currentRealm: state.currentRealm + 1,
            };
          }

          return { experience: newExp };
        });
      },

      equipItem: (item: Equipment) => {
        set((state) => ({
          equipment: [...state.equipment, item],
        }));
      },

      unequipItem: (itemId: string) => {
        set((state) => ({
          equipment: state.equipment.filter((item) => item.id !== itemId),
        }));
      },

      learnTechnique: (technique: Technique) => {
        set((state) => ({
          techniques: [...state.techniques, technique],
        }));
      },

      upgradeTechnique: (techniqueId: string) => {
        set((state) => ({
          techniques: state.techniques.map((technique) =>
            technique.id === techniqueId ? { ...technique, level: technique.level + 1 } : technique
          ),
        }));
      },

      learnSkill: (skill: Skill) => {
        set((state) => ({
          skills: [...state.skills, skill],
        }));
      },

      upgradeSkill: (skillId: string) => {
        set((state) => ({
          skills: state.skills.map((skill) =>
            skill.id === skillId ? { ...skill, level: skill.level + 1 } : skill
          ),
        }));
      },

      setActiveSkills: (skillIds: string[]) => {
        set({ activeSkills: skillIds });
      },
    }),
    {
      name: 'cultivation-storage',
    }
  )
);
