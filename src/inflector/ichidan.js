import { InflectionTypes } from "./inflection-types"
import { WordTypes } from "./word-types"

export const ichidanToPast = (verb) => {
  const root = verb.slice(0, -1)
  return root + "た"
}

export const ichidanToNegative = (verb) => {
  const root = verb.slice(0, -1)
  return root + "ない"
}

export const ichidanToDesire = (verb) => {
  const root = verb.slice(0, -1)
  return root + "たい"
}

const ichidanConjugateByInflection = (word, inflection) => {
  switch (inflection) {
    case InflectionTypes.PAST:
      return [ichidanToPast(word), WordTypes.VERB_PAST]
    case InflectionTypes.NEGATIVE:
      return [ichidanToNegative(word), WordTypes.ADJECTIVE_KEIYOUSHI]
    case InflectionTypes.DESIRE:
      return [ichidanToDesire(word), WordTypes.ADJECTIVE_KEIYOUSHI]
    default:
      return word
  }
}

export const ichidanConjugate = (word) => {
  const inflection = word.inflections[word.inflections.length - 1]
  const restInflections = word.inflections.slice(0, -1)
  const inflectedWord = ichidanConjugateByInflection(word.word, inflection)

  return {
    ...word,
    word: inflectedWord[0],
    category: inflectedWord[1],
    inflections: restInflections
  }
}