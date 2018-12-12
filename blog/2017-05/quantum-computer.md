<!doctype html>
<html>
<head>
  <title>量子コンピューターについて調べてみた | Portfolio by hyiromori</title>
<meta content="量子コンピューターについて調べてみた | Portfolio by hyiromori" name="title">
<meta content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" name="description">
<meta content="portfolio, hyiromori" name="keywords">
<meta property="og:title" content="量子コンピューターについて調べてみた | Portfolio by hyiromori" />
<meta property="og:description" content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" />
<meta property="og:image" content="/assets/images/logo.png" />
<meta property="og:url" content="https://portfolio.hyiromori.com/" />
<meta property="og:site_name" content="量子コンピューターについて調べてみた | Portfolio by hyiromori" />
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
      <h1>量子コンピューターについて調べてみた</h1>
      <h2 id="-">はじめに</h2>
<p>最近ちょいちょい量子コンピューターのニュースとか出ていますね。
ただ、そもそも量子コンピューターって何？って感じですし、思っている人も多いハズ。
なので、量子コンピューターについて調べてみました。
なお、書いている私は量子コンピューターとかその辺の理論については全くの無知から調べていますので、あしからず。</p>
<h2 id="-">この記事の目的</h2>
<p>量子コンピューターってどんなものかを大雑把に知りたくて書いた記事です。
詳しい理論が知りたい方や、正確な情報が知りたい方は別の記事や論文を探してください。
ここが違うというご意見は大歓迎です。</p>
<h2 id="-">そもそも量子って？</h2>
<p>量子論とかの量子ですね。
詳しいことは知りませんが、要するに「物質の最小単位」と思っていれば良さそうです。
そして、量子にはマクロな世界には見られない、普通の感覚からすると、不思議な性質を持っています。
それが「重ね合わせ」という性質です。</p>
<h2 id="-">重ね合わせって？</h2>
<p>その言葉のイメージの通り、あるものに対して２つの状態が重なっている状態のことです。
有名な思考実験である<a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A5%E3%83%AC%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AC%E3%83%BC%E3%81%AE%E7%8C%AB">シュレーディンガーの猫</a>だと、猫の生きている状態と死んでいる状態が重なっている、という状態です。
瀕死とかでもなく、生きているか死んでいるかは開けてみないとわからない、というのでもありません。
生きている状態と死んでいる状態の、そのどちらの状態でもある、ということです。
どういうことやねん！とツッコみたくなりますが、とりあえずそういうものなのだと理解します。
そしてそれを状態を利用したのが「量子ビット」です。</p>
<h2 id="-">量子ビットって？</h2>
<p>量子コンピューターで扱う、情報の最小単位です。
今までのコンピュータは、ビットという単位で「0 <strong>または</strong> 1」を表します。
それに対して、量子ビットは「0と1を <strong>重ね合わせた</strong> 」状態を表します。
もはや訳がわかりませんが、そういうものと理解しておきます。</p>
<h2 id="-">量子コンピューターは何がすごいの？</h2>
<p>２つの状態を重ね合わせた状態で計算ができる事により、特に組み合わせ問題などの計算が桁違いに早くなります。
これまでのコンピューターでは、一つ一つ逐次計算していた問題が、重ね合わせの特性を使うことで並列に計算でき、あっという間に解けるようになるようです。</p>
<h2 id="-">量子コンピューターが普及するとどうなるの？</h2>
<h3 id="-">メリット</h3>
<p>組み合わせ問題など、これまでの計算方法では現実的な時間でできなかった計算が、現実的な時間でできるようになります。</p>
<h3 id="-">デメリット</h3>
<p>暗号が容易に突破されるようになるかもしれません。</p>
<p>これまでの暗号は、解読に膨大な計算量を必要とし、現実的な時間で解読できないようにすることで、安全性を確保していました。
逆に言えば、計算を繰り返すことで、いつかは解読することが可能なのです。
そして量子コンピューターだと、理論上、ごく僅かな計算量で解読でできるようになります。
なので、量子コンピューターが普及すれば、暗号アルゴリズムが世界的に変わっていくことになるかもしれません。</p>
<h2 id="-">量子コンピューターの動向</h2>
<p>私は基本IT Proの記事をよく読んでいます。
<a href="http://itpro.nikkeibp.co.jp/atcl/news/17/012500220/?itp_list_ranking">カナダD-Wave Systems</a>という会社が作っているみたいですね。
また、<a href="http://itpro.nikkeibp.co.jp/atcl/news/17/030600715/?itp_list_ranking">IBM</a>も頑張っているみたいです。
我らが<a href="http://itpro.nikkeibp.co.jp/atcl/column/17/042400160/042600003/?itp_list_ranking">日本勢</a>も、研究グループを作って量子コンピューターに挑んでいるみたいです。
個人的な感情としては、日本税を応援したいですし、研究だけに終わらず、世界に先駆けて実用化もできるといいなと思います。</p>
<h2 id="-">あとがき</h2>
<p>量子コンピューターは、今までのコンピューターとは計算の根本が違う、ということがわかりました。
特に、暗号アルゴリズムが無力化するかもしれない、と言うのは、社会的にもインパクトが強そうです。
そういったデメリットが大きい反面、これまでにはできなかった複雑な計算ができることで良いこともあるようです。（例えば難病の解析や新薬の開発など）
いずれにしても、大きな可能性を秘めている、ということは間違いなさそうです。
今後の動向も注目していきたいですね。</p>
<h2 id="-2018-02-04-">追記 (2018-02-04)</h2>
<p><a href="http://itpro.nikkeibp.co.jp/atcl/column/14/346926/020101296/">次世代国産暗号、量子コンピュータの弱点を突く</a> というニュースが有りました。
量子コンピューターを対抗するに十分かはまだこれからだと思いますが、量子コンピューターの実用化が進むに連れて暗号を変えていくことが必須になっていくことと思います。</p>
<h2 id="-">参考サイト</h2>
<ul>
<li><a href="https://ja.wikipedia.org/wiki/">Wikipedia</a></li>
<li><a href="http://ryoushi-rikigaku.com/quantum.html">量子力学入門：量子とは何か？</a></li>
<li><a href="http://koto-science.hatenablog.com/entry/%E9%87%8F%E5%AD%90%E8%AB%96-%E7%8A%B6%E6%85%8B%E3%81%AE%E9%87%8D%E3%81%AD%E5%90%88%E3%82%8F%E3%81%9B">量子論の「状態の重ね合わせ」ってどんな話？～わかりやすく解説してみたよ～ - KOTOの理科的つぶやき</a></li>
</ul>

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