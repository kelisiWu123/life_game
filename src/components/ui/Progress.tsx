import * as React from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className = '', ...props }: ProgressProps) {
  return (
    <div
      className={`relative h-2 w-full overflow-hidden rounded-full bg-slate-100 ${className}`}
      {...props}
    >
      <div
        className="h-full bg-primary-600 transition-all duration-300"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}
