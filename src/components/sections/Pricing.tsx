'use client'

import { useState } from 'react'

interface PricingPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  period: string
  description: string
  features: string[]
  limitations?: string[]
  recommended?: boolean
  ctaText: string
  ctaStyle: 'primary' | 'secondary'
  badge?: string
  stripeId?: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 5500,
    period: '月額',
    description: 'AI学習を始める個人・小規模チーム向け',
    features: [
      '動画学習コンテンツ（基礎編）',
      'テンプレート10種類',
      'Q&A質問 1回/月',
      'コミュニティ閲覧権限',
      '学習進捗管理'
    ],
    limitations: [
      'Slackサポートなし',
      '週次Sprintなし'
    ],
    ctaText: 'Starterを選ぶ',
    ctaStyle: 'secondary',
    stripeId: 'price_starter_monthly'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 14800,
    originalPrice: 29600,
    period: '月額',
    description: '本格的なAI活用を目指すビジネスパーソン向け',
    features: [
      '全動画学習コンテンツ',
      '実務テンプレート50種類',
      '週次Sprint参加',
      'Slackでの質問無制限',
      'Dify 10$/月分込み',
      'Make.com Pro込み',
      '個別メンタリング月1回',
      'GitHub成果物管理'
    ],
    recommended: true,
    badge: 'β版50%OFF',
    ctaText: 'Proを選ぶ（推奨）',
    ctaStyle: 'primary',
    stripeId: 'price_pro_monthly_beta'
  },
  {
    id: 'team',
    name: 'Team',
    price: 29800,
    period: '月額〜',
    description: 'チーム全体でAI導入を進める企業向け',
    features: [
      'Pro プランの全機能',
      '専用Slackワークスペース',
      'チーム進捗レポート',
      '月次勉強会参加権',
      'カスタムテンプレート作成',
      '成果発表会参加',
      '導入サポート',
      '管理者ダッシュボード'
    ],
    ctaText: '無料相談を申し込む',
    ctaStyle: 'secondary',
    stripeId: 'price_team_monthly'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 198000,
    period: '月額〜',
    description: '全社的なAI導入・DX推進を行う大企業向け',
    features: [
      'Team プランの全機能',
      '教材カスタマイズ',
      '助成金申請伴走',
      '個別コンサルティング',
      'オンサイト研修',
      '専任カスタマーサクセス',
      'API連携サポート',
      'セキュリティ監査対応',
      '導入効果測定レポート'
    ],
    ctaText: '企業向け相談',
    ctaStyle: 'primary',
    badge: '助成金対応',
    stripeId: 'price_enterprise_monthly'
  }
]

const additionalFeatures = [
  {
    category: '学習サポート',
    items: [
      { name: '48時間以内回答保証', included: [false, true, true, true] },
      { name: '個別メンタリング', included: [false, true, true, true] },
      { name: '専用Slackワークスペース', included: [false, false, true, true] },
      { name: '専任カスタマーサクセス', included: [false, false, false, true] }
    ]
  },
  {
    category: 'ツール・環境',
    items: [
      { name: 'Dify利用料込み', included: [false, true, true, true] },
      { name: 'Make.com Pro込み', included: [false, true, true, true] },
      { name: 'GitHub Enterprise', included: [false, false, true, true] },
      { name: 'セキュリティ監査', included: [false, false, false, true] }
    ]
  },
  {
    category: 'サポート・相談',
    items: [
      { name: '助成金申請サポート', included: [false, false, true, true] },
      { name: 'オンサイト研修', included: [false, false, false, true] },
      { name: 'API連携サポート', included: [false, false, false, true] },
      { name: 'カスタム開発相談', included: [false, false, false, true] }
    ]
  }
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [showComparison, setShowComparison] = useState(false)

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'yearly' ? Math.floor(price * 0.8) : price
  }

  const handleCTAClick = (plan: PricingPlan) => {
    if (plan.id === 'pro') {
      // Stripe決済へリダイレクト（仮想）
      window.open(`https://checkout.stripe.com/pay/${plan.stripeId}`, '_blank')
    } else if (plan.id === 'team' || plan.id === 'enterprise') {
      // 相談フォームへスクロール
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // 無料体験フォームへ
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            料金プラン
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            あなたに最適な<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              プランを選択
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            個人学習からエンタープライズまで、ニーズに合わせて選べる4つのプラン
          </p>

          {/* 年額・月額切り替え */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              月額
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              年額 <span className="text-green-600 text-sm ml-1">20%割引</span>
            </button>
          </div>
        </div>

        {/* 料金カード */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.recommended
                  ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white shadow-lg hover:border-blue-300'
              }`}
            >
              {/* バッジ */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  plan.recommended ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* プラン名 */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* 価格 */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through mr-2">
                      ¥{plan.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ¥{getDiscountedPrice(plan.price).toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                {billingPeriod === 'yearly' && plan.period === '月額' && (
                  <div className="text-sm text-green-600 font-semibold mt-1">
                    年額: ¥{(getDiscountedPrice(plan.price) * 12).toLocaleString()}
                  </div>
                )}
              </div>

              {/* 機能リスト */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.limitations && plan.limitations.map((limitation, idx) => (
                  <li key={`limit-${idx}`} className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500 text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>

              {/* CTA ボタン */}
              <button
                onClick={() => handleCTAClick(plan)}
                className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-200 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* 機能比較表 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className={`w-5 h-5 mr-2 transform transition-transform ${showComparison ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              詳細機能比較表を{showComparison ? '隠す' : '見る'}
            </button>
          </div>

          {showComparison && (
            <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-900 font-bold">機能</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.id} className="text-center py-4 px-6">
                        <div className="text-gray-900 font-bold">{plan.name}</div>
                        <div className="text-sm text-gray-600">¥{getDiscountedPrice(plan.price).toLocaleString()}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {additionalFeatures.map((category) => (
                    <>
                      <tr key={category.category}>
                        <td colSpan={5} className="py-4 px-6 bg-blue-50 text-blue-900 font-bold text-sm">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIdx) => (
                        <tr key={`${category.category}-${itemIdx}`} className="border-b border-gray-200">
                          <td className="py-3 px-6 text-gray-700">{item.name}</td>
                          {item.included.map((included, planIdx) => (
                            <td key={planIdx} className="text-center py-3 px-6">
                              {included ? (
                                <svg className="w-5 h-5 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* よくある質問（料金関連） */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">料金に関するよくある質問</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">無料体験期間はありますか？</h4>
              <p className="text-gray-700 text-sm">はい、すべてのプランで7日間の無料体験をご利用いただけます。</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">助成金は利用できますか？</h4>
              <p className="text-gray-700 text-sm">人材開発支援助成金など、各種助成金申請をサポートいたします。</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">解約はいつでもできますか？</h4>
              <p className="text-gray-700 text-sm">はい、いつでも簡単に解約可能です。日割り計算での返金にも対応。</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">プラン変更は可能ですか？</h4>
              <p className="text-gray-700 text-sm">いつでも上位・下位プランへの変更が可能です。差額は日割り計算。</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            まずは無料体験で、Vibe Working アカデミーの価値を実感してください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              7日間無料体験を始める
            </a>
            <a
              href="#subsidy"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              助成金相談をする
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}