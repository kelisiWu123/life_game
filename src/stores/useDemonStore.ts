import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Demon, DemonStatus, DemonType } from '@/types/demon';
import { Attributes } from '@/types/cultivation';

interface DemonState {
  demons: Demon[];
  addDemon: (demon: Omit<Demon, 'id'>) => void;
  updateDemonStatus: (id: string, status: DemonStatus) => void;
  updateDemonProgress: (id: string, progress: number) => void;
  removeDemon: (id: string) => void;
  startChallenge: (
    id: string,
    challenge: {
      description: string;
      duration: number;
      reward: {
        experience: number;
        attributes: Partial<Attributes>;
      };
    }
  ) => void;
}

export const useDemonStore = create<DemonState>()(
  persist(
    (set) => ({
      demons: [
        {
          id: '1',
          type: DemonType.SLOTH,
          name: '懒惰之魔',
          description: '总是想着偷懒，无法坚持做事',
          status: DemonStatus.ACTIVE,
        },
        {
          id: '2',
          type: DemonType.ANXIETY,
          name: '焦虑之魔',
          description: '对未来充满担忧，无法专注当下',
          status: DemonStatus.DORMANT,
        },
      ],
      addDemon: (demon) =>
        set((state) => ({
          demons: [...state.demons, { ...demon, id: crypto.randomUUID() }],
        })),
      updateDemonStatus: (id, status) =>
        set((state) => ({
          demons: state.demons.map((demon) => (demon.id === id ? { ...demon, status } : demon)),
        })),
      updateDemonProgress: (id, progress) =>
        set((state) => ({
          demons: state.demons.map((demon) =>
            demon.id === id && demon.challenge
              ? {
                  ...demon,
                  challenge: { ...demon.challenge, progress },
                }
              : demon
          ),
        })),
      removeDemon: (id) =>
        set((state) => ({
          demons: state.demons.filter((demon) => demon.id !== id),
        })),
      startChallenge: (id, challenge) =>
        set((state) => ({
          demons: state.demons.map((demon) =>
            demon.id === id
              ? {
                  ...demon,
                  status: DemonStatus.CHALLENGING,
                  challenge: { ...challenge, progress: 0 },
                }
              : demon
          ),
        })),
    }),
    {
      name: 'demon-storage',
    }
  )
);
