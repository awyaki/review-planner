# Review Planner の説明書

## 想定読者

Review Planner（以下、本アプリ）を使用する人。以下、「本アプリ を使用する人」を**ユーザー**と表記する。

## 背景

人は何かを学習するとき、身につけたい内容や覚えたい内容に繰り返し触れる必要がある。この必要から多くの人は様々な**記録場所**に自分が過去に何を学習したのかを記録し、記録したものを**復習**に利用している。

記録場所の例として以下が考えられる。

- 手帳
- メモ帳
- 単語帳
- 紙製のノート
- デジタルノート

さて、人によっては「復習する」という行為には壁があるように思われる。復習する行為を妨げているものの一つとして考えられるのが「復習の計画・実行が面倒である」ことである。

## 目的

様々な記録場所に記録された学習内容について、それらの復習の計画と実行を簡略化するため、本アプリを作成した。

### 補足

復習を行うには大まかに次のことを行なう必要があるだろう。

1. 内容 X を学習する
1. 内容 X をいつ復習するのか計画し記録する
1. 内容 X の復習計画を見ていつ復習すべきか知る
   1. 復習すべき時であれば、復習を実行する
   1. まだ復習すべき時ではないなら、復習を保留する

本アプリは 2.と 3.を支援するために作成された。

## 概要

本アプリはスマートフォンや PC から利用することができる。サインアップ（ユーザー登録）は不要であり、本アプリを利用することで発生するユーザー固有のデータはユーザーが使用するブラウザに保存される。

本アプリは ID 発行ページを用い 1 以上の十進数で表される ID を発行することができる。この ID を自分の学習記録に紐づけることで学習記録を管理し復習計画を立てることができる。また ID を発行する際に記録場所を設定することで、ある ID がどの記録場所に紐づけられているか思い出すことができる。ユーザーは ID ごとに何日後に復習するかを設定し、本アプリはその設定に従い**今日復習すべき ID**を表示することでユーザーに ID と紐付けられた学習記録の復習を促す。

## UI と使い方

使い方の流れは以下である。

1. 学習の記録
1. ID の発行・学習記録との紐付け（通知スケジュール（復習計画）と記録場所の設定を含む）
1. 今日復習すべき ID の確認
1. 復習

以下では本アプリの基本的な使用方法の一例を具体的なストーリーで示した。なお、各ページの使い方の詳細は各ページの項目に記述する。

1. 2023 年 9 月 25 日、ユーザー A は内容 X を学習し、メモ帳に学習の記録を取った。
2. ユーザー A は本アプリの**ID 発行ページ**を開き、記録場所と**通知スケジュール**を入力し ID 1 を発行した。
   このとき記録場所と通知スケジュールは以下のように設定した。
   - 記録場所：メモ帳
   - 通知スケジュール：1 日後、3 日後、5 日後、7 日後
3. ユーザー A は発行された ID 1 をメモ帳の内容 X を記録したページに記入した。
4. 同年同月の 26 日（ID 1 の 発行から 1 日後）ユーザー A は本アプリの**復習ページ**を開いた。
   ユーザー A は**復習ページ**に「ID 1、記録場所：メモ帳」が表示されているのを確認したので
   メモ帳から ID 1 に紐付けられた箇所を探した。
5. ユーザー A は ID 1 に紐付けられた内容 X をメモ帳の中に見つけ、内容 X の復習を行なった。
6. その後、ID 1 発行から 3 日後、5 日後、7 日後に 4. 5.を繰り返した。

### ID 発行ページ

### 通知スケジュールのプリセット作成ページ

### 復習ページ

### 発行済み ID 閲覧ページ
