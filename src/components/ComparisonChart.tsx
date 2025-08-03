import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChartData {
  name: string;
  value: number;
  maxValue: number;
  color: string;
  description: string;
}

interface ComparisonChartProps {
  title: string;
  data: ChartData[];
  unit: string;
  className?: string;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({
  title,
  data,
  unit,
  className = '',
}) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <Card className={`p-6 glass-effect border-primary/20 ${className}`}>
      <h3 className="text-xl font-bold text-gradient-primary mb-6">{title}</h3>
      
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge 
                  variant="outline" 
                  className="min-w-[80px] justify-center"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  {item.name}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {item.description}
                </span>
              </div>
              <span className="text-lg font-bold" style={{ color: item.color }}>
                {item.value.toLocaleString()}{unit}
              </span>
            </div>
            
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: item.color,
                  width: animated ? `${(item.value / maxValue) * 100}%` : '0%',
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full animate-glow-pulse"
                style={{
                  backgroundColor: item.color,
                  width: animated ? `${(item.value / maxValue) * 100}%` : '0%',
                  opacity: 0.3,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <p className="text-xs text-muted-foreground text-center">
          Chart shows relative performance comparison. Higher values indicate better performance in this metric.
        </p>
      </div>
    </Card>
  );
};