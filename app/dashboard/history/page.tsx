"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock history data
  const historyItems = [
    {
      id: "1",
      stockName: "AAPL",
      date: "July 8, 2025",
      recommendation: "Buy",
      pattern: "Double Bottom",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "2",
      stockName: "MSFT",
      date: "July 7, 2025",
      recommendation: "Hold",
      pattern: "Consolidation",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "3",
      stockName: "TSLA",
      date: "July 5, 2025",
      recommendation: "Sell",
      pattern: "Head and Shoulders",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "4",
      stockName: "AMZN",
      date: "July 3, 2025",
      recommendation: "Buy",
      pattern: "Cup and Handle",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "5",
      stockName: "GOOGL",
      date: "July 1, 2025",
      recommendation: "Buy",
      pattern: "Ascending Triangle",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
  ]

  const filteredItems = historyItems.filter(
    (item) =>
      item.stockName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pattern.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case "Buy":
        return <ArrowUpRight className="h-4 w-4 text-green-500" />
      case "Sell":
        return <ArrowDownRight className="h-4 w-4 text-red-500" />
      case "Hold":
        return <Minus className="h-4 w-4 text-amber-500" />
      default:
        return null
    }
  }

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Buy":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Sell":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Hold":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20"
      default:
        return ""
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analysis History</h1>
        <p className="text-muted-foreground">View and search your past chart analyses</p>
      </div>

      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by stock name or pattern..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No analysis history found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link href={`/dashboard/analysis?id=${item.id}`} key={item.id}>
              <Card className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={`${item.stockName} chart`}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getRecommendationColor(item.recommendation)}`}>
                    <span className="flex items-center gap-1">
                      {getRecommendationIcon(item.recommendation)}
                      {item.recommendation}
                    </span>
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{item.stockName}</h3>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Pattern: {item.pattern}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
