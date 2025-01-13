import { useLocation } from 'react-router-dom';

const pageTitle: Record<string, string> = {
  '/': '修仙首页',
  '/cultivation': '修炼',
  '/tasks': '任务',
  '/profile': '道君信息',
  '/demons': '心魔',
};

export default function TopNav() {
  const location = useLocation();
  const title = pageTitle[location.pathname] || '修仙';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-center">
          <h1 className="text-lg font-medium text-slate-900">{title}</h1>
        </div>
      </div>
    </header>
  );
}
