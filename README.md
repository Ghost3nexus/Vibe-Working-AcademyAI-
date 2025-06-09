# Vibe Working アカデミー

法人向け生成AIスクール - 実務直結のAIスキルを最速で習得

## 🌟 プロジェクト概要

Vibe Working アカデミーは、企業の全社員がAIを活用して業務効率化を実現できるよう、実践的なカリキュラムと手厚いサポートを提供する法人向けAI教育プラットフォームです。

## ✨ 主な特徴

### 🎯 実践的なカリキュラム
- **50種類のAIテンプレート** - すぐに業務で使える実践的なテンプレートを提供
- **8週間の週次Sprintカリキュラム** - 毎週1つずつ成果物を作成しながら学習
- **最新AIツールの提供** - Dify, Make.com, CapCutなどの最新ツールを学習環境に含む

### 👥 充実したサポート体制
- **Slackでの48時間内回答保証** - 実務家が質問に迅速対応
- **コミュニティイベント** - 定期的なワークショップやセミナーを開催
- **カスタマーサクセス** - 導入から定着まで伴走

### 💰 助成金サポート
- **AIチャットボットによる申請支援** - 人材開発支援助成金（最大75%還付）の申請プロセスを自動化
- **書類作成の自動化** - 複雑な申請書類をAIがドラフト作成
- **専門家レビュー** - 最終確認は提携の社労士・行政書士が実施

## 🚀 技術スタック

### フロントエンド
- **Next.js 14.2.3** - Reactフレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS
- **React 18.3** - UIライブラリ

### デプロイ
- **Vercel** - ホスティングプラットフォーム
- **GitHub Actions** - CI/CD

## 🔧 開発環境のセットアップ

### 前提条件

- Node.js (v18以上)
- npm または yarn パッケージマネージャー

### インストール手順

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/Ghost3nexus/Vibe-Working-AcademyAI-.git
   cd vibe-working-ai-academy
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

## 📁 プロジェクト構成

```
vibe-working-ai-academy/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   └── globals.css   # グローバルCSS
│   └── components/
│       └── sections/     # ページセクションコンポーネント
│           ├── Hero.tsx
│           ├── Services.tsx
│           ├── Curriculum.tsx
│           ├── Pricing.tsx
│           ├── SubsidySupport.tsx
│           ├── FAQ.tsx
│           └── ContactForm.tsx
├── public/              # 静的アセット
├── package.json         # プロジェクト設定
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── vercel.json          # Vercel設定
```

## 📝 スクリプト

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "vercel-build": "next build"
}
```

## 🌐 デプロイ

本プロジェクトはVercelでホスティングされており、`main`ブランチへのpush時に自動的にデプロイされます。

## 🤝 Contributing

プルリクエストを歓迎します！改善提案がある場合は、Issueを作成してください。

## 📧 Contact

ご質問やサポートについては、Vibe Working アカデミーチームまでお問い合わせください。

## 📜 License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ❤️ by the Vibe Working アカデミー team
</p>
