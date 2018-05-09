import { test } from "ava"

import { godanToPast, godanToNegative, godanToDesire } from "./godan"

// The examples cover all 9 types of Godan verb ending, as they conjugate in different ways.
// うるつぬむぶくぐす
const examples = [
  "買う", "知る", "待つ",
  "死ぬ", "住む", "遊ぶ",
  "書く", "泳ぐ", "話す"
]
const examplesPast = [
  "買った", "知った", "待った",
  "死んだ", "住んだ", "遊んだ",
  "書いた", "泳いだ", "話した"
]
const examplesNegative = [
  "買わない", "知らない", "待たない",
  "死なない", "住まない", "遊ばない",
  "書かない", "泳がない", "話さない" 
]
const examplesDesire = [
  "買いたい", "知りたい", "待ちたい",
  "死にたい", "住みたい", "遊びたい",
  "書きたい", "泳ぎたい", "話したい" 
]

test("conjugates to past", t => {
  examples.forEach((word, index) => {
    t.is(godanToPast(word), examplesPast[index])
  })
})

test("conjugates to negative", t => {
  examples.forEach((word, index) => {
    t.is(godanToNegative(word), examplesNegative[index])
  })
})

test("conjugates to desire", t => {
  examples.forEach((word, index) => {
    t.is(godanToDesire(word), examplesDesire[index])
  })
})