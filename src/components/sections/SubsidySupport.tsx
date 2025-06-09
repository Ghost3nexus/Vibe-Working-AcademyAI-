'use client'

import { useState } from 'react'

interface SubsidyProgram {
  id: string
  name: string
  description: string
  maxAmount: string
  coverage: string
  eligibility: string[]
  requirements: string[]
  icon: string
  color: string
  processingTime: string
}

const subsidyPrograms: SubsidyProgram[] = [
  {
    id: 'jinzai-kaihatsu',
    name: '人材開発支援助成金',
    description: '従業員のスキルアップを支援する国の助成金制度',
    maxAmount: '最大960万円',
    coverage: '受講費用の最大75%',
    eligibility: [
      '雇用保険適用事業所',
      '従業員1名以上',
      '過去に不正受給なし'
    ],
    requirements: [
      '事前計画届の提出',
      '受講時間の記録',
      '成果報告書の提出'
    ],
    icon: '👥',
    color: 'from-blue-500 to-blue-600',
    processingTime: '申請から2-3ヶ月'
  },
  {
    id: 'digital-oen',
    name: '中小企業デジタル化応援隊',
    description: 'デジタル化を進める中小企業への専門家派遣支援',
    maxAmount: '最大350万円',
    coverage: '費用の3分の2',
    eligibility: [
      '中小企業・小規模事業者',
      '従業員数300名以下',
      'デジタル化に取り組む意欲'
    ],
    requirements: [
      'デジタル化計画の策定',
      '専門家との面談実施',
      '成果の可視化'
    ],
    icon: '💻',
    color: 'from-green-500 to-green-600',
    processingTime: '申請から1-2ヶ月'
  },
  {
    id: 'dx-zeise',
    name: '中小企業投資促進税制',
    description: 'デジタル設備投資による税額控除・特別償却制度',
    maxAmount: '投資額の30%',
    coverage: '税額控除または特別償却',
    eligibility: [
      '資本金1億円以下',
      '従業員数1,000名以下',
      'デジタル化投資'
    ],
    requirements: [
      '設備投資計画書',
      '効果測定指標の設定',
      '投資効果の報告'
    ],
    icon: '💰',
    color: 'from-purple-500 to-purple-600',
    processingTime: '確定申告時に適用'
  },
  {
    id: 'custom-support',
    name: 'カスタム助成金提案',
    description: 'お客様の状況に最適な助成金・補助金をご提案',
    maxAmount: '企業状況により変動',
    coverage: '制度により異なる',
    eligibility: [
      '法人・個人事業主',
      'AI・DX導入意欲',
      '継続的な取り組み'
    ],
    requirements: [
      '無料相談の実施',
      'ヒアリング調査',
      '最適プランの提案'
    ],
    icon: '🎯',
    color: 'from-indigo-500 to-indigo-600',
    processingTime: '相談後1週間で提案'
  }
]

const subsidyFlow = [
  {
    step: 1,
    title: '無料相談',
    description: '助成金の専門家があなたの会社の状況をヒアリング',
    duration: '30分',
    icon: '📞'
  },
  {
    step: 2,
    title: '最適プラン提案',
    description: '利用可能な助成金・補助金と受講プランをご提案',
    duration: '1週間',
    icon: '📋'
  },
  {
    step: 3,
    title: '申請書類作成',
    description: '必要書類の作成を完全サポート（代行可能）',
    duration: '2-3週間',
    icon: '📝'
  },
  {
    step: 4,
    title: '受講開始',
    description: '助成金申請と並行してVibe Working アカデミー受講スタート',
    duration: '8週間',
    icon: '🚀'
  },
  {
    step: 5,
    title: '助成金受給',
    description: '成果報告書提出後、助成金を受給',
    duration: '1-2ヶ月',
    icon: '💰'
  }
]

export default function SubsidySupport() {
  const [selectedProgram, setSelectedProgram] = useState<string>(subsidyPrograms[0].id)
  const [showCalculator, setShowCalculator] = useState(false)
  const [companySize, setCompanySize] = useState<number>(10)
  const [selectedPlan, setSelectedPlan] = useState<string>('pro')

  const selectedProgramData = subsidyPrograms.find(p => p.id === selectedProgram)

  const calculateSubsidy = () => {
    const planCosts = {
      pro: 14800,
      team: 29800,
      enterprise: 198000
    }
    const cost = planCosts[selectedPlan as keyof typeof planCosts] * companySize * 2 // 2ヶ月分
    const subsidyRate = selectedProgram === 'jinzai-kaihatsu' ? 0.75 : 0.67
    return {
      totalCost: cost,
      subsidyAmount: Math.floor(cost * subsidyRate),
      selfPay: Math.floor(cost * (1 - subsidyRate))
    }
  }

  const calculation = calculateSubsidy()

  return (
    <section id="subsidy" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-custom">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            助成金・補助金サポート
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              助成金を活用して
            </span>
            AI研修をお得に導入
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            人材開発支援助成金（最大75%還付）をはじめ、各種助成金の申請をサポート。<br />
            AIチャットボットと専門家が書類準備をサポートいたします。
          </p>
        </div>

        {/* 助成金プログラム選択 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            利用可能な助成金・補助金制度
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {subsidyPrograms.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="text-3xl mb-3">{program.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{program.name}</h4>
                <div className="text-xs text-gray-600 mb-2">{program.maxAmount}</div>
                <div className="text-xs text-blue-600 font-semibold">{program.coverage}</div>
              </button>
            ))}
          </div>

          {/* 選択されたプログラムの詳細 */}
          {selectedProgramData && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 左側：基本情報 */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{selectedProgramData.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{selectedProgramData.name}</h4>
                      <div className="text-green-600 font-semibold">{selectedProgramData.maxAmount}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedProgramData.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-3">対象企業</h5>
                      <ul className="space-y-2">
                        {selectedProgramData.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 mb-3">必要手続き</h5>
                      <ul className="space-y-2">
                        {selectedProgramData.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 右側：サポート内容 */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Vibe Working アカデミーのサポート内容</h5>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">AIチャットボットによる書類作成支援</div>
                        <div className="text-sm text-gray-600">複雑な申請書類のドラフトをAIが自動生成</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">申請サポート実績</div>
                        <div className="text-sm text-gray-600">申請書類作成から受給まで伴走サポート</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">必要に応じて専門家がレビュー</div>
                        <div className="text-sm text-gray-600">最終確認を社労士・行政書士が実施</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-200">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">処理期間目安</div>
                      <div className="text-lg font-bold text-green-600">{selectedProgramData.processingTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 助成金受給フロー */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            助成金受給までの流れ
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {subsidyFlow.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                      {step.step}
                    </div>
                    {index < subsidyFlow.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                    )}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="text-xs text-blue-600 font-semibold">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 助成金シミュレーター */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">助成金シミュレーター</h3>
            <p className="text-gray-600">あなたの会社で実際にどれくらいの助成金が受給できるかシミュレーション<br />
              <span className="text-sm text-orange-600">※実際の支給額は審査により決定されます。事前の受講料お支払いが必要です。</span></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 左側：入力フォーム */}
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">従業員数</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={companySize}
                    onChange={(e) => setCompanySize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center text-lg font-bold text-blue-600 mt-2">{companySize}名</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">受講プラン</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['pro', 'team', 'enterprise'].map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`p-3 rounded-lg border-2 text-sm font-semibold transition-colors ${
                          selectedPlan === plan
                            ? 'border-blue-600 bg-blue-50 text-blue-900'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">適用助成金</label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    {subsidyPrograms.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 右側：計算結果 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">シミュレーション結果</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">受講料総額（2ヶ月）</span>
                  <span className="font-bold text-gray-900">¥{calculation.totalCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg">
                  <span className="text-green-800">助成金受給額</span>
                  <span className="font-bold text-green-800 text-xl">¥{calculation.subsidyAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg">
                  <span className="text-blue-800">実質自己負担</span>
                  <span className="font-bold text-blue-800 text-xl">¥{calculation.selfPay.toLocaleString()}</span>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
                  <div className="text-sm">コスト削減率</div>
                  <div className="text-2xl font-bold">
                    {Math.round((calculation.subsidyAmount / calculation.totalCost) * 100)}%OFF
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                  このシミュレーションで無料相談
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">助成金を活用して今すぐAI研修を開始</h3>
          <p className="text-xl mb-8 opacity-90">
            AIチャットボットが24時間対応で助成金申請をサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              AIサポートで申請を開始
            </a>
            <a
              href="/download/subsidy-guide.pdf"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              助成金活用ガイドをダウンロード
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}