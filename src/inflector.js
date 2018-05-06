const WordTypes = require("./word-types")
const { ichidanConjugate } = require("./ichidan-conjugation")
const { godanConjugate } = require("./godan-conjugation")
const { keiyoushiConjugate } = require("./keiyoushi-conjugation")

const inflectStep = (word) => {
  switch (word.category) {
    case WordTypes.VERB_ICHIDAN:
      return ichidanConjugate(word)
    case WordTypes.VERB_GODAN:
      return godanConjugate(word)
    case WordTypes.ADJECTIVE_KEIYOUSHI:
      return keiyoushiConjugate(word)
    default:
      return word
  }
}

const inflect = (word) => {
  return word.inflections.length <= 0
    ? word
    : inflect(inflectStep(word))
}

module.exports = inflect