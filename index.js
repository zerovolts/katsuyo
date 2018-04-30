const { ichidanToPast, ichidanToNegative } = require("./src/ichidan-conjugation")
const { godanToPast, godanToNegative } = require("./src/godan-conjugation")
const {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
} = require("./src/kana-utils")

const Katsuyo = {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel,
  ichidanToPast,
  ichidanToNegative,
  godanToPast,
  godanToNegative
}

module.exports = Katsuyo