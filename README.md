<!-- Logo -->
<p align="center">
  <img src="public/placeholder-logo.svg" alt="ChartSense AI Logo" width="120" />
</p>

# ChartSense AI - Stock Chart Analyzer 📈🤖

ChartSense AI is a modern web application for analyzing stock charts, powered by Next.js, Supabase authentication, and Tailwind CSS. It provides a seamless user experience for registration, login, and dashboard analytics, with OAuth support for Google and GitHub.

---

## ✨ Features

- 🔐 User registration and login (email/password & OAuth)
- 📊 Dashboard for stock chart analysis
- 💎 Responsive, modern UI with Tailwind CSS
- 🗄️ Supabase backend for authentication
- 🧩 Modular component-based architecture

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Supabase](https://supabase.com/) (Auth)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/icons/) (Icons)
- [PNPM](https://pnpm.io/) (Package manager)

---

## 🚀 Getting Started

### Prerequisites
- 🟢 Node.js (v18+ recommended)
- 📦 PNPM (or npm/yarn)
- 🟣 Supabase project (get your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd stock-chart-analyzer
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

- `app/` - Next.js app directory (pages, layouts, routes)
- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets
- `styles/` - Global styles

## 🔑 Authentication
- Email/password registration and login
- OAuth with Google and GitHub
- Auth state managed via Supabase

## 🎨 Customization
- Update branding, colors, and UI in `components/` and `app/`
- Add new analysis features in the dashboard

---

## 📄 License

This project is licensed under the MIT License.
