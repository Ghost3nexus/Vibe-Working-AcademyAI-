'use client'

import { useState, useEffect, useRef } from 'react'

interface KPI {
  value: string
  label: string
  description: string
  icon: string
  color: string
}

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  industry: string
  employeeCount: string
  avatar: string
  quote: string
  results: string[]
  videoThumbnail: string
  testimonialType: 'video' | 'text'
}

const kpis: KPI[] = [
  {
    value: '70%',
    label: '工数削減実績',
    description: '日常業務の効率化により平均70%の工数削減を実現',
    icon: '⚡',
    color: 'from-green-500 to-emerald-600'
  },
  {
    value: '80%',
    label: 'AI導入率',
    description: '受講完了企業の80%が実際にAI業務活用を継続実施',
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    value: '95%',
    label: '継続受講率',
    description: '充実したサポート体制により95%の高い継続率',
    icon: '📈',
    color: 'from-purple-500 to-violet-600'
  },
  {
    value: '150%',
    label: 'ROI向上',
    description: '投資対効果150%向上、平均8週間で投資回収',
    icon: '💰',
    color: 'from-orange-500 to-red-600'
  }
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '佐藤 健太',
    position: 'DX推進部 部長',
    company: '株式会社テクノソリューション',
    industry: 'IT・ソフトウェア',
    employeeCount: '従業員数: 450名',
    avatar: '👨‍💼',
    quote: 'Vibe Working アカデミーを導入してから、チーム全体のAIリテラシーが劇的に向上しました。特にSlackでの実務サポートが素晴らしく、困った時にすぐ専門家に相談できるのが心強いです。',
    results: [
      '資料作成時間 80% 短縮',
      'カスタマーサポート自動化',
      '全社員のAI活用率 90% 達成'
    ],
    videoThumbnail: 'video1-thumbnail.jpg',
    testimonialType: 'video'
  },
  {
    id: 2,
    name: '田中 美咲',
    position: 'マーケティング責任者',
    company: '株式会社グロースマーケティング',
    industry: 'マーケティング・広告',
    employeeCount: '従業員数: 120名',
    avatar: '👩‍💼',
    quote: 'SNS自動運用GPTの成果が想像以上でした。コンテンツ企画から投稿まで自動化でき、エンゲージメントが150%向上。ROIも8週間で回収できました。',
    results: [
      'SNS運用工数 90% 削減',
      'エンゲージメント 150% 向上',
      'リード獲得数 200% 増加'
    ],
    videoThumbnail: 'video2-thumbnail.jpg',
    testimonialType: 'video'
  },
  {
    id: 3,
    name: '山田 拓也',
    position: '代表取締役',
    company: '合同会社イノベーターズ',
    industry: 'コンサルティング',
    employeeCount: '従業員数: 35名',
    avatar: '👨‍💻',
    quote: '小さな会社でもAIを活用できることを証明してくれました。LINE連携RAG Botで顧客対応が24時間自動化でき、顧客満足度も向上しています。',
    results: [
      '顧客対応時間 70% 短縮',
      '24時間自動対応実現',
      '顧客満足度 30% 向上'
    ],
    videoThumbnail: 'video3-thumbnail.jpg',
    testimonialType: 'text'
  }
]

export default function Results() {
  const [visibleKPIs, setVisibleKPIs] = useState<number[]>([])
  const [selectedTestimonial, setSelectedTestimonial] = useState<number>(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const kpiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            kpis.forEach((_, index) => {
              setTimeout(() => {
                setVisibleKPIs((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (kpiRef.current) {
      observer.observe(kpiRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleVideoPlay = (testimonialId: number) => {
    setPlayingVideo(testimonialId)
  }

  return (
    <section id="results" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            数値で見る成果
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            確実な成果を実現する<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Vibe Working アカデミーの実績
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            450社以上の導入実績と1,200名を超える受講者が証明する<br />
            確実なROI向上と業務効率化
          </p>
        </div>

        {/* KPI数値 */}
        <div ref={kpiRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                visibleKPIs.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* グラデーション背景 */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${kpi.color} rounded-t-2xl`} />
              
              <div className="text-center">
                <div className="text-4xl mb-4">{kpi.icon}</div>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                  {kpi.value}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{kpi.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{kpi.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 受講者の声 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            受講者インタビュー
          </h3>

          {/* タブ切り替え */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-xl p-2 shadow-lg">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedTestimonial === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {testimonial.company.replace('株式会社', '').replace('合同会社', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 選択された証言の詳細 */}
          <div className="max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  selectedTestimonial === index ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {selectedTestimonial === index && (
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 左側: 動画/写真エリア */}
                    <div className="order-2 lg:order-1">
                      {testimonial.testimonialType === 'video' ? (
                        <div className="relative">
                          {playingVideo === testimonial.id ? (
                            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                              <iframe
                                src={`https://player.vimeo.com/video/testimonial-${testimonial.id}?autoplay=1&title=0&byline=0&portrait=0`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title={`${testimonial.name}インタビュー`}
                              />
                            </div>
                          ) : (
                            <div 
                              className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl overflow-hidden cursor-pointer group"
                              onClick={() => handleVideoPlay(testimonial.id)}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-opacity-30 transition-all duration-300">
                                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                  <div className="text-xl font-bold mb-2">{testimonial.name}様インタビュー</div>
                                  <div className="text-sm opacity-80">実際の導入ストーリーを聞く</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                          <div className="text-8xl mb-6">{testimonial.avatar}</div>
                          <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-blue-600 font-semibold">{testimonial.position}</div>
                        </div>
                      )}
                    </div>

                    {/* 右側: 証言内容 */}
                    <div className="order-1 lg:order-2">
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <div className="text-3xl mr-3">{testimonial.avatar}</div>
                          <div>
                            <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                            <div className="text-blue-600 font-semibold">{testimonial.position}</div>
                          </div>
                        </div>
                        <div className="text-gray-600 text-sm">
                          <div>{testimonial.company}</div>
                          <div>{testimonial.industry} | {testimonial.employeeCount}</div>
                        </div>
                      </div>

                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 pl-6 border-l-4 border-blue-600">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4">導入後の成果</h4>
                        <div className="space-y-3">
                          {testimonial.results.map((result, index) => (
                            <div key={index} className="flex items-center">
                              <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-700 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {testimonial.testimonialType === 'video' && playingVideo !== testimonial.id && (
                        <button
                          onClick={() => handleVideoPlay(testimonial.id)}
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          インタビュー動画を見る
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 導入企業ロゴ（仮想） */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            450社以上の企業様にご導入いただいています
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Tech Corp', 'Innovation Ltd', 'Digital Solutions', 'Future Systems', 'Smart Business', 'AI Ventures'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-semibold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            あなたの会社でも同様の成果を実現してみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              無料体験を申し込む
            </a>
            <a
              href="#subsidy"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              導入事例資料をダウンロード
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}