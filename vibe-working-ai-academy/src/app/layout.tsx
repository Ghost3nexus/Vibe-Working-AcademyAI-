import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ParticleBackground from '@/components/ParticleBackground'

export const metadata: Metadata = {
  title: 'Vibe Working アカデミー | 法人向け生成AIスクール',
  description: '実務直結のAIテンプレート50種類と週次Sprint型カリキュラムで、御社の全社員がAIを使いこなすチームへ。助成金対応・Slackサポート付きの法人向け生成AIスクール。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticleBackground />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}