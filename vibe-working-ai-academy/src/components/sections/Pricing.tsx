'use client'

interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  recommended?: boolean
  ctaText: string
  ctaStyle: 'primary' | 'secondary'
}

const teamPlan: PricingPlan = {
  id: 'team',
  name: 'チームプラン',
  price: 19800,
  period: '1アカウント/月額',
  description: 'チームでのAIスキル向上と業務効率化を目的とした法人向けプランです。5名様からご利用いただけます。',
  features: [
    '全動画学習コンテンツ',
    '実務で使えるテンプレート50種類以上',
    '専用SlackワークスペースでのQ&A',
    '週次オンラインSprint参加',
    '管理者向け学習進捗ダッシュボード',
    'チーム単位での成果発表会',
    '助成金・補助金申請サポート',
    'セキュリティ対応'
  ],
  recommended: true,
  ctaText: '導入に関するご相談',
  ctaStyle: 'primary',
}

export default function Pricing() {
  const handleCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            法人向け料金プラン
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            チームで始める<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI活用プラン
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            貴社の課題解決と人材育成を強力にサポートする、カスタマイズ可能なチームプランをご用意しています。
          </p>
        </div>

        {/* 料金プランカード */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-md rounded-2xl p-8 transition-all duration-300 border-2 ${
              teamPlan.recommended
                ? 'border-blue-600 bg-blue-50 shadow-2xl'
                : 'border-gray-200 bg-white shadow-lg'
            }`}
          >
            {teamPlan.recommended && (
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  一番人気
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-center text-gray-900">{teamPlan.name}</h3>
            <p className="text-center text-gray-600 mt-2 mb-6">{teamPlan.description}</p>
            <div className="text-center mb-8">
              <span className="text-4xl font-extrabold text-gray-900">
                ¥{teamPlan.price.toLocaleString()}
              </span>
              <span className="text-lg font-medium text-gray-600">
                /{teamPlan.period}
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              {teamPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCTAClick}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                teamPlan.ctaStyle === 'primary'
                  ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                  : 'bg-white text-blue-600 border-2 border-blue-600'
              }`}
            >
              {teamPlan.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}