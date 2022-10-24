※今期は外部APIを使用しておらず、ライブラリ使用のみであったため今回のレポートではライブラリをメインに取り上げます。

## ライブラリとは
 - プログラムにおいてよく利用される機能を切り出して、再利用しやすいようにまとめたもの
	 - 汎用機能を外部からインポートして使用出来るため、効率的に開発を行うことが可能
 - あくまで部品であるため、ライブラリ単体では動作しない
 
#### フレームワークとライブラリの違い
 - ライブラリ：機能
 	- 他のライブラリと共存可、用途が汎用的
 - フレームワーク：骨組み
 	- 他のフレームワークと共存不可
 	- 用途が限定的（フレームワーク毎に独自の使用方法が存在する）

###### フレームワーク
- Java: Spring Framework, Hibernate
- css：Bootstrap、Bulma
- javascript：React, Angular, AngularJS, Vue.js
- Python：Django, Flask


## 使用方法

#### ダウンロード
- ライブラリのソースコードをダウンロードして参照する方法

#### CDNの利用
- CDN…Content Delivery Network
- CDNリンクをソース内で読み込ませて使用する方法

##### CDNの利用メリット
- リンクを読み込むだけで利用可能
- 設定により常に安定版を読み込める
- クライアント側でキャッシュが残っていた場合、キャッシュから読み込めるためダウンロード版利用時よりも動作が早くなる
##### CDNの利用デメリット
- CDNのサーバーがダウンしているとライブラリを利用できない


## 作成方法
ライブラリファイルの作成後各種サービスに登録する事が多い。
- javascript：npmに登録する
  - 登録手順：https://zenn.dev/yusuke99/books/fcd96342f5cb1b468799/viewer/publish
- Python：PyPIに登録(pip install <package name> でインストール出来るようになる)

## 言語によるライブラリの特徴
#### Java, Python
 - それぞれの言語本体に含まれている標準ライブラリが多く存在する
 	- Java：java.io, 等
 	- Python：pip, random, math 等

#### css
 - cssフレームワーク≒ライブラリ
 	- スタイル定義を選択して使用するため、機能的用途で採用されている？
 	- デザインの統一性がある点は骨組み(フレームワーク)であると言える  
https://midorimici.com/posts/library-framework-chigai


## 使用時の注意点
 - 暫く更新されていないライブラリを使用する際は脆弱性等の問題に注意する
 - 商用利用制限などのライセンスを確認する
 - バグ回避のため最新版ではなく安定版を採用した方が良い場合もある
 	- npm等でライブラリを管理している場合、意図せずバージョンを上げないように注意
 	https://qiita.com/yoshii0110/items/5f90f9c8ea77d70d5204


## 実際に使用したライブラリ

### knockout.js
 - ViewとViewModelの紐づけを行うjavascriptライブラリ
 - View/ViewModel の片方の状態が変化した際、リアルタイムでもう一方の状態も更新可能
	http://kojs.sukobuto.com/docs/introduction

### pdfjs
 - ブラウザ上でPDF表示エリアを設定するためのjavascriptライブラリ
 - ajaxのセキュリティ制約によりローカルファイルの参照不可、サーバー上のファイルのみ参照可能
 - 本番プログラムではDL版ビューワーを使用  
	https://mozilla.github.io/pdf.js/

### Jackson
 - JavaオブジェクトとJSONの相互変換機能を持つJavaライブラリ
 - API取得値の変換など、フロントエンド-バックエンド間でJSON形式のやり取りをする際に使用

### bulma / Bootstrap
 - 予めレイアウト作成のためのスタイルが設定されているcssフレームワーク（ライブラリ）
 - 必要な箇所にhtmlクラスを設定するだけで使用可能
 - 基本的にcss側で編集する必要はないが、オーバーライドすることで規定の設定をカスタムすることが可能  
  bulma：https://bulma.io/  
  Bootstrap：https://getbootstrap.jp/
