import WordTypes from "./word-types"
import { ichidanConjugate } from "./ichidan"
import { godanConjugate } from "./godan"
import { keiyoushiConjugate } from "./keiyoushi"

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

export const inflect = (word) => {
  return word.inflections.length <= 0
    ? word
    : inflect(inflectStep(word))
}