import { motion } from 'framer-motion';

export default function DemonsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 py-6"
    >
      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">当前心魔</h2>
        {/* TODO: 添加当前心魔信息 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">心魔挑战</h2>
        {/* TODO: 添加心魔挑战列表 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">已降服心魔</h2>
        {/* TODO: 添加已降服心魔列表 */}
      </section>
    </motion.div>
  );
}
