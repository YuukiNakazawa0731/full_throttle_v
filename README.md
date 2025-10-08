# Full Throttle Vue

Vue 3 + Vite をベースにしたモダンなポートフォリオサイトです。

🌐 **デモサイト**: [https://yuukinakazawa0731.github.io/full_throttle_v/](https://yuukinakazawa0731.github.io/full_throttle_v/)

## 主な特徴

- **Vue 3**（Composition API, `<script setup>` SFC）
- **Vite** による高速開発環境とビルド
- レスポンシブ対応デザイン
- 画像スライダーやモーダルなどのインタラクティブ UI
- JSON データによる動的コンテンツ管理
- 初回アクセス時のローディングアニメーション
- 各種アニメーション・トランジション実装
- GitHub Actions による自動デプロイ

## ディレクトリ構成

src/ assets/ # 画像・データ(JSON)など data/ # 各種データ(JSON) images/ # 画像ファイル components/
features/ # ページ・主要機能コンポーネント items/ # 汎用部品コンポーネント global/ # ヘッダー・フッター・ローディング等 styles/ # CSS ファイル App.vue # ルートコンポーネント main.js # エントリポイント

## セットアップ

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

## デプロイメント

このプロジェクトは GitHub Actions を使用して自動デプロイされます。

## 📂 プロジェクト構造

```
src/
├── assets/             # 画像・データ(JSON)など
│   ├── data/           # 各種データ(JSON)
│   └── images/         # 画像ファイル
├── components/
│   ├── features/       # ページ・主要機能コンポーネント
│   │   ├── global/     # ヘッダー・フッター・ローディング等
│   │   └── pages/      # 各ページコンポーネント
│   └── items/          # 汎用部品コンポーネント
├── router/             # Vue Router設定
├── styles/             # CSS ファイル
├── App.vue             # ルートコンポーネント
└── main.js             # エントリポイント
```

## 技術スタック

- **フレームワーク**: Vue 3 (Composition API)
- **ビルドツール**: Vite
- **ルーティング**: Vue Router 4
- **スタイリング**: CSS3
- **デプロイ**: GitHub Actions + GitHub Pages

## 開発メモ

- 各種データは `src/assets/data/` 配下の JSON で管理
- 画像は `src/assets/images/` 配下に配置
- ローディングアニメーションやスライダーなどはコンポーネント単位で管理
- 初回アクセス時のみローディングアニメーションが表示（sessionStorage で制御）
- GitHub Pages キャッシュが強い場合はクエリパラメータ（`?v=timestamp`）で強制更新可能
- 依存更新後はローカルで `npm run build && npm run preview` で崩れがないか確認

## 作成者

**仲澤勇樹 (Nakazawa Yuuki)**

- GitHub: [@YuukiNakazawa0731](https://github.com/YuukiNakazawa0731)
- Portfolio: [Full Throttle Vue](https://yuukinakazawa0731.github.io/full_throttle_v/)
