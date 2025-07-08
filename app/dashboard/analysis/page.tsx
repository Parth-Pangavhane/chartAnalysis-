"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, ArrowDownRight, Minus, Download, Save, Send } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AnalysisPage() {
  const [followUpQuestion, setFollowUpQuestion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleFollowUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!followUpQuestion) return

    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setFollowUpQuestion("")
      // In a real app, you would append the new response to the analysis
    }, 1500)
  }

  // Mock analysis data
  const analysis = {
    stockName: "AAPL (Apple Inc.)",
    pattern: "Double Bottom",
    sentiment: "bullish",
    summary:
      "The chart shows a clear double bottom pattern which is typically bullish. After testing support twice around $165, the price has broken above the neckline with increased volume, suggesting further upside potential.",
    support: [
      { level: "$165.00", strength: "Strong" },
      { level: "$170.50", strength: "Moderate" },
    ],
    resistance: [
      { level: "$185.25", strength: "Moderate" },
      { level: "$192.00", strength: "Strong" },
    ],
    indicators: [
      { name: "RSI", value: "65", interpretation: "Approaching overbought but still bullish" },
      { name: "MACD", value: "Positive", interpretation: "Bullish crossover recently formed" },
      { name: "Volume", value: "Above Average", interpretation: "Confirming price movement" },
    ],
    recommendation: "Buy",
    targetPrice: "$192.00",
    stopLoss: "$164.50",
    riskRewardRatio: "3.2:1",
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Chart Analysis Results</h1>
        <p className="text-muted-foreground">AI-powered analysis of your uploaded stock chart</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Stock Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Stock</p>
                <p className="font-medium">{analysis.stockName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pattern</p>
                <p className="font-medium">{analysis.pattern}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sentiment</p>
                <Badge variant={analysis.sentiment === "bullish" ? "default" : "destructive"}>
                  {analysis.sentiment.toUpperCase()}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Support & Resistance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Support Levels</p>
                {analysis.support.map((level, i) => (
                  <div key={i} className="flex items-center justify-between mb-1">
                    <p className="font-medium">{level.level}</p>
                    <Badge variant="outline">{level.strength}</Badge>
                  </div>
                ))}
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Resistance Levels</p>
                {analysis.resistance.map((level, i) => (
                  <div key={i} className="flex items-center justify-between mb-1">
                    <p className="font-medium">{level.level}</p>
                    <Badge variant="outline">{level.strength}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div
                  className={`h-24 w-24 rounded-full flex items-center justify-center ${
                    analysis.recommendation === "Buy"
                      ? "bg-green-500/20 text-green-500"
                      : analysis.recommendation === "Sell"
                        ? "bg-red-500/20 text-red-500"
                        : "bg-amber-500/20 text-amber-500"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">{analysis.recommendation}</div>
                    {analysis.recommendation === "Buy" && <ArrowUpRight className="h-6 w-6 mx-auto mt-1" />}
                    {analysis.recommendation === "Sell" && <ArrowDownRight className="h-6 w-6 mx-auto mt-1" />}
                    {analysis.recommendation === "Hold" && <Minus className="h-6 w-6 mx-auto mt-1" />}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Target Price</p>
                  <p className="font-medium">{analysis.targetPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stop Loss</p>
                  <p className="font-medium">{analysis.stopLoss}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Risk/Reward</p>
                  <p className="font-medium">{analysis.riskRewardRatio}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Technical Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{analysis.summary}</p>

          <div className="space-y-4">
            <p className="font-medium">Key Indicators</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analysis.indicators.map((indicator, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{indicator.name}</p>
                    <p>{indicator.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{indicator.interpretation}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Ask a Follow-up Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFollowUp} className="flex items-center gap-2">
            <Input
              placeholder="Ask about specific indicators, patterns, or recommendations..."
              value={followUpQuestion}
              onChange={(e) => setFollowUpQuestion(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!followUpQuestion || isLoading}>
              {isLoading ? "Thinking..." : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="gap-2 bg-transparent">
          <Save className="h-4 w-4" /> Save Analysis
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
        <Button onClick={() => router.push("/dashboard")} className="gap-2">
          Analyze Another Chart
        </Button>
      </div>
    </div>
  )
}
