# テスト作成ルール

## 1. mock はなるべくしない

外部 API・DB など「本当に制御不能な依存」だけ必要最小限で mock する。自前のモジュールや純粋関数は mock せず、実物を import して呼ぶ。mock だらけのテストは「実装と同じものを書き直しているだけ」になりがち。

```ts
// ✅ 実関数を直接呼ぶ
import { telHref } from "@/i18n/index";
expect(telHref("en", "0776-23-0595")).toBe("tel:+81776230595");

// ❌ 自前モジュールを mock してテスト
vi.mock("@/i18n/index", () => ({ telHref: vi.fn(() => "tel:fake") }));
```

## 2. ヘルパー関数は本当に汎用的なものだけ

DRY に囚われて local なヘルパーを量産しない。**各テストケースの中身だけを読めば内容が即座に理解できる**ことを最優先する。ヘルパーを書くのは以下のいずれかに該当するときだけ:

- 複数のテストファイルをまたいで使う汎用ユーティリティ
- その抽象なしには可読性がむしろ下がる（例: deep equality の表示が壊れる）

1 ファイル内で同じアサーションを 3 回書いても、それで読みやすいならそのままで良い。

```ts
// ✅ 各ケースが自己完結している
it("ja の canonical は /", () => {
  const { links } = buildHead("ja");
  expect(links.find((l) => l.rel === "canonical")?.href).toBe("https://kakikyo.jp/");
});

it("en の canonical は /en", () => {
  const { links } = buildHead("en");
  expect(links.find((l) => l.rel === "canonical")?.href).toBe("https://kakikyo.jp/en");
});

// ❌ 毎回 findCanonical を呼ばないと意図が読めない
const findCanonical = (locale) => buildHead(locale).links.find(...);
it("canonical", () => expect(findCanonical("ja")).toBe(...));
```

## 3. テストケース内で if 文を書かない

条件分岐が必要な時点で、テストケースが複数の意図を抱え込んでいる。`it.each` で分けるか、ケースを 2 つに割る。

```ts
// ✅ it.each で分岐を剥がす
it.each([
  ["ja", "tel:0776-23-0595"],
  ["en", "tel:+81776230595"],
  ["es", "tel:+81776230595"],
])("telHref(%s) returns %s", (locale, expected) => {
  expect(telHref(locale, "0776-23-0595")).toBe(expected);
});

// ❌ テスト内で条件分岐
it("telHref", () => {
  for (const locale of LOCALES) {
    if (locale === "ja") {
      expect(telHref(locale, "0776-23-0595")).toBe("tel:0776-23-0595");
    } else {
      expect(telHref(locale, "0776-23-0595")).toBe("tel:+81776230595");
    }
  }
});
```

ループで accumulate してから最後に比較するパターン（`mismatches.push(...); expect(mismatches).toEqual([])`）も if を伴いやすく、ケースが 1 つに凝縮されて失敗時の粒度が粗い。`it.each` でパス毎のケースに分解する方が良い。

## 4. 1 テストケースで色々チェックしすぎない

1 `it` は 1 つの振る舞いを検証する。複数の独立した主張を束ねない。失敗時にどこがおかしいかひと目で分かるようにする。

```ts
// ✅ 1 ケース 1 主張
it("buildHead('ja') sets a Japanese title", () => {
  expect(buildHead("ja").meta.find((m) => m.title)?.title).toContain("かき恭");
});

it("buildHead('ja') sets og:locale to ja_JP", () => {
  const og = buildHead("ja").meta.find((m) => m.property === "og:locale");
  expect(og?.content).toBe("ja_JP");
});

// ❌ 1 ケースに 5 個の期待値
it("buildHead works for ja", () => {
  const { meta, links } = buildHead("ja");
  expect(meta.find(...)?.title).toBe(...);
  expect(meta.find(...)?.content).toBe(...);
  expect(links.find(...)?.href).toBe(...);
  expect(links.filter(...).length).toBe(6);
  expect(links.find(...)?.href).toContain("Shippori");
});
```

ただし「1 つの振る舞い」の粒度は常識で判断する。同じオブジェクトの整合性を見るとき（例: `expect(user).toEqual({ id, name, email })`）は 1 ケースで良い。
