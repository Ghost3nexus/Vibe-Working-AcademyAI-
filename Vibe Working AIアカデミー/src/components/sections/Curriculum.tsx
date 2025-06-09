'use client'

import { useState, useEffect, useRef } from 'react'

interface Week {
  week: number
  title: string
  description: string
  deliverables: string[]
  tools: string[]
  outcome: string
  github: string
  notion: string
}

const curriculum: Week[] = [
  {
    week: 1,
    title: 'AI基礎 & 環境構築',
    description: 'ChatGPT、Claude、Geminiの特性理解とSlack連携環境の構築',
    deliverables: [
      'AI比較レポート（10ページ）',
      'Slack Bot基礎版',
      'プロンプトテンプレート集'
    ],
    tools: ['ChatGPT', 'Claude', 'Slack API'],
    outcome: '日常業務での適切なAI選択が可能に',
    github: 'week1-ai-basics',
    notion: 'Week1: AI基礎知識まとめ'
  },
  {
    week: 2,
    title: 'ビジネス文書自動化',
    description: 'メール、提案書、議事録の自動生成テンプレート作成',
    deliverables: [
      'メール自動生成システム',
      '提案書テンプレート30種',
      '議事録要約Bot'
    ],
    tools: ['GPT-4', 'Make.com', 'Google Docs API'],
    outcome: '文書作成時間を80%短縮',
    github: 'week2-document-automation',
    notion: 'Week2: 文書自動化成果物'
  },
  {
    week: 3,
    title: 'データ分析 & レポート自動化',
    description: 'Excel/CSV分析とビジュアライゼーションの自動化',
    deliverables: [
      'データ分析ダッシュボード',
      'KPIレポート自動生成',
      'グラフ作成Bot'
    ],
    tools: ['Python', 'Pandas', 'Plotly', 'Power BI'],
    outcome: 'レポート作成を週5時間から30分に短縮',
    github: 'week3-data-analysis',
    notion: 'Week3: データ分析自動化'
  },
  {
    week: 4,
    title: 'SNS & マーケティング自動化',
    description: 'コンテンツ企画から投稿まで全自動化システム構築',
    deliverables: [
      'SNS自動運用GPT',
      'コンテンツカレンダー生成',
      'ハッシュタグ最適化システム'
    ],
    tools: ['ChatGPT', 'Buffer', 'Canva API', 'Instagram API'],
    outcome: 'SNS運用工数を90%削減、エンゲージメント150%向上',
    github: 'week4-sns-automation',
    notion: 'Week4: SNS自動化システム'
  },
  {
    week: 5,
    title: 'カスタマーサポート自動化',
    description: 'FAQ Bot、チケット分類、返答テンプレート自動生成',
    deliverables: [
      '24時間対応FAQ Bot',
      'チケット自動分類システム',
      '返答テンプレート生成AI'
    ],
    tools: ['Dify', 'Zendesk API', 'RAG技術'],
    outcome: 'サポート対応時間を70%短縮、顧客満足度向上',
    github: 'week5-customer-support',
    notion: 'Week5: カスタマーサポート自動化'
  },
  {
    week: 6,
    title: 'LINE & チャットボット開発',
    description: 'LINE連携RAG Botと社内問い合わせシステム構築',
    deliverables: [
      'LINE連携RAG Bot',
      '社内FAQ検索システム',
      'マルチモーダル対応Bot'
    ],
    tools: ['LINE API', 'LangChain', 'Vector Database'],
    outcome: '社内問い合わせ対応を自動化、回答精度95%達成',
    github: 'week6-line-chatbot',
    notion: 'Week6: チャットボット開発'
  },
  {
    week: 7,
    title: '業務プロセス最適化',
    description: 'ワークフロー分析と自動化提案システムの構築',
    deliverables: [
      '業務フロー可視化ツール',
      '自動化提案システム',
      'ROI計算ダッシュボード'
    ],
    tools: ['Zapier', 'Microsoft Power Automate', 'Miro API'],
    outcome: '全社的な業務効率化計画の立案が可能に',
    github: 'week7-process-optimization',
    notion: 'Week7: プロセス最適化'
  },
  {
    week: 8,
    title: '最終プロジェクト & 社内展開',
    description: '独自AIシステム開発と社内プレゼンテーション',
    deliverables: [
      'オリジナルAIシステム',
      '社内展開プレゼンテーション',
      'ROI実績レポート'
    ],
    tools: ['統合ツール群', 'プレゼンテーション自動生成'],
    outcome: '社内AI導入のリーダーとして活躍',
    github: 'week8-final-project',
    notion: 'Week8: 最終成果発表'
  }
]

export default function Curriculum() {
  const [visibleWeeks, setVisibleWeeks] = useState<number[]>([])
  const [selectedWeek, setSelectedWeek] = useState<number>(1)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            curriculum.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWeeks((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const selectedWeekData = curriculum[selectedWeek - 1]

  return (
    <section id="curriculum" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
            8週間完結カリキュラム
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            実践的な成果物で学ぶ<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              週次Sprint型カリキュラム
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            毎週1つずつ実際に使える成果物を作成。GitHubとNotionで管理し、<br />
            社内展開可能なレベルまで実践的にスキルアップ
          </p>
        </div>

        {/* カリキュラム一覧 */}
        <div className="grid lg:grid-cols-4 gap-2 mb-12">
          {curriculum.map((week, index) => (
            <button
              key={week.week}
              onClick={() => setSelectedWeek(week.week)}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                selectedWeek === week.week
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25'
              } ${
                visibleWeeks.includes(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-2">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                  selectedWeek === week.week ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {week.week}
                </span>
                <span className="ml-2 text-sm text-gray-500">Week {week.week}</span>
              </div>
              <h3 className={`font-bold text-sm mb-1 ${
                selectedWeek === week.week ? 'text-blue-900' : 'text-gray-900'
              }`}>
                {week.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {week.description.substring(0, 50)}...
              </p>
            </button>
          ))}
        </div>

        {/* 選択されたWeekの詳細 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 左側：概要とツール */}
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                  {selectedWeekData.week}
                </span>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedWeekData.title}</h3>
                  <span className="text-blue-600 font-semibold">Week {selectedWeekData.week}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedWeekData.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">使用ツール・技術</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWeekData.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">期待される成果</h4>
                <p className="text-green-700 text-sm">{selectedWeekData.outcome}</p>
              </div>
            </div>

            {/* 右側：成果物とリンク */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">作成する成果物</h4>
              <div className="space-y-3 mb-6">
                {selectedWeekData.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>

              {/* GitHubとNotionリンク */}
              <div className="space-y-4">
                <a
                  href={`https://github.com/aivance-training/${selectedWeekData.github}`}
                  className="flex items-center p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <div className="font-semibold">GitHubで成果物を確認</div>
                    <div className="text-sm text-gray-300">{selectedWeekData.github}</div>
                  </div>
                </a>

                <a
                  href={`https://notion.so/aivance/${selectedWeekData.notion}`}
                  className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-6 h-6 mr-3 bg-gray-900 rounded text-white flex items-center justify-center text-sm font-bold">
                    N
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Notionで学習ログを確認</div>
                    <div className="text-sm text-gray-600">{selectedWeekData.notion}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴的な成果物のハイライト */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            特に人気の高い成果物
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">SNS自動運用GPT</h4>
              <p className="text-gray-700 mb-4">
                ブランドに合わせたコンテンツ企画から投稿まで完全自動化。エンゲージメント150%向上の実績。
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">ChatGPT API</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Buffer</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Canva</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">LINE連携RAG Bot</h4>
              <p className="text-gray-700 mb-4">
                社内FAQから適切な回答を検索し、LINEで自動回答。回答精度95%、対応時間70%短縮。
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">LINE API</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">RAG</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Vector DB</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            実際の成果物サンプルを今すぐ確認してみませんか？
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            無料体験で成果物サンプルを体験
          </a>
        </div>
      </div>
    </section>
  )
}