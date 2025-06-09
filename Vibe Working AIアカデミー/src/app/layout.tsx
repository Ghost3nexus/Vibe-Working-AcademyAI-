import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIVANCE | 法人向け生成AIスクール',
  description: '実務直結のAIテンプレート50種類と週次Sprint型カリキュラムで、御社の全社員がAIを使いこなすチームへ。助成金対応・Slackサポート付きの法人向け生成AIスクール。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}