import { changeVowel } from "../kana-utils"
import InflectionTypes from "./inflection-types"
import WordTypes from "./word-types"

const godanToPast = (verb) => {
  const root = verb.slice(0, -1)
  const last = verb.slice(-1)
  switch (last) {
    case "う":
    case "る":
    case "つ":
      return root + "った"
    case "ぬ":
    case "む":
    case "ぶ":
      return root + "んだ"
    case "く":
      return root + "いた"
    case "ぐ":
      return root + "いだ"
    case "す":
      return root + "した"
  }
}

const godanToNegative = (verb) => {
  const root = verb.slice(0, -1)
  const last = verb.slice(-1)

  if (last === "う") {
    return root + "わない"
  }
  return root + changeVowel(last, "あ") + "ない"
}

const godanToDesire = (verb) => {
  const root = verb.slice(0, -1)
  const last = verb.slice(-1)
  return root + changeVowel(last, "い") + "たい"
}

const godanConjugateByInflection = (word, inflection) => {
  switch (inflection) {
    case InflectionTypes.PAST:
      return [godanToPast(word), WordTypes.VERB_PAST]
    case InflectionTypes.NEGATIVE:
      return [godanToNegative(word), WordTypes.ADJECTIVE_KEIYOUSHI]
    case InflectionTypes.DESIRE:
      return [godanToDesire(word), WordTypes.ADJECTIVE_KEIYOUSHI]
    default:
      return word
  }
}

const godanConjugate = (word) => {
  const inflection = word.inflections[word.inflections.length - 1]
  const restInflections = word.inflections.slice(0, -1)
  const inflectedWord = godanConjugateByInflection(word.word, inflection)

  return {
    ...word,
    word: inflectedWord[0],
    category: inflectedWord[1],
    inflections: restInflections
  }
}

module.exports = { godanConjugate, godanToPast, godanToNegative, godanToDesire }