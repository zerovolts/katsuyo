const { ichidanToPast } = require("./src/ichidan-conjugation")
const { godanToPast } = require("./src/godan-conjugation")
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
  godanToPast
}

module.exports = Katsuyo