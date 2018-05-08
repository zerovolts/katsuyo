const { test } = require("ava")

const { keiyoushiToPast, keiyoushiToNegative } = require("./keiyoushi-conjugation")

test("conjugates to past", t => {
  t.is(keiyoushiToPast("怖い"), "怖かった")
})

test("conjugates to negative", t => {
  t.is(keiyoushiToNegative("怖い"), "怖くない")
})