const toKana = require("./src/to-kana")
const { isHiragana, isKatakana, kanaPercentages } = require("./src/kana-conversions")

const Katsuyo = {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages
}

module.exports = Katsuyo