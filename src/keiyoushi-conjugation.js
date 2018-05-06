const { changeVowel } = require("./kana-utils")
const InflectionTypes = require("./inflection-types")
const WordTypes = require("./word-types")

const keiyoushiToPast = (word) => {
  const root = word.slice(0, -1)
  return root + "かった"
}

const keiyoushiToNegative = (word) => {
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

const keiyoushiConjugate = (word) => {
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

module.exports = { keiyoushiConjugate }