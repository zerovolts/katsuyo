const InflectionTypes = require("./inflection-types")

const ichidanToPast = (verb) => {
  const root = verb.slice(0, -1)
  return root + "た"
}

const ichidanToNegative = (verb) => {
  const root = verb.slice(0, -1)
  return root + "ない"
}

const ichidanConjugateByInflection = (word, inflection) => {
  switch (inflection) {
    case InflectionTypes.PAST:
      return ichidanToPast(word)
    case InflectionTypes.NEGATIVE:
      return ichidanToNegative(word)
    default:
      return word
  }
}

const ichidanConjugate = (word) => {
  const inflection = word.inflections[word.inflections.length - 1]
  const restInflections = word.inflections.slice(0, -1)

  return {
    ...word,
    word: ichidanConjugateByInflection(word.word, inflection),
    inflections: restInflections
  }
}

module.exports = { ichidanConjugate, ichidanToPast, ichidanToNegative }