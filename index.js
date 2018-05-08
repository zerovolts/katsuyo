const inflect = require("./src/inflector")
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
  inflect,
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel,
  WordTypes,
  InflectionTypes
}

module.exports = Katsuyo

const example = {
  word: "見る",
  category: WordTypes.VERB_ICHIDAN,
  inflections: [
    InflectionTypes.PAST,
    InflectionTypes.NEGATIVE, 
    InflectionTypes.DESIRE
  ]
}