'use client'

import { useEffect, useRef, useState } from 'react'

const painPoints = [
  {
    id: 1,
    icon: '😓',
    title: 'AI講座は受けたが業務に活かせない...',
    description: '理論は分かったが、実際の業務でどう使えばいいか分からない。結局、元の作業方法に戻ってしまう。',
    bgColor: 'bg-red-50 border-red-200'
  },
  {
    id: 2,
    icon: '📉',
    title: '社内展開まで辿り着けずROI説明ができない...',
    description: '個人で学んだが、チーム全体への展開方法が不明。投資対効果を上司に説明できない。',
    bgColor: 'bg-orange-50 border-orange-200'
  },
  {
    id: 3,
    icon: '⏰',
    title: 'ツールが多すぎて習得に時間がかかる...',
    description: 'ChatGPT、Claude、Midjourney... 次々と新しいツールが登場。どれから手をつければいいか分からない。',
    bgColor: 'bg-yellow-50 border-yellow-200'
  }
]

const solutions = [
  {
    id: 1,
    icon: '🎯',
    title: '実務直結のテンプレート50種',
    description: 'メール作成、資料作成、データ分析など、すぐに使える業務テンプレートを提供。初日から生産性向上を実感。',
    feature: '週次アウトプット付き'
  },
  {
    id: 2,
    icon: '📊',
    title: '成果物付きSprintカリキュラム',
    description: '週次で実際のプロジェクトを完成。',
    feature: '工数削減率70%実績'
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Slack統合型チームサポート',
    description: '48時間以内の専門家回答、同業種チャンネル、月次勉強会で継続的な学習をサポート。',
    feature: '継続率95%達成'
  }
]

export default function PainSolution() {
  const [visiblePains, setVisiblePains] = useState<number[]>([])
  const [visibleSolutions, setVisibleSolutions] = useState<number[]>([])
  const painRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === painRef.current) {
              painPoints.forEach((_, index) => {
                setTimeout(() => {
                  setVisiblePains((prev) => [...prev, index])
                }, index * 300)
              })
            } else if (entry.target === solutionRef.current) {
              solutions.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleSolutions((prev) => [...prev, index])
                }, index * 300)
              })
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (painRef.current) observer.observe(painRef.current)
    if (solutionRef.current) observer.observe(solutionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* 痛みポイントセクション */}
        <div ref={painRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              こんなお悩みありませんか？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多くの企業が抱えるAI導入・活用の課題
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <div
                key={pain.id}
                className={`p-8 rounded-2xl border-2 ${pain.bgColor} transform transition-all duration-700 ${
                  visiblePains.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-6xl mb-6 text-center">{pain.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {pain.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 矢印（痛み→解決） */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg">
            <span className="mr-4">Vibe Working Academy なら解決できます</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* 解決策セクション */}
        <div ref={solutionRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vibe Working Academy
              </span>
              の解決アプローチ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              「成果物付き週次アウトプット × 現場テンプレ50種」で確実な成果を実現
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  visibleSolutions.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* 特徴バッジ */}
                <div className="absolute -top-3 left-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full">
                  {solution.feature}
                </div>

                <div className="text-6xl mb-6 text-center">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  {solution.description}
                </p>

                {/* 詳細リンク */}
                <div className="text-center">
                  <a
                    href="#curriculum"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    詳しく見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            まずは3分でわかるVibe Working Academyの紹介動画をご覧ください
          </p>
          <a
            href="#video"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M18 12l-3-3h4l-3 3zM6 20h.01M6 4h.01" />
            </svg>
            3分でわかる動画を見る
          </a>
        </div>
      </div>
    </section>
  )
}