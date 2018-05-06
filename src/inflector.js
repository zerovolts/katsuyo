const WordTypes = require("./word-types")
const { ichidanConjugate } = require("./ichidan-conjugation")
const { godanConjugate } = require("./godan-conjugation")

const inflectStep = (word) => {
  switch (word.category) {
    case WordTypes.VERB_ICHIDAN:
      return ichidanConjugate(word)
    case WordTypes.VERB_GODAN:
      return godanConjugate(word)
    default:
      return word
  }
}

module.exports = inflectStep