"use client"

import { useEffect, useState } from "react"
import { LineChart } from "lucide-react"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center max-w-md text-center">
        <div className="relative mb-8">
          <div className="h-24 w-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
          <LineChart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-primary" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Analyzing your chart with AI...</h2>
        <p className="text-muted-foreground mb-6">
          Our AI is examining patterns, support/resistance levels, and generating insights
        </p>

        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-muted-foreground">{progress}% complete</p>

        <div className="mt-8 animate-pulse">
          <p className="text-sm italic text-muted-foreground">
            "The stock market is filled with individuals who know the price of everything, but the value of nothing."
          </p>
          <p className="text-sm text-muted-foreground mt-1">— Philip Fisher</p>
        </div>
      </div>
    </div>
  )
}
