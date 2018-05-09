import inflect from "./inflector"
import InflectionTypes from "./inflector/inflection-types"
import WordTypes from "./inflector/word-types"
import {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
} from "./kana-utils"

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

export default Katsuyo

const example = {
  word: "見る",
  category: WordTypes.VERB_ICHIDAN,
  inflections: [
    InflectionTypes.PAST,
    InflectionTypes.NEGATIVE, 
    InflectionTypes.DESIRE
  ]
}