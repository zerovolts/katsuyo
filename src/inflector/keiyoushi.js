import { changeVowel } from "../kana-utils"
import InflectionTypes from "./inflection-types"
import WordTypes from "./word-types"

export const keiyoushiToPast = (word) => {
  const root = word.slice(0, -1)
  return root + "かった"
}

export const keiyoushiToNegative = (word) => {
  const root = word.slice(0, -1)
  return root + "くない"
}

const keiyoushiConjugateByInflection = (word, inflection) => {
  switch (inflection) {
    case InflectionTypes.PAST:
      return [keiyoushiToPast(word), WordTypes.VERB_PAST]
    case InflectionTypes.NEGATIVE:
      return [keiyoushiToNegative(word), WordTypes.ADJECTIVE_KEIYOUSHI]
    default:
      return word
  }
}

export const keiyoushiConjugate = (word) => {
  const inflection = word.inflections[word.inflections.length - 1]
  const restInflections = word.inflections.slice(0, -1)
  const inflectedWord = keiyoushiConjugateByInflection(word.word, inflection)

  return {
    ...word,
    word: inflectedWord[0],
    category: inflectedWord[1],
    inflections: restInflections
  }
}