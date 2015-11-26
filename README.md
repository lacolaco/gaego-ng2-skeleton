# gaego-ng2-skeleton

## 構成

### api
バックエンド実装 (GAE/Go)

### web
フロントエンド実装 (Angular2 for TypeScript)

## 開発

devappserverを建てる

```
> cd api/src
> ./serve.sh
```

別のシェルでweb/->api/src/webの自動ビルドを起動する

```
> cd web
> npm run watch
```

## テスト
まだできてない

## デプロイ

**api/src/deploy.shとapi/src/deploy_beta.shの`--application`を書きかえる必要あり**

betaバージョンにデプロイする(stg用)

```
> cd api/src
> ./deploy_beta.sh
```

時刻ベースのバージョンにデプロイする(prod用)

```
> cd api/src
> ./deploy.sh
```


