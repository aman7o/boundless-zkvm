import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Shield, 
  Network, 
  Brain,
  Rocket,
  Target,
  Globe,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Triangle,
  Lock,
  Cpu,
  BarChart3
} from 'lucide-react';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import { InteractiveTrilemma } from '@/components/InteractiveTrilemma';
import { QuizSection } from '@/components/QuizSection';
import { StatCard } from '@/components/StatCard';
import { ComparisonChart } from '@/components/ComparisonChart';

// Import generated images
import blockchainCrisisHero from '@/assets/blockchain-crisis-hero.jpg';
import trilemmaDiagram from '@/assets/trilemma-diagram.jpg';
import zkBreakthrough from '@/assets/zk-breakthrough.jpg';
import boundlessNetwork from '@/assets/boundless-network.jpg';

const BoundlessEducation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'crisis', title: 'The Blockchain Crisis', icon: TrendingDown },
    { id: 'trilemma', title: 'The Impossible Triangle', icon: Triangle },
    { id: 'zk-breakthrough', title: 'The ZK Breakthrough', icon: Brain },
    { id: 'boundless', title: 'Boundless Solution', icon: Rocket },
    { id: 'future', title: 'The Inevitable Future', icon: Target }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Quiz data
  const trilemmaQuizQuestions = [
    {
      id: 'q1',
      question: 'According to the blockchain trilemma, what is the maximum number of properties a traditional blockchain can optimize for simultaneously?',
      options: ['One', 'Two', 'Three', 'All three are always possible'],
      correctAnswer: 1,
      explanation: 'The trilemma states that traditional blockchains can only optimize for two of the three properties (security, decentralization, scalability) at once.'
    },
    {
      id: 'q2',
      question: 'Which blockchain prioritized security and decentralization over scalability?',
      options: ['Solana', 'Bitcoin', 'Polygon', 'Avalanche'],
      correctAnswer: 1,
      explanation: 'Bitcoin chose to prioritize security and decentralization, resulting in only 7 transactions per second but maximum security.'
    },
    {
      id: 'q3',
      question: 'What happens when Ethereum experiences high demand?',
      options: ['Fees decrease', 'Speed increases', 'Fees spike to $50+ per transaction', 'Nothing changes'],
      correctAnswer: 2,
      explanation: 'During peak demand, Ethereum gas fees can spike to $50+ per transaction, making it accessible only to wealthy users.'
    }
  ];

  const zkQuizQuestions = [
    {
      id: 'zk1',
      question: 'What do Zero-Knowledge Proofs allow you to prove?',
      options: ['You know something without revealing what you know', 'You have money without showing your balance', 'You completed a computation without showing the steps', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Zero-Knowledge Proofs enable proving knowledge, ownership, or computation completion without revealing the underlying information.'
    },
    {
      id: 'zk2',
      question: 'What makes zkVMs revolutionary for blockchain development?',
      options: ['They require PhD-level cryptography knowledge', 'Developers can write in familiar languages like Rust', 'They only work on one blockchain', 'They are slower than traditional methods'],
      correctAnswer: 1,
      explanation: 'zkVMs democratize ZK technology by allowing developers to write programs in familiar languages and automatically generate proofs.'
    },
    {
      id: 'zk3',
      question: 'When did the zkVM revolution begin?',
      options: ['1985', '2016', '2021', '2024'],
      correctAnswer: 3,
      explanation: '2024 marked the zkVM revolution when general-purpose ZK computing became accessible to all developers.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gradient-primary">
              Boundless Educational Guide
            </h1>
            <div className="hidden md:flex items-center gap-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm px-3 py-2 rounded-lg transition-all hover:bg-primary/10 ${
                    activeSection === index ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 holographic-bg opacity-20" />
        
        <div className="relative z-10 container-custom text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            Educational Guide
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-primary">The ZK Revolution</span>
            <br />
            <span className="text-foreground">Is Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn how Zero-Knowledge technology and Boundless are solving blockchain's $10 trillion scalability crisis
          </p>
          <Button 
            onClick={() => scrollToSection('crisis')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 glow-primary"
          >
            Begin Your Journey
            <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Section 1: The Blockchain Crisis */}
      <section id="crisis" className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-destructive/20 text-destructive border-destructive/30">
              Section 1: The Crisis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient-primary">$10 Trillion</span> Problem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why blockchain can't scale and what it means for the future of Web3
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={blockchainCrisisHero} 
                alt="Blockchain Crisis Visualization" 
                className="rounded-2xl shadow-primary w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Harsh Reality</h3>
              <p className="text-muted-foreground">
                Despite 15 years of development, blockchain networks process fewer transactions 
                than a single Visa datacenter from 1995. When a simple token swap costs $25 in 
                fees and takes 10 minutes to confirm, we're not competing with traditional 
                finance—we're actively pushing users away.
              </p>
              <p className="text-muted-foreground">
                The numbers tell a stark story. Ethereum, the world's most advanced smart contract 
                platform, processes 15 transactions per second. During peak demand, fees spike to 
                $50+ per transaction, making DeFi accessible only to wealthy users.
              </p>
            </div>
          </div>

          {/* Crisis Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard
              icon={Clock}
              title="Bitcoin TPS"
              value={7}
              description="Transactions per second"
              trend="down"
            />
            <StatCard
              icon={Zap}
              title="Ethereum TPS"
              value={15}
              description="During normal conditions"
              trend="down"
              delay={200}
            />
            <StatCard
              icon={DollarSign}
              title="Peak Gas Fees"
              value={50}
              prefix="$"
              description="During network congestion"
              trend="down"
              delay={400}
            />
            <StatCard
              icon={Users}
              title="Visa TPS"
              value={65000}
              description="Actual processing capacity"
              trend="up"
              delay={600}
            />
          </div>

          {/* Performance Comparison Chart */}
          <ComparisonChart
            title="Transaction Processing Comparison"
            unit=" TPS"
            data={[
              { name: 'Bitcoin', value: 7, maxValue: 65000, color: '#f97316', description: 'Proof of Work leader' },
              { name: 'Ethereum', value: 15, maxValue: 65000, color: '#8b5cf6', description: 'Smart contract platform' },
              { name: 'Solana', value: 2000, maxValue: 65000, color: '#10b981', description: 'High-performance blockchain' },
              { name: 'Visa', value: 65000, maxValue: 65000, color: '#06b6d4', description: 'Traditional payment system' }
            ]}
            className="mb-16"
          />

          <Card className="p-8 glass-effect border-destructive/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-destructive mb-4">The Privacy Crisis</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Beyond cost and speed, privacy—the foundation of financial sovereignty—is non-existent 
                on public blockchains. Every transaction is visible forever, creating detailed financial 
                profiles that traditional surveillance systems can only dream of achieving.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Quiz Section 1 */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <QuizSection
            title="Test Your Knowledge: Blockchain Crisis"
            questions={trilemmaQuizQuestions}
          />
        </div>
      </section>

      {/* Section 2: The Impossible Triangle */}
      <section id="trilemma" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Section 2: The Trilemma
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient-secondary">Impossible</span> Triangle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding why current blockchain solutions fail to achieve all three critical properties
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Mathematical Reality</h3>
              <p className="text-muted-foreground">
                The blockchain trilemma, first articulated by Ethereum's Vitalik Buterin, reveals why 
                current solutions fail: you can optimize for any two properties—security, decentralization, 
                scalability—but achieving all three simultaneously is mathematically impossible with 
                current architectures.
              </p>
              <p className="text-muted-foreground">
                Bitcoin chose security and decentralization, resulting in 7 TPS. Solana chose speed 
                and some decentralization, achieving higher throughput but with regular network outages. 
                Centralized exchanges like Coinbase achieve massive scale but abandon decentralization entirely.
              </p>
            </div>
            <div>
              <img 
                src={trilemmaDiagram} 
                alt="Blockchain Trilemma Visualization" 
                className="rounded-2xl shadow-secondary w-full"
              />
            </div>
          </div>

          {/* Interactive Trilemma */}
          <InteractiveTrilemma />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 glass-effect border-primary/20">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">Security</h4>
              <p className="text-sm text-muted-foreground">
                Resistance to attacks, consensus integrity, and cryptographic guarantees
              </p>
            </Card>
            <Card className="p-6 glass-effect border-secondary/20">
              <Network className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-lg font-bold mb-2">Decentralization</h4>
              <p className="text-sm text-muted-foreground">
                Number of nodes, governance distribution, and censorship resistance
              </p>
            </Card>
            <Card className="p-6 glass-effect border-accent/20">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h4 className="text-lg font-bold mb-2">Scalability</h4>
              <p className="text-sm text-muted-foreground">
                Transaction throughput, processing speed, and cost efficiency
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: The ZK Breakthrough */}
      <section id="zk-breakthrough" className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Section 3: The Breakthrough
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient-accent">ZK Revolution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Zero-Knowledge Proofs represent the only mathematical solution to the blockchain trilemma
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={zkBreakthrough} 
                alt="Zero-Knowledge Breakthrough" 
                className="rounded-2xl shadow-accent w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Cryptographic Revolution</h3>
              <p className="text-muted-foreground">
                Zero-Knowledge Proofs represent the only known mathematical solution to the blockchain 
                trilemma. Imagine proving you know the password to a safe without revealing the password 
                itself—this seemingly impossible task is exactly what ZK technology accomplishes for 
                blockchain computation.
              </p>
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent/80">
                  💡 <strong>Ali Baba's Cave:</strong> A classic example where someone proves they know 
                  a secret word to open a magical door without revealing the word itself.
                </p>
              </div>
            </div>
          </div>

          {/* ZK Evolution Timeline */}
          <Card className="p-8 glass-effect border-accent/20 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Zero-Knowledge Evolution</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-accent">1985</h4>
                <p className="text-sm text-muted-foreground">Theoretical Foundation</p>
                <p className="text-xs text-muted-foreground mt-2">Goldwasser, Micali, Rackoff</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-accent">2016</h4>
                <p className="text-sm text-muted-foreground">First Implementation</p>
                <p className="text-xs text-muted-foreground mt-2">Zcash privacy coin</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-accent">2021</h4>
                <p className="text-sm text-muted-foreground">ZK Boom Year</p>
                <p className="text-xs text-muted-foreground mt-2">Major projects launch</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary">2024</h4>
                <p className="text-sm text-muted-foreground">zkVM Revolution</p>
                <p className="text-xs text-muted-foreground mt-2">General-purpose ZK</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary">2025</h4>
                <p className="text-sm text-muted-foreground">Universal Adoption</p>
                <p className="text-xs text-muted-foreground mt-2">Mainstream integration</p>
              </div>
            </div>
          </Card>

          {/* Market Opportunity */}
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard
              icon={BarChart3}
              title="ZK Market 2024"
              value={75}
              prefix="$"
              suffix="M"
              description="Current market size"
              trend="up"
            />
            <StatCard
              icon={Target}
              title="Projected 2030"
              value={10}
              prefix="$"
              suffix="B"
              description="Expected market size"
              trend="up"
              delay={200}
            />
            <StatCard
              icon={Users}
              title="Developer Access"
              value={100}
              suffix="%"
              description="With zkVM technology"
              trend="up"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Quiz Section 2 */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <QuizSection
            title="Test Your Knowledge: Zero-Knowledge Technology"
            questions={zkQuizQuestions}
          />
        </div>
      </section>

      {/* Section 4: Boundless Solution */}
      <section id="boundless" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Section 4: The Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Boundless:</span> The Universal Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Boundless represents the infrastructure breakthrough Web3 has been waiting for
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Game-Changing Architecture</h3>
              <p className="text-muted-foreground">
                Boundless emerged from RISC Zero, founded by three visionaries who spent 20+ years 
                building together. With $54M in funding from tier-1 investors and backed by blockchain's 
                most respected figures, Boundless represents the infrastructure breakthrough Web3 has been waiting for.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Universal blockchain compatibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Proof of Verifiable Work (PoVW)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Decentralized proving marketplace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Developer experience revolution</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={boundlessNetwork} 
                alt="Boundless Universal Network" 
                className="rounded-2xl shadow-primary w-full"
              />
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 glass-effect border-primary/20 text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Universal Compatibility</h4>
              <p className="text-sm text-muted-foreground">
                Connect all major blockchains with a single protocol
              </p>
            </Card>
            <Card className="p-6 glass-effect border-secondary/20 text-center">
              <Zap className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Proof of Verifiable Work</h4>
              <p className="text-sm text-muted-foreground">
                Useful computation instead of wasteful mining
              </p>
            </Card>
            <Card className="p-6 glass-effect border-accent/20 text-center">
              <Network className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">Proving Marketplace</h4>
              <p className="text-sm text-muted-foreground">
                Decentralized network of global provers
              </p>
            </Card>
            <Card className="p-6 glass-effect border-primary/20 text-center">
              <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Developer Experience</h4>
              <p className="text-sm text-muted-foreground">
                Rust coding instead of cryptographer work
              </p>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <StatCard
              icon={Clock}
              title="Ethereum Proofs"
              value={12}
              suffix="s"
              description="Sub-12 second proof generation"
              trend="up"
            />
            <StatCard
              icon={DollarSign}
              title="Gas Reduction"
              value={99.9}
              suffix="%"
              description="For complex computations"
              trend="up"
              delay={200}
            />
            <StatCard
              icon={Target}
              title="Cost Efficiency"
              value={30}
              prefix="$"
              description="vs $1000+ on-chain"
              trend="up"
              delay={400}
            />
            <StatCard
              icon={Users}
              title="Active Provers"
              value={363}
              suffix="+"
              description="From mainnet beta day one"
              trend="up"
              delay={600}
            />
          </div>

          {/* Real-World Applications */}
          <Card className="p-8 glass-effect border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8">Real-World Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">EigenLayer</h4>
                <p className="text-sm text-muted-foreground">99.9% gas reduction for slashing mechanisms</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-secondary mb-2">BOB</h4>
                <p className="text-sm text-muted-foreground">First hybrid ZK rollup with 4-hour finality</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-accent mb-2">Steel Extension</h4>
                <p className="text-sm text-muted-foreground">Execute beyond 30M gas limit on Ethereum</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">Signal Project</h4>
                <p className="text-sm text-muted-foreground">Prove all blockchains as open utility</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 5: The Inevitable Future */}
      <section id="future" className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Section 5: The Future
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient-accent">Inevitable</span> Adoption Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why ZK technology and Boundless represent the future we're building toward
            </p>
          </div>

          <div className="space-y-16">
            {/* Market Convergence */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Market Convergence Analysis</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Multiple trends are converging to make ZK technology inevitable: regulatory demands 
                for privacy, institutional requirements for scalability, and user expectations for 
                Web2-level performance. Boundless provides the infrastructure foundation that makes 
                all of this possible.
              </p>
            </div>

            {/* Adoption Timeline */}
            <Card className="p-8 glass-effect border-accent/20">
              <h3 className="text-2xl font-bold text-center mb-8">Adoption Pathway</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">Now</span>
                  </div>
                  <h4 className="font-bold">Current State</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mainnet beta live</li>
                    <li>• 363+ active provers</li>
                    <li>• Real applications deployed</li>
                    <li>• Developer adoption growing</li>
                  </ul>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">2025</span>
                  </div>
                  <h4 className="font-bold">Near-term Adoption</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Major DeFi integration</li>
                    <li>• Enterprise adoption</li>
                    <li>• Cross-chain bridges</li>
                    <li>• Institutional demand</li>
                  </ul>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-secondary">2030</span>
                  </div>
                  <h4 className="font-bold">Mass Adoption</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Billion-user applications</li>
                    <li>• Invisible infrastructure</li>
                    <li>• Global financial rails</li>
                    <li>• Web3 = Web2 UX</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* The Bigger Picture */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">The Bigger Picture</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
                This isn't just about making blockchain faster or cheaper—it's about unlocking the 
                next billion users for Web3. When zero-knowledge proofs become as invisible and 
                essential as encryption is today, blockchain technology can finally deliver on its 
                original promise of decentralized, scalable, and private digital infrastructure.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 glass-effect border-primary/20">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Global Scale</h4>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure for the next billion Web3 users
                  </p>
                </Card>
                <Card className="p-6 glass-effect border-secondary/20">
                  <Lock className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Privacy by Default</h4>
                  <p className="text-sm text-muted-foreground">
                    ZK proofs as invisible as encryption today
                  </p>
                </Card>
                <Card className="p-6 glass-effect border-accent/20">
                  <Rocket className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Innovation Unlocked</h4>
                  <p className="text-sm text-muted-foreground">
                    Applications impossible with current tech
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action & Social Links */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the ZK Revolution
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            The future of decentralized compute is here. Be part of the movement that's 
            making Web3 accessible to everyone.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <a href="https://beboundless.xyz/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 mr-2" />
                Visit Boundless
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <a href="https://docs.beboundless.xyz/developers/what" target="_blank" rel="noopener noreferrer">
                <Cpu className="w-5 h-5 mr-2" />
                Start Building
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <Separator className="bg-white/20 mb-8" />

          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://twitter.com/boundless_xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Twitter @boundless_xyz
            </a>
            <a 
              href="https://discord.gg/5SJzPnTM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Discord Community
            </a>
            <a 
              href="https://beboundless.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Official Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoundlessEducation;