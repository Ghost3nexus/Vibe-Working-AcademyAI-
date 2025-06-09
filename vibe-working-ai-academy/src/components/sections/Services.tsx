'use client'

import { useEffect, useRef, useState } from 'react'

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  icon: string
}

const services: Service[] = [
  {
    id: 1,
    title: '基礎コース',
    description: 'AIの基本概念から実装まで、初心者でも安心して学べるプログラム',
    features: ['AI/MLの基礎理論', 'Pythonプログラミング', 'データ分析入門', '実践的な演習'],
    icon: '🎓'
  },
  {
    id: 2,
    title: '実践コース',
    description: 'ビジネスで活用できるAI技術を、実際のケーススタディを通じて習得',
    features: ['ビジネスケース分析', 'AI導入戦略', 'ROI最適化', 'プロジェクト管理'],
    icon: '💼'
  },
  {
    id: 3,
    title: '専門コース',
    description: '特定の業界・分野に特化したAI活用法を深く学ぶ',
    features: ['業界別AI活用', 'カスタムモデル開発', '高度な最適化', '専門家による指導'],
    icon: '🚀'
  }
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((service, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, service.id])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-wa-gray-100">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mincho mb-4">
            選べる3つのコース
          </h2>
          <p className="text-lg text-wa-gray-700 max-w-2xl mx-auto">
            あなたのレベルと目的に合わせて、最適な学習プログラムをご用意しています
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-wa-white rounded-lg shadow-lg p-8 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                visibleCards.includes(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* アイコン */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* タイトル */}
              <h3 className="text-2xl font-mincho mb-4 text-wa-black">
                {service.title}
              </h3>

              {/* 説明 */}
              <p className="text-wa-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* 特徴リスト */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-wa-green mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-wa-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 詳細リンク */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center text-wa-red hover:text-red-700 font-medium"
                >
                  詳しく見る
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 追加情報 */}
        <div className="mt-16 text-center">
          <p className="text-wa-gray-700 mb-6">
            どのコースが最適かお悩みの方は、お気軽にご相談ください
          </p>
          <a href="#contact" className="btn-primary">
            無料相談を申し込む
          </a>
        </div>
      </div>
    </section>
  )
}