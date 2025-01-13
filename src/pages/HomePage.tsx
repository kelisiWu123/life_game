import { motion } from 'framer-motion';
import CultivationOverview from '@/components/features/CultivationOverview';
import TaskOverview from '@/components/features/TaskOverview';
import DemonOverview from '@/components/features/DemonOverview';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 py-6"
    >
      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">修炼概览</h2>
        <CultivationOverview />
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">今日任务</h2>
        <TaskOverview />
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">心魔状态</h2>
        <DemonOverview />
      </section>
    </motion.div>
  );
}
