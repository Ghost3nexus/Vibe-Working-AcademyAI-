'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'プログラミング経験がなくても受講できますか？',
    answer: 'はい、もちろん受講可能です。基礎コースでは、プログラミング未経験の方でも理解できるよう、Pythonの基本から丁寧に指導します。また、専任のメンターがサポートしますので、安心して学習を進められます。'
  },
  {
    id: 2,
    question: '受講期間はどのくらいですか？',
    answer: '基礎コースは3ヶ月、実践コースは4ヶ月、専門コースは6ヶ月が標準的な受講期間です。ただし、受講者のペースに合わせて柔軟に対応可能です。また、修了後も継続的な学習サポートを提供しています。'
  },
  {
    id: 3,
    question: '料金体系について教えてください',
    answer: '各コースの料金は、基礎コース：月額39,800円、実践コース：月額59,800円、専門コース：月額89,800円となっています。法人向けの団体割引や、複数コース同時受講の割引もご用意しています。'
  },
  {
    id: 4,
    question: 'オンラインでの受講は可能ですか？',
    answer: 'はい、すべてのコースはオンラインで受講可能です。ライブ配信による授業と、録画された講義動画の両方を提供しており、時間や場所に縛られることなく学習できます。'
  },
  {
    id: 5,
    question: '修了後のサポートはありますか？',
    answer: '修了後も、専用のコミュニティへの参加、月1回の勉強会、最新技術のアップデート情報の提供など、継続的なサポートを行っています。また、キャリア相談や転職支援も提供しています。'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom max-w-4xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mincho mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-wa-gray-700">
            受講を検討されている方からよくいただく質問をまとめました
          </p>
        </div>

        {/* FAQ アコーディオン */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-wa-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-wa-red focus:ring-opacity-50"
              >
                <h3 className="text-lg font-medium text-wa-black pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-wa-gray-500 transform transition-transform duration-300 ${
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
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(item.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-wa-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加の質問への導線 */}
        <div className="mt-12 text-center p-8 bg-wa-gray-100 rounded-lg">
          <p className="text-wa-gray-700 mb-4">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <a href="#contact" className="btn-secondary">
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  )
}