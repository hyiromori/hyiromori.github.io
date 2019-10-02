---
layout: blog
header_image: blog
title: CSSだけでテーブルの縦横２列を固定してスクロールできるようにする
keyword: HTML,CSS
---

## 完成品のサンプル

[CodePen](https://codepen.io/)で作ったサンプルです。

<br />

<p
  class="codepen"
  data-height="320"
  data-theme-id="0"
  data-default-tab="html,result"
  data-user="hyiromori"
  data-slug-hash="BeVjwQ"
  style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
  data-pen-title="ScrollTable2"
>
  <span>See the Pen <a href="https://codepen.io/hyiromori/pen/BeVjwQ/">
  ScrollTable2</a> by hyiromori (<a href="https://codepen.io/hyiromori">@hyiromori</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

<script
  async
  src="https://static.codepen.io/assets/embed/ei.js"
></script>

## 解説

このコードでは`position: sticky1を使用することで、テーブルの行、列を固定しています。

`position: sticky` は `top` `right` `bottom` `left` と組み合わせて使うことで
`position: relative` と `position: absolute`を組み合わせたような動きが可能になる指定です。


詳細は[MDNの解説](https://developer.mozilla.org/ja/docs/Web/CSS/position#Sticky_positioning)をご覧ください。


## `position: sticky` の対応状況

[Can I Use](https://caniuse.com/#feat=css-sticky)によれば、モダンブラウザは対応済みです。
ちなみに**Chrome**などは

> Supported on th elements, but not thead or tr

とある通り`thead` `tr`にバグがあるようです。
このサンプルは`thead` `tr`に指定していないので、対応ブラウザなら正常に動作するはずです。

## 幅と高さの制約

`position: sticky` を使用するため、一部のセルは幅または高さを固定する必要があります。
今回のサンプルは、縦横それぞれ２列を固定するため、以下を固定しなければなりません。
* １行目の高さ（２行目の`top`を指定しないと固定できないため）
* １列目の幅（２列目の`left`を指定しないと固定できないため）
実際に使用する場合は、これらのセルを指定した幅と高さで必ず収まるように要素を配置しないといけません。

## 表示上の制約


テーブルの親要素の幅が十分に広い場合、右側に余白ができてしまう場合があります。
これは `table {width: 100%}` を指定しても解消できませんでした。

[WindowのResizeイベント](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) や
[MutationObserver](https://developer.mozilla.org/ja/docs/Web/API/MutationObserver) を使って、
ある程度の幅以下になったら横スクロールを適用するという方法で乗り切りました。

[ResizeObserver](https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver)も使えますが、まだまだ対応ブラウザが少ないです。
対応ブラウザが増えたらこちらも使えるかもしれません。

## 2019-06-12 追記

Safari では`position: -webkit-sticky;`のようにベンダープレフィックスを突けないと有効になりませんでした。
CodePen のサンプルも直しました。
