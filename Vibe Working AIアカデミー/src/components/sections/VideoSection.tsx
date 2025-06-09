'use client'

import { useState, useEffect } from 'react'

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('video-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section id="video" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div id="video-section" className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* セクションタイトル */}
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                3分でわかる
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AIVANCE
                </span>
                の実際の学習体験
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                実際の受講生がどのように週次Sprintで成果物を作成し、<br />
                業務効率化を実現しているかをご覧ください
              </p>
            </div>

            {/* 動画プレーヤー */}
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {!isPlaying ? (
                  // サムネイル + 再生ボタン
                  <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center cursor-pointer group" onClick={handlePlayVideo}>
                    {/* サムネイル背景 */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                    
                    {/* プレビューコンテンツ */}
                    <div className="text-center z-10">
                      <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        実際の受講風景を見る
                      </h3>
                      <p className="text-white text-opacity-80 mb-6">
                        週次Sprintでどんな成果物が作れるのか、<br />
                        実際の受講生の画面を見ながら体験できます
                      </p>
                      <div className="flex justify-center space-x-8 text-sm text-white text-opacity-60">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                          HD画質
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          3分間
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                          </svg>
                          日本語字幕
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // 実際の動画埋め込み（Vimeo）
                  <div className="aspect-video">
                    <iframe
                      src="https://player.vimeo.com/video/sample?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="AIVANCE 紹介動画"
                    />
                  </div>
                )}
              </div>

              {/* 動画の特徴 */}
              {!isPlaying && (
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">実際の制作過程</h4>
                    <p className="text-sm text-gray-600">週次Sprintで実際にAIツールを使って成果物を作る様子</p>
                  </div>

                  <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">ROI実績データ</h4>
                    <p className="text-sm text-gray-600">工数削減70%などの具体的な成果指標を紹介</p>
                  </div>

                  <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">受講生インタビュー</h4>
                    <p className="text-sm text-gray-600">実際の導入企業の担当者が語る成功事例</p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-6">
                  動画をご覧いただいた方には特別資料をプレゼント
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    カリキュラム詳細資料をダウンロード
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}