const { changeVowel } = require("./kana-utils")
const InflectionTypes = require("./inflection-types")

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

const godanConjugateByInflection = (word, inflection) => {
  switch (inflection) {
    case InflectionTypes.PAST:
      return godanToPast(word)
    case InflectionTypes.NEGATIVE:
      return godanToNegative(word)
    default:
      return word
  }
}

const godanConjugate = (word) => {
  const inflection = word.inflections[word.inflections.length - 1]
  const restInflections = word.inflections.slice(0, -1)

  return {
    ...word,
    word: godanConjugateByInflection(word.word, inflection),
    inflections: restInflections
  }
}

module.exports = { godanConjugate, godanToPast, godanToNegative }