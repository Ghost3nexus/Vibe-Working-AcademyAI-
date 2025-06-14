'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: 'general' | 'pricing' | 'implementation' | 'support'
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'AI知識がない社員でも受講できますか？',
    answer: 'はい、全く問題ありません。Vibe Working Academyは非エンジニア向けに設計されており、プログラミング経験不要で実務で使えるAIスキルを習得できます。実際に受講者の85%がAI未経験からスタートし、8週間で業務効率化を実現しています。',
    category: 'general'
  },
  {
    id: 2,
    question: '社内への導入・展開はどのように進めればよいですか？',
    answer: 'まずは5-10名の先行チームで開始することをお勧めします。Teamプラン以上では専任のカスタマーサクセスが導入計画の策定から社内展開まで伴走いたします。また、管理者ダッシュボードで進捗を可視化し、成果を経営陣に報告できます。',
    category: 'implementation'
  },
  {
    id: 3,
    question: '助成金は本当に受給できますか？',
    answer: '当社の助成金サポートでは95%以上の受給実績があります。人材開発支援助成金をはじめ、お客様の状況に最適な制度をご提案し、申請書類作成から受給まで完全サポートいたします。事前の無料診断も実施しています。',
    category: 'pricing'
  },
  {
    id: 5,
    question: '投資対効果（ROI）はどの程度見込めますか？',
    answer: '平均的に8週間で投資回収、年間150%のROI向上を実現しています。具体的には、業務時間70%短縮による人件費削減、AI活用による売上向上、DX推進による競争力強化などの効果が見込めます。',
    category: 'pricing'
  },
  {
    id: 6,
    question: '他社との情報共有は発生しますか？',
    answer: 'いいえ、企業機密は完全に保護されます。Slackワークスペースは企業別に分離され、作成された成果物やノウハウは各企業専用です。ただし、業界別の一般的なベストプラクティスは匿名化してコミュニティで共有されます。',
    category: 'general'
  },
  {
    id: 7,
    question: '受講中のサポート体制はどうなっていますか？',
    answer: 'Slackでの48時間以内回答保証、週次メンタリング、月次進捗レビューを実施しています。Enterpriseプランでは専任カスタマーサクセスが付き、導入効果測定や追加施策の提案も行います。',
    category: 'support'
  },
  {
    id: 8,
    question: '解約の条件や制約はありますか？',
    answer: '契約期間の縛りはなく、いつでも解約可能です。月額プランは月末締め、年額プランは日割り計算での返金に対応しています。解約時のデータエクスポートやマイグレーションサポートも提供いたします。',
    category: 'pricing'
  },
  {
    id: 10,
    question: '成果が出なかった場合の保証はありますか？',
    answer: '受講完了後30日以内に明確な業務効率化が実現できなかった場合、受講料の50%を返金いたします。また、追加サポートやカリキュラムの個別調整も無償で提供し、必ず成果を出していただけるよう伴走いたします。',
    category: 'support'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = [
    { id: 'all', name: 'すべて', count: faqData.length },
    { id: 'general', name: '一般的な質問', count: faqData.filter(item => item.category === 'general').length },
    { id: 'implementation', name: '導入・実装', count: faqData.filter(item => item.category === 'implementation').length },
    { id: 'pricing', name: '料金・助成金', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'support', name: 'サポート', count: faqData.filter(item => item.category === 'support').length }
  ]

  const filteredFAQ = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            よくあるご質問
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            企業導入に関する<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              疑問を解消
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            法人向けAI研修導入を検討されている方からよくいただく質問をカテゴリ別にまとめました
          </p>
        </div>

        {/* カテゴリタブ */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* FAQ アコーディオン */}
        <div className="space-y-4 mb-16">
          {filteredFAQ.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${
                    item.category === 'general' ? 'bg-gray-100 text-gray-700' :
                    item.category === 'implementation' ? 'bg-blue-100 text-blue-700' :
                    item.category === 'pricing' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(item.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の質問への導線 */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">他にもご質問がございますか？</h3>
          <p className="text-xl mb-8 opacity-90">
            お客様の状況に合わせた個別相談も承っております
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              無料相談を申し込む
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}