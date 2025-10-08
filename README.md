# Full Throttle Vue

[![Deploy to GitHub Pages](https://github.com/YuukiNakazawa0731/full_throttle_v/actions/workflows/deploy.yml/badge.svg)](https://github.com/YuukiNakazawa0731/full_throttle_v/actions/workflows/deploy.yml)

Vue 3 + Vite をベースにしたモダンなポートフォリオサイトです。

🌐 **デモサイト**: [https://yuukinakazawa0731.github.io/full_throttle_v/](https://yuukinakazawa0731.github.io/full_throttle_v/)

## ✨ 主な特徴

- **Vue 3**（Composition API, `<script setup>` SFC）
- **Vite** による高速開発環境とビルド
- 📱 レスポンシブ対応デザイン
- 🎨 画像スライダーやモーダルなどのインタラクティブ UI
- 📊 JSON データによる動的コンテンツ管理
- ⏳ 初回アクセス時のローディングアニメーション
- 🎭 各種アニメーション・トランジション実装
- 🚀 GitHub Actions による自動デプロイ

## ディレクトリ構成

src/ assets/ # 画像・データ(JSON)など data/ # 各種データ(JSON) images/ # 画像ファイル components/
features/ # ページ・主要機能コンポーネント items/ # 汎用部品コンポーネント global/ # ヘッダー・フッター・ローディング等 styles/ # CSS ファイル App.vue # ルートコンポーネント main.js # エントリポイント

## 📋 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# ローカルでプレビュー
npm run preview
```

## 🚀 デプロイメント

このプロジェクトは GitHub Actions を使用して自動デプロイされます。

### GitHub Pages へのデプロイ

1. GitHub リポジトリの Settings > Pages で Source を "GitHub Actions" に設定
2. `main` ブランチにプッシュすると自動でデプロイが実行されます
3. 公開URL: `https://<username>.github.io/full_throttle_v/`

#### SPA ルーティング（404対策）
GitHub Pages は任意のパスへの直接アクセスで `index.html` を返さないため、`dist/index.html` を `dist/404.html` にコピーし、Pages の *Not Found* を SPA のエントリとして利用しています（Actions ワークフロー内 `Copy SPA 404` ステップ）。

#### リポジトリ名を変更した場合
`vite.config.js` の `base: '/full_throttle_v/'` を新しいリポジトリ名に合わせて更新してください。

#### カスタムドメインを使う場合
`base` を `'/'` に戻し、`public/CNAME` を作成してドメイン名を記述します（例: `example.com`）。

### その他のホスティングサービス

- **Netlify**: `npm run build` で生成される `dist` フォルダをアップロード
- **Vercel**: リポジトリを接続して自動デプロイ設定

## 📂 プロジェクト構造

```
src/
├── assets/              # 画像・データ(JSON)など
│   ├── data/           # 各種データ(JSON)
│   └── images/         # 画像ファイル
├── components/
│   ├── features/       # ページ・主要機能コンポーネント
│   │   ├── global/    # ヘッダー・フッター・ローディング等
│   │   └── pages/     # 各ページコンポーネント
│   └── items/         # 汎用部品コンポーネント
├── router/             # Vue Router設定
├── styles/             # CSS ファイル
├── App.vue            # ルートコンポーネント
└── main.js            # エントリポイント
```

## 🛠️ 技術スタック

- **フレームワーク**: Vue 3 (Composition API)
- **ビルドツール**: Vite
- **ルーティング**: Vue Router 4
- **スタイリング**: CSS3
- **デプロイ**: GitHub Actions + GitHub Pages

## 💡 開発メモ

- 各種データは `src/assets/data/` 配下の JSON で管理しています
- 画像は `src/assets/images/` 配下に配置してください
- ローディングアニメーションやスライダーなどはコンポーネント単位で管理しています
- 初回アクセス時のみローディングアニメーションが表示されます（sessionStorage で制御）
- GitHub Pages キャッシュが強い場合はクエリパラメータ（`?v=timestamp`）で強制更新可能
- 依存更新後はローカルで `npm run build && npm run preview` で崩れがないか確認

## 👤 作成者

**仲澤勇樹 (Nakazawa Yuuki)**

- GitHub: [@YuukiNakazawa0731](https://github.com/YuukiNakazawa0731)
- Portfolio: [Full Throttle Vue](https://yuukinakazawa0731.github.io/full_throttle_v/)
