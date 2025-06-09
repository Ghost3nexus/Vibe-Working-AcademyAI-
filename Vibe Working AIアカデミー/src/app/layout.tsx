import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Vibe Working AIアカデミー | AIを学び、ビジネスを変革する',
  description: 'AIに興味のあるビジネスパーソンと中小企業のための実践的AI教育プラットフォーム。最新のAI技術を学び、ビジネスに活用する方法を習得できます。',
  keywords: 'AI教育, ビジネスAI, AI活用, 中小企業DX, AIアカデミー',
  openGraph: {
    title: 'Vibe Working AIアカデミー',
    description: 'AIを学び、ビジネスを変革する',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen gradient-bg washi-texture">
        {children}
      </body>
    </html>
  )
}