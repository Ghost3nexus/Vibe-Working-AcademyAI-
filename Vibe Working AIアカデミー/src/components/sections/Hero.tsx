'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-wa-red opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-wa-blue opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* サブタイトル */}
          <div className={`mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-4 py-2 bg-wa-red bg-opacity-10 text-wa-red rounded-full text-sm font-medium">
              ビジネスの未来を創る、AI教育プラットフォーム
            </span>
          </div>

          {/* メインタイトル */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-mincho mb-8 leading-tight transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block text-wa-black">Vibe Working</span>
            <span className="block mt-2 text-wa-red">AIアカデミー</span>
          </h1>

          {/* 説明文 */}
          <p className={`text-lg sm:text-xl text-wa-gray-700 mb-12 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            AIの基礎から実践まで、体系的に学べる教育プログラム。<br />
            中小企業のDX推進と、ビジネスパーソンのスキルアップを支援します。
          </p>

          {/* CTA ボタン */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="#contact" className="btn-primary">
              今すぐ申し込む
            </Link>
            <Link href="#services" className="btn-secondary">
              詳しく見る
            </Link>
          </div>

          {/* スクロールインジケーター */}
          <div className={`mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-wa-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}