<!doctype html>
<html>
<head>
  <title>Service Worker メモ | Portfolio by hyiromori</title>
<meta content="Service Worker メモ | Portfolio by hyiromori" name="title">
<meta content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" name="description">
<meta content="portfolio, hyiromori" name="keywords">
<meta property="og:title" content="Service Worker メモ | Portfolio by hyiromori" />
<meta property="og:description" content="Web系フルスタックエンジニア hyiromori のポートフォリオサイトです。" />
<meta property="og:image" content="/assets/images/logo.png" />
<meta property="og:url" content="https://portfolio.hyiromori.com/" />
<meta property="og:site_name" content="Service Worker メモ | Portfolio by hyiromori" />
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
      <h1>Service Worker メモ</h1>
      <h2 id="service-worker-">Service Worker とは？</h2>
<ul>
<li>ブラウザの仕様</li>
<li>Web ページとは「別」のライフサイクルを持つ JavaScript の実行環境。</li>
<li><code>https</code> or <code>localhost</code> でしか動作しない</li>
</ul>
<h2 id="service-worker-">Service Worker でできること</h2>
<ul>
<li><code>fetch</code> イベントに介入（キャッシュなどのコントロールが出来る）</li>
<li>プッシュ通知</li>
<li>バックグランド同期</li>
</ul>
<p>ネイティブアプリでないと難しかったことが、Webアプリでも出来るようになってきた印象ですね！
まだ、機能によっては対応しているブラウザが少ないですが、この流れが進むと、Webアプリでもネイティブアプリとほぼ同等のことが出来るようになってくると思います。</p>
<h2 id="service-worker-">Service Worker でできないこと</h2>
<ul>
<li>DOMアクセス<ul>
<li><code>window</code> にはアクセスできません</li>
<li>Service Worker のソース内では <code>self</code> が Service Worker 自身を指すようです。 </li>
</ul>
</li>
</ul>
<h2 id="service-worker-">Service Worker のライフサイクル</h2>
<h3 id="installing">INSTALLING</h3>
<ul>
<li>Service Worker の登録が開始された状態</li>
</ul>
<h3 id="installed">INSTALLED</h3>
<ul>
<li>Service Worker の登録が完了した状態</li>
</ul>
<h3 id="activating">ACTIVATING</h3>
<ul>
<li>インストールされた Service Worker が有効になる段階</li>
</ul>
<h3 id="activated">ACTIVATED</h3>
<ul>
<li>Service Worker が有効に機能している状態</li>
<li>この段階から <code>fetch</code> イベントなどへの介入が出来るようになる</li>
</ul>
<h3 id="redundant">REDUNDANT</h3>
<ul>
<li>Service Worker が無効になった状態</li>
<li>通常、新しい Service Worker に置き換えられた時ぐらい？</li>
</ul>
<h2 id="service-worker-">Service Worker で使用できるイベント</h2>
<h3 id="install">install</h3>
<ul>
<li><code>INSTALL</code> 時に呼び出される</li>
<li>試してみたところ、このコールバックでの戻り値、例外は Service Worker のライフサイクルには影響しないっぽい？</li>
</ul>
<h3 id="activate">activate</h3>
<ul>
<li><code>ACTIVATED</code> 時に呼び出される</li>
<li>試してみたところ、このコールバックでの戻り値、例外は Service Worker のライフサイクルには影響しないっぽい？</li>
</ul>
<h3 id="message">message</h3>
<ul>
<li>不明（未調査）</li>
</ul>
<h4 id="fetch">fetch</h4>
<ul>
<li>何らかのリクエストが飛んだ時に介入するためのイベント</li>
<li><code>Cache API</code> を使用して、コントロールすることが出来るようになる。 </li>
</ul>
<h4 id="sync">sync</h4>
<ul>
<li>バックグラウンド同期用のイベント</li>
<li>Webページ側で登録しておくと、オンラインになった時点で発火する<ul>
<li>オンライン状態で登録すればすぐに発火する</li>
<li>逆にいえば、オフライン状態だと永遠に発火しない</li>
</ul>
</li>
</ul>
<h4 id="push">push</h4>
<ul>
<li>プッシュ通知が飛んできた時のイベント</li>
<li>通知メッセージの表示とかはカスタマイズできる</li>
<li>メッセージを表示させず、バックグランドで何らかの処理を走らせることもできそう（未検証）</li>
</ul>
<h2 id="-">サンプルソース</h2>
<p><code>TypeScript</code> チャレンジ中！（要するに、あまり慣れていないです😓）</p>
<h3 id="index-html-"><code>index.html</code> とかの記述例</h3>
<pre><code class="language-html">&lt;script type=&quot;text/javascript&quot;&gt;
  if (navigator.serviceWorker) {
    navigator.serviceWorker
             .register(&#39;/service_worker.js&#39;)
             .then((registration) =&gt; { // 登録成功
               console.log(&#39;scope:&#39;, registration.scope);
             })
             .catch((error) =&gt; { // 登録失敗
               console.log(&#39;failed: &#39;, error);
             });
  }
&lt;/script&gt;</code></pre>
<h3 id="-service_worker-js-"><code>/service_worker.js</code> の記述例（抜粋）</h3>
<pre><code class="language-javascript">self.addEventListener(&#39;install&#39;, (event: any) =&gt; {
  event.waitUntil(
    // インストール処理後に実行したい処理
  );
});

self.addEventListener(&#39;fetch&#39;, (event: any) =&gt; {
  // fetch イベント時に介入したい処理
});</code></pre>
<h2 id="cache-api-">Cache API (<a href="https://caniuse.com/#feat=serviceworkers">利用できるブラウザ</a>)</h2>
<p>１度 <code>fetch</code> に成功したものはキャッシュし、２度目以降はキャッシュを返す例</p>
<pre><code class="language-javascript">self.addEventListener(&#39;fetch&#39;, (event: any) =&gt; {
  event.respondWith(
    async () =&gt; {
      // キャッシュがあった場合は、キャッシュの内容を返す。
      const cacheResponse = await caches.match(event.request);
      if (cacheResponse) {
        return cacheResponse;
      }

      // request を複製する（ストリームは再利用できないので）
      const fetchRequest = event.request.clone();
      const fetchResponse = await fetch(fetchRequest);

      // レスポンスが正しくない場合はそのまま返却
      if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== &#39;basic&#39;) {
        return fetchResponse;
      }

      // response を複製する（こちらも同じくストリームは再利用できないので）
      const responseToCache = fetchResponse.clone();
      const cache = await caches.open(CacheName);

      // cache に登録する
      cache.put(event.request, responseToCache);
      return fetchResponse;
    }
  );
});</code></pre>
<p><a href="https://jakearchibald.com/2014/offline-cookbook/">The offline cookbook</a> というサイトに様々なパターンの例があり、とても参考になる。</p>
<h3 id="push-api-">Push API (<a href="https://caniuse.com/#feat=push-api">利用できるブラウザ</a>）</h3>
<h4 id="web-">Webページ側（プッシュ通知の登録処理）</h4>
<pre><code class="language-javascript">const registerPushNotification = async () =&gt; {
  if (navigator.serviceWorker &amp;&amp; window.PushManager) {
    const swRegistration = await navigator.serviceWorker.register(&#39;/service_worker.js&#39;);
    console.log(&#39;ServiceWorker is registered&#39;, swRegistration);
    // サーバから渡された公開鍵をバイト配列に変換します
    const applicationServerKey = urlB64ToUint8Array(publicKey);
    await swRegistration.pushManager.getSubscription();
    const params = { userVisibleOnly: true, applicationServerKey };
    // この段階でブラウザからプッシュ通知の許可ウィンドウが表示されます。
    const subscription = swRegistration.pushManager.subscribe(params);
    // プッシュ通知に必要な情報が subscription に入っています。（不許可の場合は何も入っていません）
    console.log(&#39;User is subscribed:&#39;, subscription);
  }
};</code></pre>
<h4 id="service-worker-">Service Worker 側</h4>
<pre><code class="language-javascript">self.addEventListener(&#39;push&#39;, (event: any) =&gt; {
  const dataText = event.data.text();
  const title = &#39;Push Test&#39;;
  const options = { body: dataText };
  event.waitUntil(self.registration.showNotification(title, options));
});</code></pre>
<h3 id="background-sync-api-">Background Sync API (<a href="https://caniuse.com/#feat=background-sync">利用できるブラウザ</a>)</h3>
<ul>
<li>使えるブラウザが少ない（今のところChromeのみ）</li>
<li>登録しておけば勝手に同期してくれる訳ではない（ハマった・・・）</li>
<li>同期に必要な情報（HTTPメソッド、パス、パラメータなど）は <code>IndexedDB</code> と使って渡す必要がある（結構面倒だった）<ul>
<li><code>LocalStorage</code> は使用できない（<a href="https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">MDN - サービスワーカーの使用</a> にも「メモ: localStorageはサービスワーカーキャッシュと同じように動作しますが、同期処理のため、サービスワーカー内では許可されていません。」と記述があった)</li>
</ul>
</li>
<li>同期に限らず、オフラインからオンラインになった時にやりたい処理なども登録しておくことも出来ます。</li>
</ul>
<h4 id="indexeddb-dexie-">IndexedDB の定義（<a href="http://dexie.org/">Dexie</a> というライブラリを使用しています）</h4>
<p>結構ソースが大きくなってしまった。
とりあえず、こんな感じで <code>IndexedDB</code> の登録＆取得処理を書いているんだな、という雰囲気だけ感じ取ればよいかと思います。</p>
<pre><code class="language-typescript">
import Dexie from &#39;dexie&#39;;

const DB_VERSION: number = 1;
const now = (): number =&gt; (new Date()).getTime();

interface BackgroundSyncRow {
  id?: number,
  path: string,
  body: string,
  result: string,
  createdAt?: number,
}

class BackgroundSyncDatabase extends Dexie {
  public backgroundSync!: Dexie.Table&lt;BackgroundSyncRow, number&gt;;

  public constructor() {
    super(&#39;BackgroundSyncDatabase&#39;);
    this.version(DB_VERSION)
        .stores({ backgroundSync: &#39;++id,path,body,result,createdAt&#39; });
  }
}

const db = new BackgroundSyncDatabase();

const addBackgroundSyncRow = (row: BackgroundSyncRow): Promise&lt;number&gt; =&gt; db
  .transaction(&#39;rw&#39;, db.backgroundSync, async () =&gt; {
    const createdAt: number = now();
    const _row: BackgroundSyncRow = { ...row, createdAt };
    return await db.backgroundSync.add(_row);
  });

const updateBackgroundSyncRow = (
  id: number,
  row: BackgroundSyncRow,
): Promise&lt;void&gt; =&gt; db
  .transaction(&#39;rw&#39;, db.backgroundSync, async () =&gt; {
    await db.backgroundSync.update(id, row);
  });

const getBackgroundSyncRow = (id: number): Promise&lt;BackgroundSyncRow | null&gt; =&gt; db
  .transaction(&#39;r&#39;, db.backgroundSync, async () =&gt; {
    const results = await db.backgroundSync.where({ id });
    const count: number = await results.count();
    return count === 1 ? results.first() : null;
  });

const getBackgroundSyncRows = (limit: number = 30): Promise&lt;Array&lt;BackgroundSyncRow&gt;&gt; =&gt; db
  .transaction(&#39;r&#39;, db.backgroundSync, async () =&gt; {
    return await db.backgroundSync
                   .orderBy(&#39;createdAt&#39;)
                   .reverse()
                   .limit(limit)
                   .toArray();
  });

export {
  addBackgroundSyncRow,
  getBackgroundSyncRow,
  getBackgroundSyncRows,
  updateBackgroundSyncRow,
};</code></pre>
<h4 id="web-">Webページ側（バックグラウンド同期の登録処理）</h4>
<pre><code class="language-javascript">const backgroundSyncTest = async () =&gt; {
  const syncData = {
    path: &#39;/api/v1/echo/test&#39;,
    body: JSON.stringify({ test: &#39;OK&#39; }),
    result: &#39;&#39;,
  };
  const id: number = await addBackgroundSyncRow(syncData);
  const tag: string = `background-sync:${id}`;
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register(tag);
};</code></pre>
<h4 id="service-worker-">Service Worker 側</h4>
<pre><code class="language-javascript">self.addEventListener(&#39;sync&#39;, async (event: any) =&gt; {
  if (event != null &amp;&amp; typeof event.tag === &#39;string&#39;) {
    if (event.tag.match(/^background-sync:\d+$/)) {
      const id: number = parseInt(event.tag.substr(16), 10);
      const syncData = await getBackgroundSyncRow(id);
      const { path, body, result } = syncData;
      if (result === &#39;&#39;) {
        const response = await fetch(path, { method: &#39;POST&#39;, body });
        syncData.result = await response.text();
        await updateBackgroundSyncRow(id, syncData);
      }
    }
  }
});</code></pre>
<h2 id="app-cache-">App Cache（参考）</h2>
<p>これまでにあった、キャッシュの仕組みらしい。（使ったことは無いのであまり知らない）</p>
<h3 id="-">機能</h3>
<ul>
<li>ブラウザがキャッシュするファイルを指定して、キャッシュが出来る</li>
</ul>
<h3 id="-">問題点</h3>
<ul>
<li>キャッシュの仕組みに問題がある<ul>
<li>動的に生成されるインデックスページ自体も必ずキャッシュされてしまうため、いろいろ厄介</li>
<li>「こっちの方が便利だよね」という感じで入れたのが仇となったのか？（個人の意見です）</li>
</ul>
</li>
<li>セキュリティ的な問題がある<ul>
<li><code>HTTPS</code> じゃない場合に問題らしい</li>
</ul>
</li>
</ul>
<h3 id="app-cache-service-worker-">App Cache と Service Worker との違い</h3>
<ul>
<li>Service Worker はキャッシュ用のAPIが存在するが、キャッシュの方法については実装者に依存</li>
<li>Service Worker の方がキャッシュの自由度が高く、また様々な介入が出来る</li>
</ul>
<h2 id="-">参考文献</h2>
<ul>
<li><a href="https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja">Service Worker の紹介</a></li>
<li><a href="https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/?hl=ja">Service Worker のデバッグ</a></li>
<li><a href="https://developers.google.com/web/updates/2015/12/background-sync">
Introducing Background Sync</a></li>
<li><a href="https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API">MDN - サービスワーカー API</a></li>
<li><a href="https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">MDN - サービスワーカーの使用</a></li>
<li><a href="https://qiita.com/y_fujieda/items/f9e765ac9d89ba241154">Qiita - Service Workerの基本とそれを使ってできること</a></li>
<li><a href="https://qiita.com/kosamari/items/5e2235d26eb339a33660">Qiita - Service Workerってなんなのよ (Service Workerのえほん)</a></li>
<li><a href="https://qiita.com/horo/items/175c8fd7513138308930">Qiita - ServiceWorkerとCache APIを使ってオフラインでも動くWebアプリを作る</a></li>
<li><a href="https://app.codegrid.net/entry/2016-service-worker-1">Service Worker、はじめの一歩 - 第1回 Service Workerとは</a></li>
<li><a href="https://jakearchibald.com/2014/offline-cookbook/">The offline cookbook</a></li>
<li><a href="https://www.html5rocks.com/ja/tutorials/appcache/beginner/">アプリケーション キャッシュを初めて使う</a></li>
<li><a href="https://html5experts.jp/kyo_ago/5153/">攻撃シナリオを使って解説するApplicationCacheのキャッシュポイズニング</a></li>
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