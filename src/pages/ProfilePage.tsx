import { motion } from 'framer-motion';

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 py-6"
    >
      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">基本信息</h2>
        {/* TODO: 添加用户基本信息 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">修炼统计</h2>
        {/* TODO: 添加修炼数据统计 */}
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium">设置</h2>
        {/* TODO: 添加设置选项 */}
      </section>
    </motion.div>
  );
}
