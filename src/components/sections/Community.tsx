'use client'

import { useState, useRef, useEffect } from 'react'

interface Channel {
  id: string
  name: string
  description: string
  memberCount: number
  industry: string
  icon: string
  color: string
  recentTopics: string[]
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  type: 'online' | 'offline' | 'hybrid'
  participants: number
  maxParticipants: number
  speaker: string
  description: string
  topics: string[]
}

const slackChannels: Channel[] = [
  {
    id: 'tech-startup',
    name: 'テック・スタートアップ',
    description: 'スタートアップ企業でのAI活用事例と課題を共有',
    memberCount: 234,
    industry: 'Tech',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500',
    recentTopics: [
      'MVP開発でのAI活用',
      'データ分析の自動化',
      '投資家向け資料作成術'
    ]
  },
  {
    id: 'marketing-sales',
    name: 'マーケティング・営業',
    description: 'マーケティング自動化とセールス効率化の実践',
    memberCount: 198,
    industry: 'Marketing',
    icon: '📈',
    color: 'from-green-500 to-emerald-500',
    recentTopics: [
      'SNS運用完全自動化',
      'リード獲得200%増の秘訣',
      'メール配信最適化AI'
    ]
  },
  {
    id: 'consulting',
    name: 'コンサルティング',
    description: 'コンサルタントの資料作成とクライアント提案の効率化',
    memberCount: 156,
    industry: 'Consulting',
    icon: '💼',
    color: 'from-purple-500 to-violet-500',
    recentTopics: [
      '提案書作成時間80%短縮',
      'データ分析レポート自動化',
      'クライアント別カスタマイズ'
    ]
  },
  {
    id: 'manufacturing',
    name: '製造業・ものづくり',
    description: '製造業でのAI導入とDX推進の実例',
    memberCount: 142,
    industry: 'Manufacturing',
    icon: '🏭',
    color: 'from-orange-500 to-red-500',
    recentTopics: [
      '品質管理の自動化',
      '在庫最適化システム',
      '保守点検スケジュール自動生成'
    ]
  },
  {
    id: 'finance',
    name: '金融・フィンテック',
    description: '金融業界でのAI活用とリスク管理',
    memberCount: 89,
    industry: 'Finance',
    icon: '💰',
    color: 'from-indigo-500 to-blue-500',
    recentTopics: [
      'リスク分析の自動化',
      '顧客セグメンテーション',
      'レポート作成効率化'
    ]
  },
  {
    id: 'healthcare',
    name: 'ヘルスケア・医療',
    description: '医療現場でのAI活用とデータ管理',
    memberCount: 76,
    industry: 'Healthcare',
    icon: '⚕️',
    color: 'from-pink-500 to-rose-500',
    recentTopics: [
      '患者データ分析',
      '診療記録の効率化',
      'スケジュール最適化'
    ]
  }
]

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'AIツール活用事例発表会',
    date: '2024-07-15',
    time: '19:00-21:00',
    location: '渋谷WeWork + オンライン',
    type: 'hybrid',
    participants: 67,
    maxParticipants: 100,
    speaker: '田中 AI推進部長（株式会社テクノソリューション）',
    description: '実際にVibe Working アカデミーで学んだ内容を活用し、社内で70%の業務効率化を実現した事例を詳しく解説',
    topics: ['SNS自動運用', 'データ分析自動化', 'ROI計算方法']
  },
  {
    id: 2,
    title: 'スタートアップ向けAI導入ワークショップ',
    date: '2024-07-22',
    time: '14:00-17:00',
    location: 'オンライン開催',
    type: 'online',
    participants: 45,
    maxParticipants: 50,
    speaker: '佐藤 創業者（合同会社イノベーターズ）',
    description: '少人数チームでも実現できるAI活用術と、投資対効果を最大化する実装方法',
    topics: ['MVP開発でのAI活用', '少数精鋭チーム運営', 'コスト最適化']
  },
  {
    id: 3,
    title: '製造業AI導入成功事例シェア会',
    date: '2024-07-29',
    time: '18:30-20:30',
    location: '大阪梅田スカイビル + オンライン',
    type: 'hybrid',
    participants: 23,
    maxParticipants: 80,
    speaker: '山田 DX推進責任者（製造業A社）',
    description: '伝統的な製造業でも実現できるAI導入プロセスと、現場での受け入れ方法',
    topics: ['品質管理自動化', '在庫最適化', '現場スタッフ教育法']
  }
]

export default function Community() {
  const [selectedChannel, setSelectedChannel] = useState<string>(slackChannels[0].id)
  const [visibleChannels, setVisibleChannels] = useState<number[]>([])
  const [showAllEvents, setShowAllEvents] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            slackChannels.forEach((_, index) => {
              setTimeout(() => {
                setVisibleChannels((prev) => [...prev, index])
              }, index * 150)
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

  const selectedChannelData = slackChannels.find(channel => channel.id === selectedChannel)
  const totalMembers = slackChannels.reduce((sum, channel) => sum + channel.memberCount, 0)

  return (
    <section id="community" ref={sectionRef} className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            コミュニティ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Vibe Coding
            </span>
            <br />コミュニティで共に成長
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            業界別のSlackチャンネルで実践的な情報交換。<br />
            月次オフライン・オンラインイベントで直接交流し、AI活用の最新トレンドをキャッチアップ
          </p>
        </div>

        {/* コミュニティ概要 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalMembers.toLocaleString()}+</div>
            <div className="text-gray-700 font-semibold">アクティブメンバー</div>
            <div className="text-sm text-gray-600 mt-2">6つの業界別チャンネル</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">📅</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">毎月3回</div>
            <div className="text-gray-700 font-semibold">勉強会・交流会</div>
            <div className="text-sm text-gray-600 mt-2">東京・大阪・オンライン開催</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🏆</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700 font-semibold">問題解決率</div>
            <div className="text-sm text-gray-600 mt-2">48時間以内に回答</div>
          </div>
        </div>

        {/* 業界別Slackチャンネル */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            業界別Slackチャンネル
          </h3>

          {/* チャンネル選択 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {slackChannels.map((channel, index) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-300 transform ${
                  selectedChannel === channel.id
                    ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                } ${
                  visibleChannels.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <div className="text-3xl mr-3">{channel.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{channel.name}</h4>
                    <div className="text-xs text-gray-600">{channel.memberCount}名参加中</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {channel.description}
                </p>
              </button>
            ))}
          </div>

          {/* 選択されたチャンネルの詳細 */}
          {selectedChannelData && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 左側：チャンネル情報 */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{selectedChannelData.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{selectedChannelData.name}</h4>
                      <div className="text-gray-600">{selectedChannelData.memberCount}名のメンバー</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedChannelData.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-900 mb-3">最近の人気トピック</h5>
                    <div className="space-y-2">
                      {selectedChannelData.recentTopics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-sm text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右側：参加メリット */}
                <div className={`bg-gradient-to-br ${selectedChannelData.color} bg-opacity-10 rounded-xl p-6`}>
                  <h5 className="text-xl font-bold text-gray-900 mb-4">このチャンネルで得られること</h5>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">実践的なノウハウ共有</div>
                        <div className="text-sm text-gray-600">同業界での具体的なAI活用事例</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">専門家からの直接回答</div>
                        <div className="text-sm text-gray-600">業界特化の課題に対する具体的解決策</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">ビジネスネットワーキング</div>
                        <div className="text-sm text-gray-600">同じ課題を持つ企業との協業機会</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                      このチャンネルに参加する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 月次イベント */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            今月の開催予定イベント
          </h3>

          <div className="space-y-6">
            {upcomingEvents.slice(0, showAllEvents ? upcomingEvents.length : 2).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* 左側：イベント基本情報 */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date} {event.time}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'online' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'offline' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type === 'online' ? 'オンライン' : 
                         event.type === 'offline' ? 'オフライン' : 'ハイブリッド'}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-900 mb-2">スピーカー</div>
                      <div className="text-sm text-gray-700">{event.speaker}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 右側：参加情報 */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {event.participants}/{event.maxParticipants}名
                      </div>
                      <div className="text-sm text-gray-600">参加予定</div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      />
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 mb-3">
                      参加申し込み
                    </button>

                    <div className="text-center text-xs text-gray-600">
                      参加費無料（Vibe Working アカデミー受講者限定）
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllEvents && upcomingEvents.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllEvents(true)}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                他のイベントも見る
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">コミュニティでAI活用を加速</h3>
          <p className="text-xl mb-8 opacity-90">
            一人で学ぶより、仲間と一緒に。業界のプロフェッショナルとの交流で更なる成長を
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              コミュニティに参加する
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              イベント詳細を問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}