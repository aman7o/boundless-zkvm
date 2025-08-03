import React from 'react';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  suffix = '',
  prefix = '',
  description,
  trend = 'neutral',
  delay = 0,
  className = '',
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-accent';
      case 'down': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  return (
    <Card className={`p-6 glass-effect border-primary/20 hover-glow group ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      
      <div className="space-y-2">
        <div className={`text-3xl font-bold ${getTrendColor()}`}>
          <AnimatedCounter
            end={value}
            prefix={prefix}
            suffix={suffix}
            duration={1500 + delay}
          />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};