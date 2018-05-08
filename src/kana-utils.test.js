const { test } = require("ava")

const { isHiragana, isKatakana, toKana, changeVowel } = require("./kana-utils")

const hiraganaSamples = "あいうえおがぎぐげごぱぴぷぺぽっぁぃぅぇぉゐゑ".split("")
const katakanaSamples = "アイウエオガギグゲゴパピプペポッァィゥェォヰヱ".split("")

test("detects Hiragana", t => {
  hiraganaSamples.forEach(sample => {
    t.true(isHiragana(sample))
  }) 
  katakanaSamples.forEach(sample => {
    t.false(isHiragana(sample))
  })
})

test("detects Katakana", t => {
  katakanaSamples.forEach(sample => {
    t.true(isKatakana(sample))
  }) 
  hiraganaSamples.forEach(sample => {
    t.false(isKatakana(sample))
  })
})

test("converts ん correctly", t => {
  t.is(toKana("ona"), "おな")
  t.is(toKana("onna"), "おんあ")
  t.is(toKana("onnna"), "おんな")
  t.is(toKana("on'a"), "おんあ")
  t.is(toKana("on'na"), "おんな")
  t.is(toKana("on a"), "おんあ")
})

test("converts っ correctly", t => {
  t.is(toKana("ltu"), "っ")
  t.is(toKana("zakku"), "ざっく") // ザックです
  t.is(toKana("tte"), "って")
})