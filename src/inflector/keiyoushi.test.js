import { test } from "ava"

import { keiyoushiToPast, keiyoushiToNegative } from "./keiyoushi"

test("conjugates to past", t => {
  t.is(keiyoushiToPast("怖い"), "怖かった")
})

test("conjugates to negative", t => {
  t.is(keiyoushiToNegative("怖い"), "怖くない")
})