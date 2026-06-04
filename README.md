# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


↓仮置き（要検討）
# プロジェクト構成ガイド

## ディレクトリ構造
- `src/components/`: 再利用可能なUIコンポーネント
  - `ui/`: 基本的なUIコンポーネント（Button, Input等）
  - `blocks/`: 複合コンポーネント（Card, Modal等）
  - `sections/`: ページのセクション（Hero, Features等）
- `src/layouts/`: ページレイアウト
- `src/pages/`: ルーティング用ページ
- `src/styles/`: グローバルスタイルとスタイル変数
- `src/utils/`: ユーティリティ関数
- `public/`: 静的アセット（画像、フォント等）

## 命名規則
1. コンポーネントファイル: パスカルケース（例: `Button.astro`）
2. ユーティリティファイル: キャメルケース（例: `formatDate.js`）
3. ページファイル: ケバブケース（例: `contact-us.astro`）

## インポート順序
1. 外部ライブラリ
2. Astroコンポーネント
3. ローカルコンポーネント
4. スタイルとアセット