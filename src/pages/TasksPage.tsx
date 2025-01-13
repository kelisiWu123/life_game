import { motion } from 'framer-motion';

export default function TasksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 py-6"
    >
      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">日常任务</h2>
        {/* TODO: 添加日常任务列表 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">突破任务</h2>
        {/* TODO: 添加突破任务列表 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">成就任务</h2>
        {/* TODO: 添加成就任务列表 */}
      </section>
    </motion.div>
  );
}
