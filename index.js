const toKana = require("./src/to-kana")
const { isHiragana, isKatakana, kanaPercentages, changeVowel } = require("./src/kana-conversions")
const { ichidanToPast } = require("./src/ichidan-conjugation")
const { godanToPast } = require("./src/godan-conjugation")

const Katsuyo = {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel,
  ichidanToPast,
  godanToPast
}

module.exports = Katsuyo