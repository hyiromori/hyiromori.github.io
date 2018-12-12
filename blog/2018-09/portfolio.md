<!doctype html>
<html>
<head>
  <title>エンジニアなりにポートフォリオサイトを作ってみた話 | Portfolio by hyiromori</title>
<meta content="エンジニアなりにポートフォリオサイトを作ってみた話 | Portfolio by hyiromori" name="title">
<meta content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" name="description">
<meta content="portfolio, hyiromori" name="keywords">
<meta property="og:title" content="エンジニアなりにポートフォリオサイトを作ってみた話 | Portfolio by hyiromori" />
<meta property="og:description" content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" />
<meta property="og:image" content="/assets/images/logo.png" />
<meta property="og:url" content="https://portfolio.hyiromori.com/" />
<meta property="og:site_name" content="エンジニアなりにポートフォリオサイトを作ってみた話 | Portfolio by hyiromori" />
<meta property="og:locale" content="ja-JP" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@hyiromori" />
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta charset="UTF-8">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosansjp.css" />
<link rel="stylesheet" href="/assets/style.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124358962-1"></script>
<script type="text/javascript">
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-124358962-1');
</script>
  <meta property="og:type" content="article" />
</head>
<body>
  <div id="header">
  <a href="/" id="header-logo">
    <img id="logo-image" src="/assets/images/logo.png" />
    <div id="logo-text">
      <div id="logo-text-upper">Portfolio</div>
      <div id="logo-text-lower">by hyiromori</div>
    </div>
  </a>
  <nav id="header-navigation">
    <a href="/blog">BLOG</a>
    <a href="/labo">LABO</a>
  </nav>
</div>
  <div id="content-area">
    <nav id="left-content"></nav>
    <div id="main-content">
      <h1>エンジニアなりにポートフォリオサイトを作ってみた話</h1>
      <h2 id="-">あらすじ</h2>
<ul>
<li>エンジニアやってるけど、自分の技術を伝える手段を持ってないことに気付いた</li>
<li>手軽に公開できるので <code>GitHub Pages</code> を採用した</li>
<li>技術スタックは <code>TypeScript + React + Webpack + ServiceWorker</code> で作った</li>
<li>できあがったポートフォリオサイト: <a href="https://hyiromori.github.io/">https://hyiromori.github.io/</a></li>
<li>ソースコード: <a href="https://github.com/hyiromori/hyiromori.github.io">https://github.com/hyiromori/hyiromori.github.io</a></li>
</ul>
<h2 id="-">作ろうと思ったきっかけ</h2>
<ol>
<li>今後もエンジニアとして飯を食っていこうと思った時何が必要か、的なことをふと考えた。</li>
<li>勉強してできることを増やしていくことも大事だけど、自分ができるを伝えることも同じぐらい大事で、でもその努力を今のところしていないな〜、と思った。</li>
<li>パッと見てこんなことができる人なんだ〜、と理解してもらえるようなサイトを作れば良さそうだと思った。</li>
</ol>
<p>という感じで思いたち、じゃあ作ろうと決めた感じです。<br>ちなみに、調べてみるとこういうのをポートフォリオサイトと言うらしいです。  </p>
<h2 id="-">どうやって公開しようか考えた</h2>
<p>お金がかかったり、公開やメンテナンスに手間がかかる方法だと怠惰な自分には続かないので、公開が容易な方法を調べました。<br>その中で <a href="https://pages.github.com/">GitHub Pages</a> は、無料で使える上に、 <code>GitHub</code> にプッシュするだけで公開できるので、採用しました。  </p>
<h2 id="-">どうやって作るか考えた</h2>
<p>今回の目的は、自分の技術を公開するものなので、なるべく自分で作るのが良いと思いました。<br>よって、以下のような方針で作ることに決めました。  </p>
<ul>
<li><code>SPA</code> が得意なので、 <code>SPA</code> で作る</li>
<li><code>TypeScript + React + Webpack</code> の（多分）ベーシックな構成にする。</li>
<li><a href="https://qiita.com/hyiromori/items/7986a725541c97da878d">ServiceWorker</a> の記事も書いたので、実践してみる</li>
<li>なるべくフレームワークとかを使わない（<a href="https://github.com/hyiromori/hyiromori.github.io/blob/master/package.json">package.json</a>）</li>
</ul>
<h2 id="-">デザインやレイアウトはどうしようか考えた</h2>
<p>デザイナーじゃないので凝ったことはしたくないけど、 <code>Bootstrap</code> とかのCSSフレームワークを使うのは「自分の技術の公開」とはなにか違う気がするし、何より面白味がない😏<br>基本は自分で全部作り、以下のような方針でやることに決めました。  </p>
<ul>
<li>基本的なHTMLタグを書くだけである程度デザインが整ったページを作れるような構成にする（ <code>GitHub</code> のMarkdownプレビューのようなイメージ）<ul>
<li>なるべくシンプルな構造にする</li>
<li>色のバリエーションも最小限にする（色使いに自信ないし、使いすぎるとダサくなりそうなので・・・）</li>
</ul>
</li>
<li>レスポンシブにする（とりあえず自分の <code>Macbook</code> と <code>iPhone</code> の両方でちゃんと表示できることを目標）</li>
</ul>
<h2 id="-">サイトの構成を考えた</h2>
<p>そんなにコンテンツはないですが、ちょっとだけ考えました。  </p>
<ul>
<li>とりあえず自己紹介は必須なので、ホーム画面は主に自己紹介を書く</li>
<li>自分で作ったものを公開するページを作る。最終的に以下のような構成にしました。<ul>
<li><code>実験室</code> : 新しい技術とかを使ったもの</li>
<li><code>ユーティリティ</code> : あると便利なので作ったツールとか。どっちかというと、自分で使いたいだけかも（笑）</li>
</ul>
</li>
<li>ちょっとだけインパクトも欲しいので、最初にホーム画面を開いた時にキーボードで入力されているようなアニメーションをつけてみた。<ul>
<li>愛用の <a href="https://www.jetbrains.com/ruby/">RubyMine</a> のサイトをイメージ</li>
<li><a href="https://developer.mozilla.org/ja/docs/Web/API/Window/sessionStorage">sessionStorage</a> を使って表示したかを記録しているので、一回を閉じて再度開くとまた表示されるようにしています。</li>
</ul>
</li>
</ul>
<h2 id="-">実装</h2>
<p>いつか別記事で書こう。  </p>
<h2 id="-">公開</h2>
<p>レポジトリにプッシュするだけなので、特に何も要らない(笑)<br><a href="https://hyiromori.github.io/">https://hyiromori.github.io/</a> に公開しています。  </p>
<h2 id="-">まとめ</h2>
<p>自分で考えて実装して公開するのは、やっぱり楽しいですね！<br>実際に公開してみて「どんなものが作れるか」と聞かれたらこれを見せれば良い、という安心感が凄いありますね。<br>とはいえ、今は積極的に転職活動をしているわけではないので、今のところは単なる自己満足😓  </p>

    </div>
  </div>
  <div id="footer">
  <nav id="footer-links">
    <a class="tooltip" data-tooltip="Mail" href="mailto:hyiromori@gmail.com">
      <img src="/assets/images/mail.png" />
    </a>
    <a class="tooltip" data-tooltip="Twitter" href="https://twitter.com/hyiromori">
      <img src="/assets/images/twitter.png" />
    </a>
    <a class="tooltip" data-tooltip="GitHub" href="https://github.com/hyiromori">
      <img src="/assets/images/github.png" />
    </a>
  </nav>
  <div id="footer-copyright">(C) 2018 hyiromori</div>
</div>

  <script type="text/javascript">
    var headers = document.querySelectorAll('h2');

var menuList = [];
headers.forEach((header) => {
  menuList.push({ id: header.id, title: header.textContent });
});
var listItems = menuList.map(function(menu) {
  return ('<div><a href="#' + menu.id + '">' + menu.title + '</a></div>');
});

document.getElementById('left-content').innerHTML = ('<ul>' + listItems.join('') + '</ul>');

  </script>
</body>
</html>