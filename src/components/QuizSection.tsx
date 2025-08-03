import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSectionProps {
  title: string;
  questions: Question[];
  className?: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  title,
  questions,
  className = '',
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const getScore = () => {
    return questions.reduce((score, question) => {
      return selectedAnswers[question.id] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQ?.id];
  const hasAnswered = selectedAnswer !== undefined;

  if (showResults) {
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <Card className={`p-8 glass-effect border-primary/20 ${className}`}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gradient-primary mb-4">{title} - Results</h3>
          
          <div className="mb-6">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">
              {score}/{questions.length}
            </div>
            <Badge 
              variant={percentage >= 70 ? "default" : "destructive"}
              className="text-lg px-4 py-2"
            >
              {percentage}% Score
            </Badge>
          </div>

          <div className="space-y-4 mb-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive mt-1" />
                    )}
                    <div className="text-left">
                      <p className="font-medium mb-2">{question.question}</p>
                      <p className="text-sm text-muted-foreground">
                        Your answer: {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-accent">
                          Correct: {question.options[question.correctAnswer]}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button onClick={resetQuiz} className="bg-gradient-primary hover:opacity-90">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-8 glass-effect border-primary/20 ${className}`}>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gradient-primary">{title}</h3>
          <Badge variant="outline">
            {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <HelpCircle className="w-6 h-6 text-primary mt-1" />
          <h4 className="text-lg font-semibold">{currentQ.question}</h4>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQ.id, index)}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 hover:border-primary/50 ${
                selectedAnswer === index
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground'
                }`} />
                <span className={selectedAnswer === index ? 'text-primary font-medium' : ''}>
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={nextQuestion}
            disabled={!hasAnswered}
            className="bg-gradient-primary hover:opacity-90"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
          </Button>
        </div>
      </div>
    </Card>
  );
};