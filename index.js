const inflectStep = require("./src/inflector")
const InflectionTypes = require("./src/inflection-types")
const WordTypes = require("./src/word-types")
const {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
} = require("./src/kana-utils")

const Katsuyo = {
  inflectStep,
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel,
}

module.exports = Katsuyo

console.log(inflectStep({word: "聞く", category: WordTypes.VERB_GODAN, inflections: [InflectionTypes.PAST]}))