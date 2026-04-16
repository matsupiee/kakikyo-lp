# Worktree ワークフロー

## worktree 作業時は PR 作成まで自動で行う (CRITICAL)

次のいずれかに当てはまるときを「worktree で作業している」とみなす。

- 現在のブランチ名が `worktree-` で始まる
- 現在の Git リポジトリルートの**絶対パス**に `.claude/worktrees/` が含まれる（`cwd` がサブディレクトリでも、リポジトリルートで判定すること）

次をすべて満たしたら、コミット → プッシュ → PR 作成まで一連で実行する。ユーザーが「PR を作って」と指示してくるのを待つ必要はない。

- ユーザーが依頼した範囲の実装ができている
- ユーザーから続きのタスクの明示がない（または依頼が一区切りついている）
- リポジトリルートで以下のコマンドが通る
  - `bun run check`
  - `bun run check-types`

## worktree 作業時は PR 作成後にレビュー用のサブエージェントを立ち上げてレビューを行わせる

コミット → プッシュ → PR 作成が完了した後に、**Task サブエージェント**（`read-only` の explore だけでなく、GitHub へのコメント、ローカルでのコマンド実行・アプリ起動が可能な種類）を起動し、レビュー・コメント投稿・動作確認まで行わせる。

修正が必要であれば修正を行い、動作確認ができたら コミット → プッシュ する。

## worktree 作業時の注意事項 (CRITICAL)

### 1. cwd は常に絶対パスで管理する

`cd` でサブディレクトリに移動すると以降のコマンドに影響する。Bash ツールでは **絶対パスを使う** か、`bun run --cwd <絶対パス>` のように **`--cwd` で作業ディレクトリを指定する**。

```bash
# ✅ 絶対パス / --cwd を使う
bun run --cwd /path/to/worktree/apps/scraper-worker test

# ❌ cd したまま次のコマンドを実行しない
cd apps/scraper-worker && bun test
# → 以降のコマンドが apps/scraper-worker 基準になってしまう
```

### 2. workspace パッケージの解決

`bun install` 後、ワークスペースパッケージがルートの `node_modules/` にリンクされない場合がある。スクリプト実行時に `Cannot find module` が出たら、**該当 app を `--cwd` で指定して実行する**。

```bash
# ✅ app を --cwd で指定（cd しない）
bun run --cwd /path/to/worktree/apps/web build

# ❌ app を cwd にせず、ルート基準のまま深いパスだけ実行する
bun /path/to/worktree/apps/web/src/main.tsx
```

### 3. .claude/ 配下のファイルも worktree で変更・コミットできる

`.claude/` 配下のファイル（skills, rules 等）は git で追跡されており、worktree 内で変更すると通常通り `git status` に表示される。他のファイルと同様に worktree 内でコミット・PR 作成が可能。
