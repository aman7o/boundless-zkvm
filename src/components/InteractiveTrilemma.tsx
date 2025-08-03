import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

interface TrilemmaValues {
  security: number;
  decentralization: number;
  scalability: number;
}

export const InteractiveTrilemma: React.FC = () => {
  const [values, setValues] = useState<TrilemmaValues>({
    security: 50,
    decentralization: 50,
    scalability: 50,
  });

  const updateValue = (key: keyof TrilemmaValues, value: number) => {
    const newValues = { ...values };
    newValues[key] = value;
    
    // Trilemma constraint: total can't exceed 200
    const total = Object.values(newValues).reduce((sum, val) => sum + val, 0);
    if (total > 200) {
      const excess = total - 200;
      const otherKeys = Object.keys(newValues).filter(k => k !== key) as (keyof TrilemmaValues)[];
      
      otherKeys.forEach(otherKey => {
        const reduction = Math.min(newValues[otherKey], excess / otherKeys.length);
        newValues[otherKey] = Math.max(0, newValues[otherKey] - reduction);
      });
    }
    
    setValues(newValues);
  };

  const getBlockchainExample = () => {
    const { security, decentralization, scalability } = values;
    
    if (security > 70 && decentralization > 70) return "Bitcoin";
    if (scalability > 70 && security > 60) return "Solana";
    if (decentralization > 70 && scalability > 60) return "Ethereum";
    if (scalability > 80) return "Centralized Exchange";
    return "Custom Blockchain";
  };

  const getTrilemmaScore = () => {
    const total = Object.values(values).reduce((sum, val) => sum + val, 0);
    return Math.round((total / 300) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 glass-effect border-primary/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gradient-primary mb-2">
            The Blockchain Trilemma
          </h3>
          <p className="text-muted-foreground">
            Adjust the sliders to see why current blockchains can't optimize for all three properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-primary">Security</label>
              <span className="text-sm text-muted-foreground">{values.security}%</span>
            </div>
            <Slider
              value={[values.security]}
              onValueChange={(value) => updateValue('security', value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Resistance to attacks and consensus integrity
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-secondary">Decentralization</label>
              <span className="text-sm text-muted-foreground">{values.decentralization}%</span>
            </div>
            <Slider
              value={[values.decentralization]}
              onValueChange={(value) => updateValue('decentralization', value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Number of nodes and governance distribution
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-accent">Scalability</label>
              <span className="text-sm text-muted-foreground">{values.scalability}%</span>
            </div>
            <Slider
              value={[values.scalability]}
              onValueChange={(value) => updateValue('scalability', value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Transaction throughput and processing speed
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-muted/50 rounded-lg">
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-1">Your Configuration Resembles:</h4>
            <Badge variant="outline" className="text-lg">
              {getBlockchainExample()}
            </Badge>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-primary">
              {getTrilemmaScore()}%
            </div>
            <p className="text-sm text-muted-foreground">Theoretical Maximum</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-center text-destructive/80">
            ⚠️ Notice how improving one property often requires sacrificing others. 
            This mathematical limitation is why Zero-Knowledge technology is revolutionary.
          </p>
        </div>
      </Card>
    </div>
  );
};