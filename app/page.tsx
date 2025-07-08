import { Button } from "@/components/ui/button"
import { ChevronRight, LineChart, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LineChart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ChartSense AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            AI-Powered Stock Chart Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Upload your stock charts and get instant AI-powered analysis, pattern recognition, and trading
            recommendations in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Start Analyzing Charts <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Login to Your Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Upload Your Chart</h3>
            <p className="text-muted-foreground">Simply drag and drop or select your stock chart image to upload.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our AI engine analyzes patterns, support/resistance levels, and trends.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Get Insights</h3>
            <p className="text-muted-foreground">Receive detailed analysis with actionable trading recommendations.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <LineChart className="h-5 w-5 text-primary" />
            <span className="font-medium">ChartSense AI</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChartSense AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
