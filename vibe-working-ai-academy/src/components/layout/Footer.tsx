export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wa-black text-wa-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* ロゴ・会社情報 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-mincho mb-4">
              Vibe Working AIアカデミー
            </h3>
            <p className="text-wa-gray-400 mb-4 leading-relaxed">
              AIを学び、ビジネスを変革する。<br />
              実践的なAI教育で、未来のビジネスリーダーを育成します。
            </p>
            <div className="flex space-x-4">
              {/* SNSリンク */}
              <a
                href="#"
                className="text-wa-gray-400 hover:text-wa-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-wa-gray-400 hover:text-wa-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-wa-gray-400 hover:text-wa-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* クイックリンク */}
          <div>
            <h4 className="text-lg font-medium mb-4">コース</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  基礎コース
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  実践コース
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  専門コース
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  企業研修
                </a>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h4 className="text-lg font-medium mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  講師紹介
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-wa-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* コピーライト */}
            <p className="text-wa-gray-400 text-sm">
              © {currentYear} Vibe Working AIアカデミー. All rights reserved.
            </p>

            {/* 法的リンク */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                利用規約
              </a>
              <a href="#" className="text-wa-gray-400 hover:text-wa-white transition-colors">
                特定商取引法に基づく表記
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}