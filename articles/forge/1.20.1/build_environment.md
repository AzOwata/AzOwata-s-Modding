## 1. IntelliJ IDEAをインストールする
IntelliJ IDEAは、Java IDEの一つで、Mod制作に最適です。以下からダウンロードし、インストールしてください。

- [Windows](https://www.jetbrains.com/ja-jp/idea/download/?section=windows)
- [Mac](https://www.jetbrains.com/ja-jp/idea/download/?section=mac)
- [Linux](https://www.jetbrains.com/ja-jp/idea/download/?section=linux)
***
ダウンロードしたインストーラを開き、セットアップを完了してください。

## 2. 必要なプラグインを導入する
Mod制作をする際に、必要なプラグインを導入します。
IntelliJ IDEAのメイン画面に行き、Pluginsのタブに移動します。
そして、Minecraft Developmentというプラグインをインストールしてください。

## 3. プロジェクトを作成する
Modのプロジェクトを作成します。
IntelliJ IDEAのメイン画面に行き、Projectsのタブに移動します。
New Project ボタンを押し、Minecraft タブをクリックします。
次にプロジェクトの情報を入力します。以下の説明を読んで入力してください。

<details>
    <summary>説明</summary>
    <ul>
        <li>
            <p>Name: プロジェクト名を入力します。 例: <code>Test Mod</code></p>
        </li>
        <li>
            <p>Location: 全てのプロジェクトを入れるためのフォルダを選択、または入力します。 例: <code>C:\Projects\</code></p>
        </li>
        <li>
            <p>Groups: 作るプロジェクトの種類を選択します。Modを作る場合、Modを選択します。</p>
        </li>
        <li>
            <p>Templates: Modローダーなどを選択します。</p>
        </li>
        <li>
            <p>Minecraft Version: 作りたいModのMinecraftバージョンを選択します。</p>
        </li>
        <li>
            <p>Use Mixins: Mixin(通常では変更できないMinecraft本体のコードなどを改変するもの)を使用するかどうかをチェックします。</p>
        </li>
        <li>
            <p>Mod ID: ModのIDを入力します。a-z の小文字、 0-9 の数字、および _- の記号のみが使用可能です。Name欄を入力すると自動で生成されますが、スペースをアンダーバーで置き換えます。Mod IDにはあまりアンダーバーを使わない風潮がある（個人談）ので、消したほうが良いかもしれません。 例: <code>testmod</code></p>
        </li>
        <li>
            <p>Mod Name: Modの名称(アイテムをホバーしたときに表示される青文字などに使われる)を入力します。Name欄を入力すると自動で生成されます。 例: <code>Test Mod</code></p>
        </li>
        <li>
            <p>Main Class: Modのメインクラスを入力します。Name欄を入力すると自動で生成されますが、クラス名をスネークケースで生成してしまうため、キャメルケースに修正が必要です。 例: <code>net.azowata.testmod.TestMod</code></p>
        </li>
        <li>
            <p>Lisence: ライセンスを設定します。MITにしておきましょう。</p>
        </li>
        <details>
            <summary>Optional Settings</summary>
            <ul>
                <li>
                    <p>Description: Modの説明を入力します。日本語は不可です。 例: <code>Test Mod is recommended for bald!</code></p>
                </li>
                <li>
                    <p>Authors: 制作に携わっている人のニックネーム、またはチーム名を入力します。 例: <code>AzOwata</code></p>
                </li>
                <li>
                    <p>Website: 自分自身、またはチームの所有するWebサイトのURLを入力します。 例: <code>https://github.com/AzOwata/TestMod</code></p>
                </li>
                <li>
                    <p>Update URL:  例: <code></code></p>
                </li>
            </ul>
        </details>
        <details>
            <summary>Build System Properties</summary>
            <ul>
                <li>
                    <p>Group ID: パッケージのURLを指定します。基本的に自分の所有するドメイン、または自分のニックネーム + .netの逆順が使われます。a-z の小文字、 0-9 の数字、および _- の記号のみが使用可能です。 例: <code>net.azowata</code></p>
                </li>
                <li>
                    <p>Artifact ID: Name欄を入力すると自動で生成されます。 例: <code>test-mod</code></p>
                </li>
                <li>
                    <p>Version: Modの最初のバージョンを指定します。 例: <code>1.0.0</code></p>
                </li>
            </ul>
        </details>
        <li>
            <p>JDK: 使用するJavaのバージョンを指定します。</p>
            <ul>
                <li>
                    <p>Java 21: Minecraft 1.21~</p>
                </li>
                <li>
                    <p>Java 17: Minecraft 1.17 ~ 1.20.6</p>
                </li>
                <li>
                    <p>Java 8(1.8.0): Minecraft ~1.16.5</p>
                </li>
            </ul>
        </li>
    </ul>
</details>

***
情報の入力が終わったら、Create ボタンを押してください。
プロジェクトが作成されるので、右下の進捗が完了するまで待ちます。