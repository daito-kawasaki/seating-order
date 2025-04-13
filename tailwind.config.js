// tailwind.config.js

// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // v4ではcontentの指定が必須かつ重要です。
  // プロジェクトのファイル構造に合わせて、Tailwindクラスを使用しているファイルを指定してください。
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router を使用している場合
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components ディレクトリ
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router を使用している場合
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src ディレクトリを使用している場合
    // 他にもテンプレートファイルがあれば追加
  ],
  // safelistの設定はv4でも有効です
  safelist: [
    { pattern: /bg-./ },
    { pattern: /text-./ },
    { pattern: /border-./ },
  ],
  theme: {
    // デフォルトのスクリーンサイズを上書き
    screens: {
      sp: "22.5rem",
      sm: "30rem",
      md: "48rem",
      lg: "64rem",
      xl: "85.375rem",
    },
    // デフォルトのテーマ設定を拡張（追加・上書き）
    extend: {
      spacing: {
        7.5: "1.875rem", //30px
        12.5: "3.25rem",
        14.5: "3.75rem", //60px
        50: "3.125rem", //50px
        140: "8.75rem", //140px
        75: "18.75rem", //300px
        24.5: "6.25rem", //392px
        500: "31.25rem", //500px
      },
      fontSize: {
        "3.5xl": "2.0625rem",
        "2.5xl": "1.59375rem",
        44: "2.75rem",
      },
      width: {
        32.5: "8.5rem",
        40.5: "10.625rem",
        53: "13.75rem",
        190: "11.875rem",
        235: "14.6875rem",
        250: "15.625rem",
        280: "17.5rem",
        340: "21.25rem",
        520: "32.5rem",
        390: "24.375rem",
        secLine_sp: "18.5rem", //296px
        secLine_sm: "28rem", //448px
        secLine_md: "33rem", //528px
        secLine_lg: "33rem", //528px
        secLine_xl: "33.375rem", //534px
      },
      colors: {
        pink: "#FF72B2", //メニューリストタグの色
      },
      // 必要であれば、アニメーションやキーフレームなどもここで拡張できます
      // keyframes: { ... },
      // animation: { ... },
    },
  },
  plugins: [
    // shadcn/ui などで必要になることが多い tailwindcss-animate プラグイン
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),

    // 以前のカスタムコンポーネントプラグイン
    plugin(function ({ addComponents }) {
      // theme を引数で受け取れる
      addComponents({
        ".img_setting": {
          width: "100%",
          height: "auto",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".section_setting": {
          // 例: themeから値を使う場合
          // padding: `${theme('spacing.8')} ${theme('spacing.16')}`,
          padding: "2.196193265vw 7.32vw", // そのままの値を使う場合
        },
        ".flex-col-center": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        ".back-groud-image-web": {
          // url()内のパスはCSSファイルからの相対パスではなく、
          // プロジェクトルートからの相対パスか、公開ディレクトリ内の絶対パスで指定することが多いです。
          // Next.jsの場合は public ディレクトリをルートとして扱えます。
          backgroundImage: "url('/images/brand-page/back_img.png')", // /public からのパス
        },
        ".page-setting": {
          listStyleType: "none",
        },
        ".original-gradient": {
          height: "200px", // 必要に応じて theme('spacing.xx') などを使う
          width: "90%",
          backgroundImage:
            "linear-gradient(90deg, rgba(233, 233, 233, 1), rgba(172, 172, 172, 1))",
        },
      });
    }),
  ],
};
