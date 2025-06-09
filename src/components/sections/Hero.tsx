'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-6 py-2 dark-card text-white rounded-full text-sm font-semibold mb-4">
              日本初・法人向け生成AIスクール
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">最速で業務に使える</span>
              <span className="gradient-text">
                AIスキルを習得
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              実務直結のAIテンプレート50種類と週次Sprint型カリキュラムで、<br />
              御社の全社員がAIを使いこなすチームへ。<br />
              <span className="font-semibold gradient-text">助成金対応・Slackサポート付き</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 dark-card rounded-lg backdrop-blur-sm hover-glow">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-xs text-gray-300">実務テンプレート</div>
              </div>
              <div className="text-center p-4 dark-card rounded-lg backdrop-blur-sm hover-glow">
                <div className="text-2xl font-bold gradient-text">48h</div>
                <div className="text-xs text-gray-300">サポート回答</div>
              </div>
              <div className="text-center p-4 dark-card rounded-lg backdrop-blur-sm hover-glow">
                <div className="text-2xl font-bold gradient-text">70%</div>
                <div className="text-xs text-gray-300">業務効率化</div>
              </div>
              <div className="text-center p-4 dark-card rounded-lg backdrop-blur-sm hover-glow">
                <div className="text-2xl font-bold gradient-text">AI</div>
                <div className="text-xs text-gray-300">助成金サポート</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 btn-gradient text-white font-bold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover-target"
              >
                7日間無料体験を始める
              </a>
              <a
                href="#subsidy"
                className="inline-flex items-center justify-center px-8 py-4 dark-card border-2 border-gray-600 text-white font-bold rounded-lg hover:border-purple-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover-target"
              >
                助成金資料をダウンロード
              </a>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative dark-card rounded-2xl p-8 shadow-2xl">
              <div className="text-sm text-gray-400 mb-4">週次Sprint成果物</div>
              <div className="space-y-4">
                <div className="dark-card p-4 rounded-lg hover-glow">
                  <div className="font-semibold text-white">SNS自動運用GPT</div>
                  <div className="text-sm text-gray-300">エンゲージメント150%向上を実現</div>
                </div>
                <div className="dark-card p-4 rounded-lg hover-glow">
                  <div className="font-semibold text-white">LINE連携RAG Bot</div>
                  <div className="text-sm text-gray-300">24時間自動対応を実現</div>
                </div>
                <div className="dark-card p-4 rounded-lg hover-glow">
                  <div className="font-semibold text-white">データ分析ダッシュボード</div>
                  <div className="text-sm text-gray-300">レポート作成時間80%短縮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}