import { test } from "ava"

import { inflect } from "./index"
import { WordTypes } from "./word-types"
import { InflectionTypes } from "./inflection-types"

const miru = {
  word: "見る",
  category: WordTypes.VERB_ICHIDAN,
  inflections: [InflectionTypes.PAST, InflectionTypes.NEGATIVE, InflectionTypes.DESIRE]
}

test("handles basic inflection", t => {
  t.is(inflect(miru).word, "見たくなかった")
})