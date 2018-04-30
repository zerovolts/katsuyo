const toKana = require("./src/to-kana")
const { isHiragana, isKatakana, kanaPercentages, changeVowel } = require("./src/kana-conversions")

const Katsuyo = {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
}

module.exports = Katsuyo