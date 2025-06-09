export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            日本初・法人向け生成AIスクール
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <div className="mb-2">最速で業務に使える</div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AIスキルを習得
            </div>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            実務直結のAIテンプレート50種類と週次Sprint型カリキュラムで、御社の全社員がAIを使いこなすチームへ。
            <span className="text-blue-600 font-semibold"> 助成金対応・Slackサポート付き</span>
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">実務テンプレート</div>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">48h</div>
              <div className="text-sm text-gray-600">サポート回答</div>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">70%</div>
              <div className="text-sm text-gray-600">業務効率化</div>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">助成金対応</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg">
              7日間無料体験を始める
            </button>
            <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-lg">
              助成金資料をダウンロード
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              450社導入実績
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              95%助成金受給率
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              8週間で成果実現
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              実際の成果物をプレビュー
            </h2>
            <p className="text-xl text-gray-600">
              8週間で作成する実務直結のAIソリューション
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SNS自動運用GPT</h3>
              <p className="text-gray-700 mb-4">
                ブランドに合わせたコンテンツ企画から投稿まで完全自動化
              </p>
              <div className="text-blue-600 font-semibold">エンゲージメント150%向上</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LINE連携RAG Bot</h3>
              <p className="text-gray-700 mb-4">
                社内FAQから適切な回答を検索し、LINEで自動回答
              </p>
              <div className="text-green-600 font-semibold">対応時間70%短縮</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">データ分析ダッシュボード</h3>
              <p className="text-gray-700 mb-4">
                Excel/CSV分析とビジュアライゼーションの自動化
              </p>
              <div className="text-purple-600 font-semibold">レポート作成時間80%短縮</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-xl text-gray-600">個人学習からエンタープライズまで</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ¥5,500<span className="text-base text-gray-600">/月</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ 基礎学習コンテンツ</li>
                <li>✓ テンプレート10種類</li>
                <li>✓ コミュニティ参加</li>
              </ul>
              <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-500">
                選択する
              </button>
            </div>

            {/* Pro - Recommended */}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                推奨
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">
                ¥14,800<span className="text-base opacity-75">/月</span>
              </div>
              <ul className="text-sm space-y-2 mb-6">
                <li>✓ 全コンテンツアクセス</li>
                <li>✓ テンプレート50種類</li>
                <li>✓ Slackサポート</li>
                <li>✓ 個別メンタリング</li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100">
                選択する
              </button>
            </div>

            {/* Team */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ¥29,800<span className="text-base text-gray-600">/月〜</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ チーム機能</li>
                <li>✓ 進捗レポート</li>
                <li>✓ 管理者ダッシュボード</li>
              </ul>
              <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                選択する
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ¥198,000<span className="text-base text-gray-600">/月〜</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ 助成金申請サポート</li>
                <li>✓ 専任カスタマーサクセス</li>
                <li>✓ オンサイト研修</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg">
                相談する
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">AIVANCE</h3>
          <p className="text-gray-400 mb-8">法人向け生成AIスクール</p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-blue-400">プライバシーポリシー</a>
            <a href="#" className="hover:text-blue-400">利用規約</a>
            <a href="#" className="hover:text-blue-400">お問い合わせ</a>
          </div>
        </div>
      </div>
    </div>
  )
}