---
layout: blog
header_image: blog
title: エンジニアなりにポートフォリオサイトを作ってみた話
keyword: TypeScript,Webpack,React,ServiceWorker
update: 2019-01-07
---

## あらすじ

- エンジニアやってるけど、自分の技術を伝える手段を持ってないことに気付いた
- 手軽に公開できるので `GitHub Pages` を採用した
- 可搬性を高めるために（別のホスティングとかに移動しやすいように）独自ドメインを設定した
- 柔軟に色々なことができるように、静的サイトジェネレーターもどきを作った
- 一部は `SPA` で作成し、技術スタックは `TypeScript + React + Webpack + ServiceWorker` で作った
- できあがったポートフォリオサイトは [こちら](https://portfolio.hyiromori.com/)
- ソースコードは [GitHub](https://github.com/hyiromori/hyiromori.github.io) にあります

## 作ろうと思ったきっかけ

1. 今後もエンジニアとして飯を食っていこうと思った時何が必要か、的なことをふと考えた。
1. 勉強してできることを増やしていくことも大事だけど、自分ができるを伝えることも同じぐらい大事で、でもその努力を今のところしていないな〜、と思った。
1. パッと見てこんなことができる人なんだ〜、と理解してもらえるようなサイトを作れば良さそうだと思った。

という感じで思いたち、じゃあ作ろうと決めた感じです。
ちなみに、調べてみるとこういうのをポートフォリオサイトと言うらしいです。

## どうやって公開しようか考えた

お金がかかったり、公開やメンテナンスに手間がかかる方法だと怠惰な自分には続かないので、公開が容易な方法を調べました。
その中で [GitHub Pages](https://pages.github.com/) は、無料で使える上に、 `GitHub` にプッシュするだけで公開できるので、採用しました。

## どうやって作るか考えた

今回の目的は、自分の技術を公開するものなので、なるべく自分で作るのが良いと思いました。
よって、以下のような方針で作ることに決めました。

- 基本的な部分は `Markdown` で手軽に書けるようにする
- `SPA` が得意なので、動的なページは `SPA` で作る
- `TypeScript + React + Webpack` の（多分）ベーシックな構成にする。

## デザインやレイアウトはどうしようか考えた

デザイナーじゃないので凝ったことはしたくないけど、 `Bootstrap` とかのCSSフレームワークを使うのは「自分の技術の公開」とはなにか違う気がするし、何より面白味がない😏
基本は自分で全部作り、以下のような方針でやることに決めました。

- なるべくシンプルな構造にする
- `Markdown` を変換するので、基本的なHTMLタグを書くだけである程度デザインが整ったページを作れるような構成にする（ `GitHub` のMarkdownプレビューのようなイメージ）
- レスポンシブにする（とりあえず自分の `Macbook` と `iPhone` の両方でちゃんと表示できることを目標）

## サイトの構成を考えた

そんなにコンテンツはないですが、ちょっとだけ考えました。

- とりあえず自己紹介は必須なので、ホーム画面は主に自己紹介を書く
- 主に技術記事を書くブログも併設する
- 自分で実験的に作ったプロダクトを公開するページを作る

## GitHub Pages の独自ドメインを設定した

### DNS の設定

IP アドレスと CNAME で設定する２つの方法があるようですが、 CNAME の方が管理が楽そうなので、そちらを採用しました。
AWS Route53 での設定は以下のようになります。

![aws-route53](/assets/images/blog/portfolio/aws-route53.jpg)

### GitHub の設定

設定ページで以下の箇所に独自ドメインを設定するだけで OK です。

![github](/assets/images/blog/portfolio/github.jpg)

`Let's Encrypt` で生成された証明書が使われるようです。

![lets-encrypt](/assets/images/blog/portfolio/lets-encrypt.jpg)

あと `CNAME` というファイルが自動的に追加され、独自ドメインの設定が保存されるているようです。
間違ってこのファイルを消したら、アクセスできなくなって焦った・・。

## 静的サイトジェネレーターもどきを作成した

とりあえず `GitHub Pages` で採用されている **[Jekyll](https://jekyllrb.com/)** を当初使おうと思いました。
最初は問題なかったのですが、使っている内に細かい不満が出てきて `Jekyll` の採用はやめました。

で、他の静的サイトジェネレーターを探してみたのですが、世の中にはたくさんのジェネレーターがあるんですね・・・。
一つ一つ試してみるのも大変ですし、やりたいことは `Markdown` を `HTML` に変換することと、 `SCSS` を `CSS` にできれば大体のことができるので、自作することにしました。

### 言語の選定

`JavaScript` にしました。
自分の得意言語であること以外、特に理由はないです。
`node` と `npm` にガッツリ依存しますが、まぁこの２つが潰れることはないでしょう。

### ライブラリの選定

以下のライブラリを使用しました。

- [marked](https://www.npmjs.com/package/marked) : `Markdown` -> `HTML` の変換
- [ejs](https://www.npmjs.com/package/ejs) : テンプレートエンジン
- [sass-loader](https://www.npmjs.com/package/sass-loader) : `SCSS` -> `CSS` の変換

### Markdown の変換

`marked` を使って変換します。
次にテンプレートエンジンに渡すので、テキストデータを受け取っておきます。

```javascript
const fs = require('fs');
const marked = require('marked');
const htmlText = marked(fs.readFileSync('Markdownファイルのパス'))
```

### テンプレートの適用

テンプレート用のHTMLファイルに、Markdown のコンテンツを埋め込みます。
**&lt;%- JSのコード %&gt;** というような形で埋め込みができます。
詳細は [公式サイト](https://ejs.co/) を参照してください。

```javascript
const ejs = require('ejs');
ejs.renderFile('テンプレートファイルのパス', { content: htmlText }, {}, (error, html) => {
  if (error) {
    throw new Error(error);
  }
  fs.writeFileSync('出力先のパス', html);
});
```

テンプレート内に書かれた **&lt;%- content %&gt;** に Markdown から変換した HTML データが埋め込まれます。

### SCSS の変換

普通の `CSS` を書いても良いのですが、最低限として色を変数で管理はしたいので、 `SCSS` で書くことにしました。

```javascript
const fs = require('fs');
const sass = require('node-sass');

sass.render({ file: '変換元の SCSS ファイルパス' }, (error, result) => {
  if (error) {
    throw new Error(error);
  }
  fs.writeFileSync('出力先の CSS ファイルパス', result.css.toString());
});
```


## 公開

レポジトリにプッシュするだけなので、特に何も要らない(笑)
[https://portfolio.hyiromori.com/](https://portfolio.hyiromori.com/) に公開しています。

## まとめ

自分で考えて実装して公開するのは、やっぱり楽しいですね！
実際に公開してみて「どんなものが作れるか」と聞かれたらこれを見せれば良い、という安心感が凄いありますね。
とはいえ、今は積極的に転職活動をしているわけではないので、今のところは単なる自己満足😓

あと、静的サイトジェネレーターは、作るよりも選定する時間の方が長かった・・・。
最初から作っとけば良かった。