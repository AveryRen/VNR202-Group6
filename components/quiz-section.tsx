"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, RefreshCw, HelpCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "When did the United States begin deploying large numbers of combat troops to Vietnam?",
    options: ["1963", "1965", "1968", "1972"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which event significantly changed global perception of the war?",
    options: ["Geneva Agreement", "Tet Offensive", "Paris Peace Accords", "Gulf of Tonkin"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Which agreement led to the withdrawal of US troops?",
    options: ["Geneva Agreement", "Paris Peace Accords", "SEATO Treaty", "Camp David Accords"],
    correctAnswer: 1,
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setIsComplete(false)
  }

  const question = questions[currentQuestion]

  return (
    <section id="quiz" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-muted-foreground">
            Answer these questions about the Vietnam War
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {!isComplete ? (
            <>
              {/* Progress Bar */}
              <div className="bg-muted h-2">
                <div
                  className="bg-primary h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="p-8">
                {/* Question Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    Score: {score}/{questions.length}
                  </span>
                </div>

                {/* Question */}
                <div className="flex items-start gap-3 mb-8">
                  <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {question.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === question.correctAnswer
                    const showCorrectness = showResult

                    let buttonStyles =
                      "w-full p-4 text-left rounded-lg border transition-all duration-200"

                    if (showCorrectness) {
                      if (isCorrect) {
                        buttonStyles +=
                          " bg-green-50 border-green-500 text-green-800"
                      } else if (isSelected && !isCorrect) {
                        buttonStyles += " bg-red-50 border-red-500 text-red-800"
                      } else {
                        buttonStyles +=
                          " bg-card border-border text-muted-foreground"
                      }
                    } else {
                      buttonStyles += isSelected
                        ? " bg-primary/10 border-primary text-foreground"
                        : " bg-card border-border text-foreground hover:border-primary/50"
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={buttonStyles}
                        disabled={showResult}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showCorrectness && isCorrect && (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          )}
                          {showCorrectness && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4">
                  {!showResult ? (
                    <Button
                      onClick={handleCheckAnswer}
                      disabled={selectedAnswer === null}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestion < questions.length - 1
                        ? "Next Question"
                        : "See Results"}
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Results */
            <div className="p-8 text-center">
              <div className="mb-6">
                {score === questions.length ? (
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-primary">
                      {score}/{questions.length}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {score === questions.length
                  ? "Perfect Score!"
                  : score >= questions.length / 2
                    ? "Good Job!"
                    : "Keep Learning!"}
              </h3>

              <p className="text-muted-foreground mb-8">
                You answered {score} out of {questions.length} questions
                correctly.
              </p>

              <Button onClick={handleReset} variant="outline" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
