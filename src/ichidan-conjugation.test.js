const { test } = require("ava")

const { ichidanToPast, ichidanToNegative, ichidanToDesire } = require("./ichidan-conjugation")

test("conjugates to past", t => {
  t.is(ichidanToPast("見る"), "見た")
})

test("conjugates to negative", t => {
  t.is(ichidanToNegative("見る"), "見ない")
})

test("conjugates to desire", t => {
  t.is(ichidanToDesire("見る"), "見たい")
})