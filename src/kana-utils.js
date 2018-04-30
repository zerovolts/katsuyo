const kanaMap = require("./kana-map")

const isHiragana = (kana) => {
  const firstCodePoint = 12352
  const lastCodePoint = 12447
  const codePoint = kana.codePointAt(0)
  return (codePoint >= firstCodePoint && codePoint <= lastCodePoint )
}

// offset +96
const isKatakana = (kana) => {
  const firstCodePoint = 12448
  const lastCodePoint = 12543
  const codePoint = kana.codePointAt(0)
  return (codePoint >= firstCodePoint && codePoint <= lastCodePoint )
}

const consonants = "kgszjtdcnhfbpvmyrwl"
const vowels = "aiueo"
const toKana = (romaji) => {
  let splitRomaji = []
  let currentKana = ""

  for (let i = 0; i < romaji.length; i++) {
    // check for "nn", "n'", and "n "
    if (currentKana === "n") {
      if (romaji[i] === "n" || romaji[i] === "'" || romaji[i] === " ") {
        splitRomaji.push(currentKana)
        currentKana = ""
        // "n" will also pass the consonant test, so it must be skipped
        continue
      }
    }
    if (consonants.includes(romaji[i])) {
      if (currentKana == romaji[i]) {
        splitRomaji.push("ltu") // check for っ
        currentKana = ""
      }
      // consonants always have a vowel after them, so don't push to the list yet
      currentKana += romaji[i]
    } else {
      currentKana += romaji[i]
      splitRomaji.push(currentKana)
      currentKana = ""
    }
  }

  // pushes an empty string to the end unless you are halfway through writing a kana
  // (i.e., you have typed a consonant without a vowel)
  splitRomaji.push(currentKana)

  return splitRomaji.map(c => kanaMap[c] ? kanaMap[c] : c).join("")
}

// returns {hiragana: 78.2, katakana: 13.5, other: 8.3}
const kanaPercentages = (text) => {
  const total = text.length
  const counts = {
    hiragana: 0,
    katakana: 0,
    other: 0
  }

  text.split("").forEach(kana => {
    if (isHiragana(kana)) {
      counts.hiragana += 1
    } else if (isKatakana(kana)) {
      counts.katakana += 1
    } else {
      counts.other += 1
    }
  })

  return {
    hiragana: (counts.hiragana / total) * 100,
    katakana: (counts.katakana / total) * 100,
    other: (counts.other / total) * 100
  }
}

const groups = [
  "あいうえお",
  "かきくけこ",
  "さしすせそ",
  "たちつてと",
  "なにぬねの",
  "はひふへほ",
  "まみむめも",
  "らりるれろ" //TODO: やわ
]

const changeVowel = (kana, vowel) => {
  const vowelIndex = "aiueoあいうえお".indexOf(vowel) % 5
  const kanaGroup = groups.filter(group => group.includes(kana))[0]
  return kanaGroup[vowelIndex]
}

module.exports = {
  toKana,
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
}