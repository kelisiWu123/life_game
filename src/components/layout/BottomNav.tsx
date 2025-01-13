import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, ListTodoIcon, UserIcon, GhostIcon } from 'lucide-react';

const navItems = [
  { path: '/', icon: HomeIcon, label: '首页' },
  { path: '/cultivation', icon: BookOpenIcon, label: '修炼' },
  { path: '/tasks', icon: ListTodoIcon, label: '任务' },
  { path: '/demons', icon: GhostIcon, label: '心魔' },
  { path: '/profile', icon: UserIcon, label: '我的' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-around">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center space-y-1 ${
                  isActive ? 'text-primary-600' : 'text-slate-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
