import { ReactNode } from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <TopNav />
      <main className="container mx-auto flex-1 px-4 pb-16">{children}</main>
      <BottomNav />
    </div>
  );
}
