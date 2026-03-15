"use client"

import { useState, useEffect } from "react"
import { Trophy, Timer, HelpCircle, RotateCcw, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Word {
  word: string
  clue: string
  startRow: number
  startCol: number
  direction: "across" | "down"
  number: number
}

const words: Word[] = [
  {
    word: "DONGKHOI",
    clue: "Phong trào đấu tranh cách mạng bùng nổ mạnh ở miền Nam cuối những năm 1950 - đầu 1960",
    startRow: 2,
    startCol: 3,
    direction: "across",
    number: 1,
  },
  {
    word: "HAUPHUONG",
    clue: "Vai trò của miền Bắc trong kháng chiến chống Mỹ",
    startRow: 2,
    startCol: 8,
    direction: "down",
    number: 2,
  },
  {
    word: "THANTOC",
    clue: "Yêu cầu tác chiến nổi bật trong Tổng tiến công mùa Xuân 1975",
    startRow: 6,
    startCol: 4,
    direction: "across",
    number: 3,
  },
  {
    word: "APCHIENLUOC",
    clue: "Mô hình kiểm soát nông thôn do Mỹ - Diệm triển khai ở miền Nam",
    startRow: 1,
    startCol: 12,
    direction: "down",
    number: 4,
  },
]

const GRID_SIZE = 15

export function CrosswordGame() {
  const [grid, setGrid] = useState<string[][]>([])
  const [userInput, setUserInput] = useState<string[][]>([])
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)
  const [completedWords, setCompletedWords] = useState<Set<number>>(new Set())
  const [showHints, setShowHints] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isGameComplete, setIsGameComplete] = useState(false)

  // Initialize grid
  useEffect(() => {
    const newGrid: string[][] = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(""))
    const newInput: string[][] = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(""))

    words.forEach((word) => {
      const { word: text, startRow, startCol, direction } = word
      for (let i = 0; i < text.length; i++) {
        if (direction === "across") {
          newGrid[startRow][startCol + i] = text[i]
        } else {
          newGrid[startRow + i][startCol] = text[i]
        }
      }
    })

    setGrid(newGrid)
    setUserInput(newInput)
  }, [])

  // Timer
  useEffect(() => {
    if (!isGameComplete) {
      const interval = setInterval(() => setTimer((t) => t + 1), 1000)
      return () => clearInterval(interval)
    }
  }, [isGameComplete])

  // Check word completion
  useEffect(() => {
    const newCompleted = new Set<number>()
    words.forEach((word) => {
      let isComplete = true
      for (let i = 0; i < word.word.length; i++) {
        const row = word.direction === "across" ? word.startRow : word.startRow + i
        const col = word.direction === "across" ? word.startCol + i : word.startCol
        if (userInput[row]?.[col] !== word.word[i]) {
          isComplete = false
          break
        }
      }
      if (isComplete) newCompleted.add(word.number)
    })
    setCompletedWords(newCompleted)

    // Check if game is complete
    if (newCompleted.size === words.length && !isGameComplete) {
      setIsGameComplete(true)
    }
  }, [userInput, isGameComplete])

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col] !== "") {
      setSelectedCell({ row, col })
      // Find word at this position
      const word = words.find(
        (w) =>
          (w.direction === "across" &&
            w.startRow === row &&
            col >= w.startCol &&
            col < w.startCol + w.word.length) ||
          (w.direction === "down" &&
            w.startCol === col &&
            row >= w.startRow &&
            row < w.startRow + w.word.length)
      )
      setSelectedWord(word || null)
    }
  }

  const handleKeyPress = (key: string) => {
    if (!selectedCell) return

    const newInput = [...userInput.map((row) => [...row])]
    if (key === "BACKSPACE") {
      newInput[selectedCell.row][selectedCell.col] = ""
    } else if (key.length === 1 && /[A-Z]/.test(key)) {
      newInput[selectedCell.row][selectedCell.col] = key
      // Move to next cell
      if (selectedWord) {
        const { direction, startRow, startCol, word } = selectedWord
        const currentIndex =
          direction === "across"
            ? selectedCell.col - startCol
            : selectedCell.row - startRow
        if (currentIndex < word.length - 1) {
          const nextRow = direction === "across" ? startRow : startRow + currentIndex + 1
          const nextCol = direction === "across" ? startCol + currentIndex + 1 : startCol
          setSelectedCell({ row: nextRow, col: nextCol })
        }
      }
    }
    setUserInput(newInput)
  }

  const resetGame = () => {
    setUserInput(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill("")))
    setCompletedWords(new Set())
    setTimer(0)
    setIsGameComplete(false)
    setSelectedCell(null)
    setSelectedWord(null)
  }

  const getCellClass = (row: number, col: number) => {
    const isActive = grid[row][col] !== ""
    const isSelected = selectedCell?.row === row && selectedCell?.col === col
    const isInSelectedWord =
      selectedWord &&
      ((selectedWord.direction === "across" &&
        selectedWord.startRow === row &&
        col >= selectedWord.startCol &&
        col < selectedWord.startCol + selectedWord.word.length) ||
        (selectedWord.direction === "down" &&
          selectedWord.startCol === col &&
          row >= selectedWord.startRow &&
          row < selectedWord.startRow + selectedWord.word.length))

    const userChar = userInput[row]?.[col] || ""
    const correctChar = grid[row][col]
    const isCorrect = userChar && userChar === correctChar
    const isWrong = userChar && userChar !== correctChar

    return `
      w-10 h-10 border flex items-center justify-center font-bold text-lg
      transition-all duration-200
      ${!isActive ? "bg-muted border-muted cursor-not-allowed" : ""}
      ${isActive && !userChar ? "bg-card border-border cursor-pointer hover:border-primary/50" : ""}
      ${isSelected ? "ring-2 ring-primary bg-primary/5" : ""}
      ${isInSelectedWord && !isSelected ? "bg-accent/20" : ""}
      ${isCorrect ? "bg-green-500/20 border-green-500 text-green-700" : ""}
      ${isWrong ? "bg-red-500/20 border-red-500 text-red-700" : ""}
    `
  }

  const getWordNumber = (row: number, col: number) => {
    const word = words.find((w) => w.startRow === row && w.startCol === col)
    return word ? word.number : null
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <section id="game" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            🎮 Game Tương Tác
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ô Chữ Lịch Sử</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Từ khóa: Đồng Khởi, Hậu phương, Thần tốc, Ấp chiến lược
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 border border-border">
            <Timer className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">{formatTime(timer)}</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 border border-border">
            <Trophy className="h-5 w-5 text-accent" />
            <span className="font-semibold text-foreground">
              {completedWords.size}/{words.length}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={() => setShowHints(!showHints)}>
            <HelpCircle className="h-4 w-4 mr-2" />
            {showHints ? "Ẩn" : "Hiện"} Gợi ý
          </Button>
          <Button variant="outline" size="sm" onClick={resetGame}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Chơi lại
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Crossword Grid */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
              <div className="inline-block">
                {grid.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={getCellClass(rowIndex, colIndex)}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {getWordNumber(rowIndex, colIndex) && (
                          <span className="absolute top-0 left-0 text-[8px] text-primary font-bold pl-0.5">
                            {getWordNumber(rowIndex, colIndex)}
                          </span>
                        )}
                        <span className="relative">
                          {userInput[rowIndex]?.[colIndex] || ""}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Virtual Keyboard */}
              <div className="mt-6">
                <div className="grid grid-cols-9 gap-1 max-w-md mx-auto">
                  {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((key) => (
                    <button
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      className="h-10 bg-muted hover:bg-primary/20 rounded font-semibold transition-colors"
                    >
                      {key}
                    </button>
                  ))}
                  <button
                    onClick={() => handleKeyPress("BACKSPACE")}
                    className="col-span-2 h-10 bg-destructive/20 hover:bg-destructive/30 rounded font-semibold transition-colors"
                  >
                    ←
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clues Panel */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Gợi ý
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Hàng ngang
                  </h4>
                  {words
                    .filter((w) => w.direction === "across")
                    .map((word) => (
                      <div
                        key={word.number}
                        className={`mb-2 p-2 rounded transition-all ${
                          selectedWord?.number === word.number
                            ? "bg-primary/10 border border-primary/20"
                            : ""
                        } ${
                          completedWords.has(word.number)
                            ? "opacity-50 line-through"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedWord(word)
                          setSelectedCell({ row: word.startRow, col: word.startCol })
                        }}
                      >
                        <div className="flex items-start gap-2 cursor-pointer">
                          <span className="font-bold text-primary shrink-0">
                            {word.number}.
                          </span>
                          <span className="text-sm text-foreground">{word.clue}</span>
                          {completedWords.has(word.number) && (
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 ml-auto" />
                          )}
                        </div>
                        {showHints && (
                          <div className="text-xs text-muted-foreground mt-1 ml-6">
                            ({word.word.length} chữ)
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Hàng dọc
                  </h4>
                  {words
                    .filter((w) => w.direction === "down")
                    .map((word) => (
                      <div
                        key={word.number}
                        className={`mb-2 p-2 rounded transition-all ${
                          selectedWord?.number === word.number
                            ? "bg-primary/10 border border-primary/20"
                            : ""
                        } ${
                          completedWords.has(word.number)
                            ? "opacity-50 line-through"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedWord(word)
                          setSelectedCell({ row: word.startRow, col: word.startCol })
                        }}
                      >
                        <div className="flex items-start gap-2 cursor-pointer">
                          <span className="font-bold text-accent shrink-0">
                            {word.number}.
                          </span>
                          <span className="text-sm text-foreground">{word.clue}</span>
                          {completedWords.has(word.number) && (
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 ml-auto" />
                          )}
                        </div>
                        {showHints && (
                          <div className="text-xs text-muted-foreground mt-1 ml-6">
                            ({word.word.length} chữ)
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Completion Message */}
            {isGameComplete && (
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border-2 border-green-500/20 animate-fadeInUp">
                <div className="text-center">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    🎉 Chúc mừng!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Bạn đã hoàn thành ô chữ trong {formatTime(timer)}
                  </p>
                  <Button onClick={resetGame} className="w-full">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Chơi lại
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            💡 Hướng dẫn chơi
          </h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Click vào ô trống để bắt đầu nhập</li>
            <li>• Sử dụng bàn phím ảo hoặc bàn phím thật để điền chữ</li>
            <li>• Click vào gợi ý để highlight từ tương ứng</li>
            <li>• Ô màu xanh = đúng, ô màu đỏ = sai</li>
            <li>• Nhấn "Hiện Gợi ý" để xem độ dài từ</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
